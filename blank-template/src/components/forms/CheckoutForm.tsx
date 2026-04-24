"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";
import { mockCommerceApi } from "@/lib/commerce-api";
import { formatMoney } from "@/lib/pricing";
import { isRequired, isValidEmail, numericLengthBetween, postalCodeValid } from "@/lib/validation";
import type { CheckoutAddress, CheckoutInput } from "@/types/commerce";

type CheckoutFormData = {
  firstName: string;
  lastName: string;
  company: string;
  country: string;
  streetAddress1: string;
  streetAddress2: string;
  postcode: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  createAccount: boolean;
  shipToDifferentAddress: boolean;
  termsAccepted: boolean;
  paymentMethod: "card" | "paypal" | "cash_on_delivery";
};

type ErrorMap = Partial<Record<keyof CheckoutFormData, string>>;

const initialData: CheckoutFormData = {
  firstName: "",
  lastName: "",
  company: "",
  country: "united_kingdom",
  streetAddress1: "",
  streetAddress2: "",
  postcode: "",
  city: "",
  state: "",
  phone: "",
  email: "",
  createAccount: false,
  shipToDifferentAddress: false,
  termsAccepted: false,
  paymentMethod: "card",
};

function toAddress(data: CheckoutFormData): CheckoutAddress {
  return {
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    addressLine1: data.streetAddress1.trim(),
    addressLine2: data.streetAddress2.trim() || undefined,
    city: data.city.trim(),
    state: data.state.trim() || undefined,
    postalCode: data.postcode.trim(),
    country: data.country,
    phone: data.phone.trim() || undefined,
  };
}

export default function CheckoutForm() {
  const { items, pricing, clearCart } = useCart();
  const [form, setForm] = useState<CheckoutFormData>(initialData);
  const [errors, setErrors] = useState<ErrorMap>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const cartEmpty = items.length === 0;

  const subtotalLabel = useMemo(
    () => formatMoney(pricing.subtotal, pricing.currency),
    [pricing.subtotal, pricing.currency],
  );
  const totalLabel = useMemo(
    () => formatMoney(pricing.total, pricing.currency),
    [pricing.total, pricing.currency],
  );

  const onFieldChange = <K extends keyof CheckoutFormData>(key: K, value: CheckoutFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): ErrorMap => {
    const nextErrors: ErrorMap = {};

    if (!isRequired(form.firstName)) nextErrors.firstName = "First name is required.";
    if (!isRequired(form.lastName)) nextErrors.lastName = "Last name is required.";
    if (!isRequired(form.streetAddress1)) nextErrors.streetAddress1 = "Street address is required.";
    if (!isRequired(form.city)) nextErrors.city = "City is required.";
    if (!postalCodeValid(form.postcode)) nextErrors.postcode = "Postal code is invalid.";
    if (!isValidEmail(form.email)) nextErrors.email = "Email format is invalid.";

    if (form.phone && !numericLengthBetween(form.phone, 7, 15)) {
      nextErrors.phone = "Phone number should have 7 to 15 digits.";
    }

    if (!form.termsAccepted) {
      nextErrors.termsAccepted = "You must accept terms and conditions to continue.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitError(null);
    setSubmitSuccess(null);

    if (cartEmpty) {
      setSubmitError("Your cart is empty. Add products before checkout.");
      return;
    }

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitError("Please fix validation errors before placing the order.");
      return;
    }

    const payload: CheckoutInput = {
      email: form.email.trim(),
      items,
      shippingAddress: toAddress(form),
      billingAddress: form.shipToDifferentAddress ? undefined : toAddress(form),
      paymentMethod: form.paymentMethod,
      notes: form.company.trim() || undefined,
    };

    try {
      setSubmitting(true);
      const response = await mockCommerceApi.checkout.submitOrder(payload);
      setSubmitSuccess(`Order placed successfully. Order ID: ${response.orderId}`);
      clearCart();
      setForm(initialData);
    } catch {
      setSubmitError("We could not process your order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="checkout_details_area mt-50 clearfix">
      <div className="cart-page-heading mb-30">
        <h5>Billing Address</h5>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="first_name">First Name <span>*</span></label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              value={form.firstName}
              onChange={(event) => onFieldChange("firstName", event.target.value)}
              aria-invalid={Boolean(errors.firstName)}
              aria-describedby={errors.firstName ? "error-first-name" : undefined}
            />
            {errors.firstName ? <small id="error-first-name">{errors.firstName}</small> : null}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="last_name">Last Name <span>*</span></label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              value={form.lastName}
              onChange={(event) => onFieldChange("lastName", event.target.value)}
              aria-invalid={Boolean(errors.lastName)}
              aria-describedby={errors.lastName ? "error-last-name" : undefined}
            />
            {errors.lastName ? <small id="error-last-name">{errors.lastName}</small> : null}
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="company">Company Name</label>
            <input
              type="text"
              className="form-control"
              id="company"
              value={form.company}
              onChange={(event) => onFieldChange("company", event.target.value)}
            />
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="country">Country <span>*</span></label>
            <select
              className="w-100"
              id="country"
              value={form.country}
              onChange={(event) => onFieldChange("country", event.target.value)}
            >
              <option value="united_kingdom">United Kingdom</option>
              <option value="usa">United States</option>
              <option value="france">France</option>
              <option value="spain">Spain</option>
              <option value="germany">Germany</option>
            </select>
          </div>

          <div className="col-12 mb-3">
            <label htmlFor="street_address">Address <span>*</span></label>
            <input
              type="text"
              className="form-control mb-3"
              id="street_address"
              value={form.streetAddress1}
              onChange={(event) => onFieldChange("streetAddress1", event.target.value)}
              placeholder="House number and street name"
              aria-invalid={Boolean(errors.streetAddress1)}
              aria-describedby={errors.streetAddress1 ? "error-address" : undefined}
            />
            <input
              type="text"
              className="form-control"
              id="street_address2"
              value={form.streetAddress2}
              onChange={(event) => onFieldChange("streetAddress2", event.target.value)}
              placeholder="Apartment, suite, unit etc."
            />
            {errors.streetAddress1 ? <small id="error-address">{errors.streetAddress1}</small> : null}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="postcode">Postcode <span>*</span></label>
            <input
              type="text"
              className="form-control"
              id="postcode"
              value={form.postcode}
              onChange={(event) => onFieldChange("postcode", event.target.value)}
              aria-invalid={Boolean(errors.postcode)}
              aria-describedby={errors.postcode ? "error-postcode" : undefined}
            />
            {errors.postcode ? <small id="error-postcode">{errors.postcode}</small> : null}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="city">Town/City <span>*</span></label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={form.city}
              onChange={(event) => onFieldChange("city", event.target.value)}
              aria-invalid={Boolean(errors.city)}
              aria-describedby={errors.city ? "error-city" : undefined}
            />
            {errors.city ? <small id="error-city">{errors.city}</small> : null}
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="state">Province</label>
            <input
              type="text"
              className="form-control"
              id="state"
              value={form.state}
              onChange={(event) => onFieldChange("state", event.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="phone_number">Phone No</label>
            <input
              type="tel"
              className="form-control"
              id="phone_number"
              value={form.phone}
              onChange={(event) => onFieldChange("phone", event.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "error-phone" : undefined}
            />
            {errors.phone ? <small id="error-phone">{errors.phone}</small> : null}
          </div>

          <div className="col-12 mb-4">
            <label htmlFor="email_address">Email Address <span>*</span></label>
            <input
              type="email"
              className="form-control"
              id="email_address"
              value={form.email}
              onChange={(event) => onFieldChange("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "error-email" : undefined}
            />
            {errors.email ? <small id="error-email">{errors.email}</small> : null}
          </div>

          <div className="col-12">
            <div className="custom-control custom-checkbox d-block mb-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
                checked={form.createAccount}
                onChange={(event) => onFieldChange("createAccount", event.target.checked)}
              />
              <label className="custom-control-label" htmlFor="customCheck1">Create an account</label>
            </div>
            <div className="custom-control custom-checkbox d-block mb-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck2"
                checked={form.shipToDifferentAddress}
                onChange={(event) => onFieldChange("shipToDifferentAddress", event.target.checked)}
              />
              <label className="custom-control-label" htmlFor="customCheck2">Ship to a different address</label>
            </div>
            <div className="custom-control custom-checkbox d-block mb-2">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck3"
                checked={form.termsAccepted}
                onChange={(event) => onFieldChange("termsAccepted", event.target.checked)}
              />
              <label className="custom-control-label" htmlFor="customCheck3">Terms and conditions</label>
            </div>
            {errors.termsAccepted ? <small>{errors.termsAccepted}</small> : null}
          </div>

          <div className="col-12 mt-4">
            <h5>Payment method</h5>
            <div className="custom-control custom-radio d-block mb-2">
              <input
                type="radio"
                id="payment_card"
                className="custom-control-input"
                checked={form.paymentMethod === "card"}
                onChange={() => onFieldChange("paymentMethod", "card")}
              />
              <label className="custom-control-label" htmlFor="payment_card">Card</label>
            </div>
            <div className="custom-control custom-radio d-block mb-2">
              <input
                type="radio"
                id="payment_paypal"
                className="custom-control-input"
                checked={form.paymentMethod === "paypal"}
                onChange={() => onFieldChange("paymentMethod", "paypal")}
              />
              <label className="custom-control-label" htmlFor="payment_paypal">PayPal</label>
            </div>
            <div className="custom-control custom-radio d-block mb-2">
              <input
                type="radio"
                id="payment_cod"
                className="custom-control-input"
                checked={form.paymentMethod === "cash_on_delivery"}
                onChange={() => onFieldChange("paymentMethod", "cash_on_delivery")}
              />
              <label className="custom-control-label" htmlFor="payment_cod">Cash on delivery</label>
            </div>
          </div>

          <div className="col-12 mt-4" aria-live="polite">
            {submitError ? <p>{submitError}</p> : null}
            {submitSuccess ? <p>{submitSuccess}</p> : null}
          </div>

          <div className="col-12 mt-2">
            <button type="submit" className="btn essence-btn" disabled={submitting || cartEmpty}>
              {submitting ? "Processing order..." : "Place Order"}
            </button>
            <p className="mt-3 mb-0">Cart subtotal: {subtotalLabel}</p>
            <p className="mb-0">Order total: {totalLabel}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

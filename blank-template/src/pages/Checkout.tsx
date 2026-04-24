import CheckoutForm from "@/components/forms/CheckoutForm";

export const metadata = {
  title: "Checkout",
  description: "Complete your order securely with validated checkout details.",
  alternates: {
    canonical: "/checkout",
  },
};

export default function CheckoutPage() {
  return (
    <main>
      <div className="breadcumb_area bg-img" style={{ backgroundImage: "url('/img/bg-img/breadcumb.jpg')" }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Checkout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout_area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <CheckoutForm />
            </div>

            <div className="col-12 col-md-4">
              <div className="checkout-content mt-50">
                <h5 className="title--">Why shop with us?</h5>
                <div className="products">
                  <div className="single_products d-flex justify-content-between">
                    <p>Secure checkout</p>
                    <p>SSL</p>
                  </div>
                  <div className="single_products d-flex justify-content-between">
                    <p>Shipping support</p>
                    <p>24/7</p>
                  </div>
                  <div className="single_products d-flex justify-content-between">
                    <p>Free shipping from</p>
                    <p>$200</p>
                  </div>
                </div>
                <p className="mt-4 mb-0">
                  Complete your details and place your order. You will get instant feedback for validation and order status.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

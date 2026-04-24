export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function minLength(value: string, size: number): boolean {
  return value.trim().length >= size;
}

export function numericLengthBetween(value: string, min: number, max: number): boolean {
  const digitsOnly = value.replace(/\D/g, "");
  return digitsOnly.length >= min && digitsOnly.length <= max;
}

export function postalCodeValid(value: string): boolean {
  return /^[A-Za-z0-9\-\s]{4,10}$/.test(value.trim());
}

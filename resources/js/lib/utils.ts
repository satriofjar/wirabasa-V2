import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, locale: string = 'id-ID', currency: string = 'IDR'): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2, // Ensure at least two decimal places
        maximumFractionDigits: 2, // Ensure at most two decimal places
    }).format(amount);
}


export function getDiscount(amount: number, discount: number): number {
    return amount * (discount / 100);
}

export function getFinalPrice(amount: number, discount: number, pages: number = 1): number {
    return (amount - (amount * (discount / 100))) * pages;

}



export function formatDateTimeLocal(value: string): string {
  if (!value) return "";
  const date = new Date(value);
  const pad = (num: number) => String(num).padStart(2, "0");

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes())
  );
}



export function formatDate (x:string): string {

    const date = new Date(x);
    const hour = date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
    const day = String(date.getDate()).padStart(2, '0');
    const month = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ][date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year} - ${hour} `}

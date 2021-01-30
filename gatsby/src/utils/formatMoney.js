const formatter = Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}

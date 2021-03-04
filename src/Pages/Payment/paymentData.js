export const buyProps = [
  {
    tab: "Place Bid",
    inputNum: "buyInput",
    addFee: [
      { label: "Processing Fee (3%)" },
      { label: "Estimated Shipping ($13.95)" },
    ],
    total: { label: "Total" },
  },
  {
    tab: "Buy Now",
    inputNum: "buyInput",
    addFee: [
      { label: "Processing Fee (3%)" },
      { label: "Estimated Shipping ($13.95)" },
    ],
    total: { label: "Total" },
  },
];
export const sellProps = [
  {
    tab: "Place Ask",
    inputNum: "sellInput",
    addFee: [
      { label: "Transaction Fee (9.5%)" },
      { label: "Payment Proc (3%)" },
      { label: "Estimated Shipping ($13.95)" },
    ],
    total: { label: "Total Payout" },
  },
  {
    tab: "Sell Now",
    inputNum: "sellInput",
    addFee: [
      { label: "Transaction Fee (9.5%)" },
      { label: "Payment Proc (3%)" },
      { label: "Estimated Shipping ($13.95)" },
    ],
    total: { label: "Total Payout" },
  },
];

export const buyWarningMsg = {
  lessThanHigh: "You are not the highest bid",
  equalToHigh:
    "You are about to match the highest Bid. Their bid will be accepted before yours.",
  greaterThanHigh: "You are about to be the highest bidder",
  greaterThanLow:
    "You are about to purchase this product at the lowest Ask price",
};

export const sellWarningMsg = {
  lessThanLow: "You are about to be the lowest Ask",
  equalToLow:
    "You are about to match the lowest Ask. Their Ask will be accepted before yours.",
  greaterThanLow: "You are not the lowest Ask",
  lessThanHigh: "You are about to sell at the highest Bid price",
};

export const billingProps = [
  { name: "name", text: "First Name & Last Name" },
  { name: "country", text: "Country" },
  { name: "address", text: "Address" },
  { name: "address", text: "Address 2" },
  { name: "city", text: "City" },
  { name: "state", text: "State/Province/Region" },
  { name: "zipCode", text: "Zip/Postal Code" },
  { name: "phoneNumber", text: "Phone Number" },
];

export const notAvailableProps = {
  bid: "You must meet the minimum Bid of $25",
  ask: "You must meet the minimum Ask of $25",
};

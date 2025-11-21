"use strict";
class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let i = 0; i < transactions.length; i++) {
  try {
    const tx = transactions[i];
    if (tx === null) throw new NullEntryError("Null entry");
    if (!("id" in tx)) throw new MissingFieldError("Missing id");
    if (!("amount" in tx)) throw new MissingFieldError("Missing amount");
    if (tx.amount < 0) throw new NegativeAmountError("Negative amount");

    validTransactions.push(tx);
  } catch (err) {
    invalidTransactions.push({ index: i, error: err.message });
  }
}
console.log("Valid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
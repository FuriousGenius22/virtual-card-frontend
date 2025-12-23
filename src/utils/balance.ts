const BALANCE_KEY = "total_account_balance";

export function getBalance(): number {
  return Number(localStorage.getItem(BALANCE_KEY) || 0);
}

export function setBalance(amount: number) {
  localStorage.setItem(BALANCE_KEY, amount.toString());
}

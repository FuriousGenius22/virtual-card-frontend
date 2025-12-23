import EmptyState from "../components/Transactions/EmptyState";

export default function Declineboard() {
  return (
    <>
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <div className="flex justify-between text-sm text-gray-500 mb-4 px-4">
          <span>Date</span>
          <span>Transaction type</span>
          <span>Amount</span>
        </div>

        <EmptyState />
      </div>
    </>
  );
}

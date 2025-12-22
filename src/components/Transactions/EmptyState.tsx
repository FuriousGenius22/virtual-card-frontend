import nothingFound from "../../assets/nothingfound.webm";

export default function EmptyState() {
  return (
    <div className="border border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center bg-white">
      <video
        src={nothingFound}
        autoPlay
        loop
        muted
        className="w-40 h-40 mb-4"
      />
      <p className="text-lg font-semibold">Nothing found</p>
    </div>
  );
}
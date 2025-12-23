import { ArrowLeft, XCircle, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Grades() {
  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-3 text-sm text-gray-600">
        <Link
          to="/dashboard"
          className="rounded-full bg-gray-100 p-1 hover:bg-gray-200 transition"
        >
          <ArrowLeft size={16} />
        </Link>
        <span className="font-medium">Dashboard</span>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900">Account levels</h1>

      {/* ================= TOP CARDS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* LEFT CARD */}
        <div className="rounded-2xl border border-blue-100 bg-gray-50 p-6">
          <p className="text-lg text-gray-700">
            Your account level:{" "}
            <span className="font-semibold text-gray-900">Standard</span>
          </p>

          <div className="mt-6">
            <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full w-0 bg-blue-500" />
            </div>

            <div className="mt-3 flex justify-between text-sm text-gray-700">
              <span>Spent in 30 days: $0</span>
              <span className="text-gray-500">$1,000 left of $1,000</span>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="rounded-2xl border border-blue-100 bg-gray-50 p-6">
          <p className="font-semibold text-gray-900 mb-3">
            To get a new level you need
          </p>

          <ul className="space-y-3">
            {["Spend $1,000", "KYC", "Verify Email"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-red-500"
              >
                <XCircle size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ================= LEVEL TABLE ================= */}
      <div className="rounded-2xl overflow-hidden border border-blue-100">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-4 bg-gray-50 px-6 py-4 text-sm font-medium text-gray-700">
          <span>Level</span>
          <span>Terms</span>
          <span>Min.Commission</span>
          <span>Issue/Renewal</span>
        </div>

        {/* ROW: STANDARD */}
        <div className="grid grid-cols-4 items-center px-6 py-5 border-t">
          <div>
            <span className="text-xs text-blue-600 block mb-1">
              Your level
            </span>
            <span className="font-semibold text-gray-900">Standard</span>
          </div>
          <span>Upon registration</span>
          <span>6.7%</span>
          <span>$4</span>
        </div>

        {/* OTHER LEVELS */}
        <LevelRow
          level="Silver"
          terms="$1,000"
          commission="6%"
          fee="$3.5"
        />
        <LevelRow
          level="Gold"
          terms="$10,000"
          commission="5%"
          fee="$3"
        />
        <LevelRow
          level="Platinum"
          terms="$50,000"
          commission="4%"
          fee="$2.5"
        />
        <LevelRow
          level="Black"
          terms="$100,000"
          commission="3%"
          fee="$2"
        />
      </div>
    </div>
  );
}

/* ================= SUB COMPONENT ================= */

function LevelRow({
  level,
  terms,
  commission,
  fee,
}: {
  level: string;
  terms: string;
  commission: string;
  fee: string;
}) {
  return (
    <div className="grid grid-cols-4 items-center px-6 py-5 border-t">
      <span className="font-semibold text-gray-900">{level}</span>

      <div className="flex items-center gap-2">
        <span>{terms}</span>
        <BadgeCheck size={16} className="text-blue-600" />
        <span className="text-blue-600 text-sm">KYC</span>
      </div>

      <span>{commission}</span>
      <span>{fee}</span>
    </div>
  );
}

import { useState } from "react";
import {
  CheckCircle,
  Copy,
  RefreshCw,
} from "lucide-react";

/* ---------- MAIN PAGE ---------- */

export default function Security() {
  return (
    <div className="space-y-6 max-w-5xl mt-10">
      <AuthorizationSettings />
      <ApiToken />
      <TwoFactorProviders />
      <TwoFactorAuthorization />
      <LastActivity />
    </div>
  );
}

/* ---------- AUTHORIZATION SETTINGS ---------- */

function AuthorizationSettings() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
      <h2 className="text-xl font-semibold">Authorization settings</h2>

      {/* Email */}
      <SettingRow
        label="Email"
        value="Andromeda0723@outlook.com"
        action="Edit"
      />

      {/* Confirm banner */}
      <div className="flex items-center gap-2 rounded-lg border border-green-300 bg-green-50 px-4 py-3 text-green-700">
        <CheckCircle size={18} />
        <span className="text-sm font-medium">
          Please confirm your email address
        </span>
      </div>

      {/* Password */}
      <SettingRow
        label="Password"
        value="************"
        action="Edit"
      />
    </div>
  );
}

function SettingRow({
  label,
  value,
  action,
}: {
  label: string;
  value: string;
  action: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
      <button className="text-sm text-blue-600 hover:underline">
        {action}
      </button>
    </div>
  );
}

/* ---------- API TOKEN ---------- */

function ApiToken() {
  const [copied, setCopied] = useState(false);
  const token =
    "2175196|vzQR114dHevvqwAk8ty2eN1mPTPudzUOP09pYH9Z3c93326a";

  const copyToken = async () => {
    await navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
      <h2 className="text-xl font-semibold">Your API token</h2>

      <p className="text-sm text-gray-600">
        You need an API token to interact with{" "}
        <span className="text-blue-600">our API</span>
        <br />
        You can fully automate your work with us
      </p>

      <div className="flex gap-3">
        <div className="flex-1 flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
          <div>
            <p className="text-xs text-gray-500">Token</p>
            <p className="text-sm font-mono break-all">{token}</p>
          </div>

          <button onClick={copyToken} className="text-gray-500 hover:text-gray-700">
            <Copy size={18} />
          </button>
        </div>

        <button className="rounded-lg border border-gray-200 bg-gray-50 px-4 hover:bg-gray-100">
          <RefreshCw size={18} />
        </button>
      </div>

      {copied && (
        <p className="text-xs text-green-600">Token copied</p>
      )}
    </div>
  );
}

/* ---------- 2FA PROVIDERS ---------- */

function TwoFactorProviders() {
  return (
    <div className="space-y-4">
      <ProviderCard
        title="Telegram Bot"
        description="Top-up cards, manage teams, get 2-FA and much more"
        icon="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
        primary
      />

      <ProviderCard
        title="Google Authenticator"
        description="A convenient tool for 2FA codes if you don't have Telegram"
        icon="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
      />
    </div>
  );
}

function ProviderCard({
  title,
  description,
  icon,
  primary,
}: {
  title: string;
  description: string;
  icon: string;
  primary?: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-5">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center">
          <img src={icon} alt={title} className="h-6 w-6" />
        </div>

        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <button
        className={`px-4 py-2 rounded-lg text-sm font-medium
          ${
            primary
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
      >
        Connect
      </button>
    </div>
  );
}

/* ---------- TWO-FA AUTHORIZATION ---------- */

function TwoFactorAuthorization() {
  const options = [
    "Allow viewing card details in Telegram",
    "Two-factor authorization to login",
    "Two-factor authorization to view card details",
    "Two-factor authorization to withdraw money",
    "Two-factor authorization to send money to another user",
  ];

  const checked = [false, false, false, true, true];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
      <h2 className="text-xl font-semibold">
        Two-factor authorization
      </h2>

      {options.map((label, i) => (
        <label
          key={label}
          className="flex items-center justify-between text-sm cursor-pointer"
        >
          <span>{label}</span>
          <input
            type="checkbox"
            defaultChecked={checked[i]}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
        </label>
      ))}
    </div>
  );
}

/* ---------- LAST ACTIVITY ---------- */

function LastActivity() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Last activity</h2>

        <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm hover:bg-gray-200">
          Reset all sessions except the current one
        </button>
      </div>

      <table className="w-full text-sm">
        <thead className="border-b text-gray-500">
          <tr>
            <th className="py-2 text-left">Date/Time</th>
            <th className="py-2 text-left">Last login from IP</th>
            <th className="py-2 text-left">Location</th>
            <th className="py-2 text-left">Browser</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3">12-22-2025, 11:33 PM</td>
            <td>80.237.87.248</td>
            <td>Russia</td>
            <td>Chrome</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end">
        <button className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 hover:bg-red-100">
          Delete
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";

type Channel = "mail" | "telegram" | "mobile";

type Row = {
  label: string;
  values: Record<Channel, boolean>;
};

export default function Notification() {
  const [, setTelegramConnected] = useState(false);

  const [generalNotifications, setGeneralNotifications] = useState<Row[]>([
    {
      label: "System",
      values: { mail: true, telegram: true, mobile: true },
    },
    {
      label: "Log-in notification",
      values: { mail: false, telegram: false, mobile: false },
    },
    {
      label: "Ticket answer",
      values: { mail: true, telegram: true, mobile: true },
    },
    {
      label: "Restricted operation",
      values: { mail: true, telegram: true, mobile: false },
    },
  ]);

  const [teamNotifications, setTeamNotifications] = useState<Row[]>([
    {
      label: "Teams",
      values: { mail: true, telegram: true, mobile: true },
    },
    {
      label: "Team owner demand",
      values: { mail: true, telegram: true, mobile: true },
    },
    {
      label: "Team join request",
      values: { mail: true, telegram: true, mobile: true },
    },
  ]);

  const [cardNotifications, setCardNotifications] = useState<Row[]>([
    {
      label: "3DS codes",
      values: { mail: true, telegram: true, mobile: true },
    },
    {
      label: "Card transactions",
      values: { mail: false, telegram: true, mobile: false },
    },
    {
      label: "Card blockage",
      values: { mail: true, telegram: false, mobile: false },
    },
    {
      label: "Successful autoreplenishment",
      values: { mail: false, telegram: true, mobile: false },
    },
    {
      label: "Failed autoreplenishment",
      values: { mail: true, telegram: true, mobile: false },
    },
    {
      label: "Not enough funds for the upcoming autoreplenishment",
      values: { mail: false, telegram: true, mobile: true },
    },
    {
      label: "Balance replenishment",
      values: { mail: false, telegram: false, mobile: true },
    },
  ]);

  const toggleRow = (
    rows: Row[],
    setRows: React.Dispatch<React.SetStateAction<Row[]>>,
    rowIndex: number,
    channel: Channel
  ) => {
    setRows(
      rows.map((row, i) =>
        i === rowIndex
          ? {
              ...row,
              values: {
                ...row.values,
                [channel]: !row.values[channel],
              },
            }
          : row
      )
    );
  };

  return (
    <div className="space-y-8 mt-10">
      {/* ================= NOTIFICATION SETTINGS ================= */}
      <section className="rounded-2xl border border-blue-100 p-8">
        <h2 className="text-xl font-semibold mb-6">Notification settings</h2>

        {/* HEADER */}
        <div className="grid grid-cols-[1fr_120px_140px_140px] items-center mb-4 text-sm font-medium text-gray-700">
          <div />
          <div className="text-center">Mail</div>
          <div className="text-center">Telegram</div>
          <div className="text-center">Mobile App</div>
        </div>

        {/* ALL NOTIFICATIONS */}
        <div className="grid grid-cols-[1fr_120px_140px_140px] items-center mb-6">
          <span className="font-medium">All notifications</span>
          <input type="checkbox" className="mx-auto checkbox" />
          <div className="flex justify-center">
            <button
              onClick={() => setTelegramConnected(true)}
              className="rounded-lg bg-black px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800 transition"
            >
              Connect
            </button>
          </div>
          <input type="checkbox" className="mx-auto checkbox" />
        </div>

        {/* GENERAL NOTICES */}
        <p className="font-semibold mb-2">General notices</p>
        {generalNotifications.map((row, i) => (
          <NotificationRow
            key={row.label}
            row={row}
            onToggle={(channel) =>
              toggleRow(
                generalNotifications,
                setGeneralNotifications,
                i,
                channel
              )
            }
          />
        ))}

        {/* TEAM */}
        <p className="font-semibold mt-6 mb-2">Team</p>
        {teamNotifications.map((row, i) => (
          <NotificationRow
            key={row.label}
            row={row}
            onToggle={(channel) =>
              toggleRow(teamNotifications, setTeamNotifications, i, channel)
            }
          />
        ))}
      </section>

      {/* ================= DEFAULT CARD NOTIFICATIONS ================= */}
      <section className="rounded-2xl border border-blue-100 p-8">
        <h2 className="text-lg font-semibold mb-6">
          Default notification settings for new cards
        </h2>

        {cardNotifications.map((row, i) => (
          <NotificationRow
            key={row.label}
            row={row}
            onToggle={(channel) =>
              toggleRow(cardNotifications, setCardNotifications, i, channel)
            }
          />
        ))}
      </section>
    </div>
  );
}

/* ================= ROW COMPONENT ================= */

function NotificationRow({
  row,
  onToggle,
}: {
  row: Row;
  onToggle: (channel: Channel) => void;
}) {
  return (
    <div className="grid grid-cols-[1fr_120px_140px_140px] items-center py-2">
      <span className="text-sm text-gray-800">{row.label}</span>

      {(["mail", "telegram", "mobile"] as Channel[]).map((channel) => (
        <input
          key={channel}
          type="checkbox"
          checked={row.values[channel]}
          onChange={() => onToggle(channel)}
          className="mx-auto checkbox"
        />
      ))}
    </div>
  );
}

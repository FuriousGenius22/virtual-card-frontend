import { type FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Send,
  ShieldCheck,
  UserCheck,
  Bell,
  Settings,
  Languages,
  LogOut,
} from "lucide-react";

interface ProfileDropdownProps {
  email: string;
  imageUrl?: string;
  onClose: () => void;
}

const ProfileDropdown: FC<ProfileDropdownProps> = ({
  email,
  imageUrl,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initials = email.slice(0, 2).toUpperCase();
  const hasImage = Boolean(imageUrl);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-2 w-72 bg-white
                 rounded-lg shadow-xl border border-gray-200 z-50"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 border-b rounded-t-lg">
        {/* Avatar */}
        <div
          className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-white
          ${hasImage ? "border-2 border-blue-500" : "border-2 border-red-800"}`}
        >
          {hasImage ? (
            <img
              src={imageUrl}
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-blue-600">{initials}</span>
          )}

          {/* Status */}
          <span
            className={`absolute -bottom-0 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center
            text-[10px] text-white
            ${hasImage ? "bg-blue-500" : "bg-red-800"}`}
          >
            {hasImage ? "✓" : "✕"}
          </span>
        </div>

        {/* Email + level */}
        <div className="min-w-0">
          <p className="text-sm font-medium truncate">{email}</p>
          <button className="text-xs text-blue-600 hover:underline">
            Account level – Standard
          </button>
        </div>
      </div>

      {/* MENU */}
      <ul className="py-2 text-sm">
        <Item icon={<Send size={18} />} label="Connect Telegram" />
        <Divider />

        <Item
          icon={<ShieldCheck size={18} />}
          label="Safety and security"
          to="/settings/security"
          onClick={onClose}
        />

        <Item icon={<UserCheck size={18} />} label="KYC Required" />
        <Divider />

        <Item
          icon={<Bell size={18} />}
          label="Notifications settings"
          to="/settings/notifications"
          onClick={onClose}
        />

        <Item
          icon={<Settings size={18} />}
          label="Settings"
          to="/settings/general"
          onClick={onClose}
        />

        <Item icon={<Languages size={18} />} label="Language" right />
        <Divider />

        <Item icon={<LogOut size={18} />} label="Exit account" danger />
      </ul>
    </div>
  );
};

export default ProfileDropdown;

/* ---------- helpers ---------- */

function Item({
  icon,
  label,
  right,
  danger,
  to,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  right?: boolean;
  danger?: boolean;
  to?: string;
  onClick?: () => void;
}) {
  const content = (
    <li
      className={`flex items-center justify-between px-4 py-2 cursor-pointer
      ${danger ? "text-red-500" : "text-gray-700"}
      hover:bg-gray-100`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {right && <span className="text-gray-400">›</span>}
    </li>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

function Divider() {
  return <div className="my-1 h-px bg-gray-200" />;
}

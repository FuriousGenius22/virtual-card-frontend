import { type FC, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Send,
  ShieldCheck,
  UserCheck,
  Bell,
  Settings,
  Languages,
  LogOut,
} from "lucide-react";
import { logout } from "../../services/mockAuth";

interface ProfileDropdownProps {
  email: string;
  imageUrl?: string;
  onClose: () => void;
}

const getInitials = (email: string) => {
  if (!email) return "UN";
  const name = email.split("@")[0];
  return name.slice(0, 2).toUpperCase();
};

const ProfileDropdown: FC<ProfileDropdownProps> = ({
  email,
  imageUrl,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const initials = getInitials(email);
  const hasImage = Boolean(imageUrl);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const handleLogout = async () => {
    try {
      await logout();
          navigate("/");
          window.location.reload();
        } catch (error) {      console.error("Failed to log out", error);
    }
  };

  return (
    <div
      ref={ref}
      className="absolute right-0 z-50 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl top-full w-72"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 px-4 py-3 border-b rounded-t-lg bg-gray-50">
        {/* Avatar */}
        <div
          className={`relative w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-white
          ${hasImage ? "border-2 border-blue-500" : "border-2 border-red-800"}`}
        >
          {hasImage ? (
            <img
              src={imageUrl}
              alt="Profile"
              className="object-cover w-full h-full rounded-full"
            />
          ) : (
            <span className="text-blue-600">{initials}</span>
          )}
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

        <Item
          icon={<LogOut size={18} />}
          label="Exit account"
          danger
          onClick={handleLogout}
        />
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
  return <div className="h-px my-1 bg-gray-200" />;
}
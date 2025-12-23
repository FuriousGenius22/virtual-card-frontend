import type { FC } from "react";

interface ProfileAvatarProps {
  email: string;
  imageUrl?: string;
  onToggle: () => void;
}

const ProfileAvatar: FC<ProfileAvatarProps> = ({
  email,
  imageUrl,
  onToggle,
}) => {
  const initials = email.slice(0, 2).toUpperCase();
  const hasImage = Boolean(imageUrl);

  return (
    <button
      onClick={onToggle}
      className="relative flex items-center justify-center w-10 h-10"
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold bg-[#ecf0f5]
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

      <span
        className={`absolute -bottom-0 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white
        ${hasImage ? "bg-blue-500" : "bg-red-800"}`}
      >
        {hasImage ? "✓" : "✕"}
      </span>
    </button>
  );
};

export default ProfileAvatar;

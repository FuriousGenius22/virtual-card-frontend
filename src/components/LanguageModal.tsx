import React, { useState } from "react";
import { Countries } from "../components/Countries";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  onSelect?: (country: { name: string; code: string }) => void;
};

const LanguageModal: React.FC<ModalProps> = ({ visible, onClose, onSelect }) => {
  const [search, setSearch] = useState("");

  if (!visible) return null;

  const filtered = Countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-[360px] max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
            🔍
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Scroll Area with padding bar */}
        <div
          className="flex-1 overflow-y-auto px-2 py-2"
          style={{ scrollbarGutter: "stable" }}
        >
          {filtered.map((c) => (
            <button
              key={c.code}
              onClick={() => {
                onSelect?.(c);
                onClose();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 text-left"
            >
              <img
                src={`https://flagcdn.com/24x18/${c.code}.png`}
                className="w-6 h-4 rounded-sm"
                alt={c.name}
              />
              <span className="text-sm font-medium">{c.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageModal;

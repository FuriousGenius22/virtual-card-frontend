import React, { useState } from "react";

const languages = [
  { name: "English", native: "English", code: "gb" },
  { name: "Arabic", native: "اللغة العربية", code: "ae" },
  { name: "Belarusian", native: "Белорусский", code: "by" },
  { name: "Bengali", native: "বাংলা", code: "bd" },
  { name: "Bulgarian", native: "Български", code: "bg" },
  { name: "Chinese", native: "中文", code: "cn" },
  { name: "Czech", native: "Česky", code: "cz" },
  { name: "Danish", native: "Dansk", code: "dk" },
  { name: "Dutch", native: "Nederlands", code: "nl" },
];

type ModalProps = {
  visible: boolean;
  onClose: () => void;
};

const LanguageModal: React.FC<ModalProps> = ({ visible, onClose }) => {
  const [search, setSearch] = useState("");

  if (!visible) return null;

  const filtered = languages.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.native.includes(search)
  );

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-[360px] max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search */}
        <div className="p-4">
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

        {/* Language List */}
        <div className="overflow-y-auto">
          {filtered.map((l, i) => (
            <div key={l.code}>
              <button
                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-gray-100 text-left"
                onClick={onClose}
              >
                <img
                  src={`https://flagcdn.com/24x18/${l.code}.png`}
                  className="w-6 h-4 rounded-sm"
                  alt={l.name}
                />
                <div>
                  <p className="text-sm font-medium">{l.name}</p>
                  <p className="text-xs text-gray-500">{l.native}</p>
                </div>
              </button>

              {i === 0 && <div className="h-px bg-gray-200 mx-5" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default LanguageModal
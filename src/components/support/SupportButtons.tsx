import React from "react";
import SupportButton from "./SupportButton";
import { MessageCircle, Send } from "lucide-react";
import { FaWeixin, FaWhatsapp } from "react-icons/fa";

const SupportButtons: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
      <SupportButton icon={<MessageCircle size={14} />} label="Online chat" />
      <SupportButton icon={<FaWeixin size={14} />} label="WeChat" />
      <SupportButton icon={<FaWhatsapp size={14} />} label="WhatsApp" />
      <SupportButton icon={<Send size={14} />} label="Telegram" />
    </div>
  );
};

export default SupportButtons;

import React from "react";


const NoticeBar: React.FC = () => {
return (
<div className="mx-auto max-w-[1320px] px-6 pt-6">
<div className="flex gap-3 rounded-xl bg-[#1c1c1c] px-6 py-4 text-[13px] leading-relaxed text-[#cfcfcf]">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a] text-[11px] font-semibold">i</div>
<p>
e.PN is a trading name of Digital Waves LTD., the company incorporated in Seychelles. All services are provided outside the country (United States) and EPN does not have any licenses and/or is not registered in United States. © All rights reserved. Digital Waves LTD., 306 Victoria House, Victoria, Mahe, Seychelles
</p>
</div>
</div>
);
};


export default NoticeBar;
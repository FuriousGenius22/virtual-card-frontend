import React from "react";
import logo from "../../assets/logo.svg";
import AppButton from "./AppButton";


const BrandBlock: React.FC = () => {
return (
<div className="space-y-6">
<div className="flex items-center gap-3">
<img src={logo} alt="e.PN" className="h-8" />
<span className="text-lg font-semibold">e.PN</span>
<div className="flex items-center gap-1 rounded-full border border-[#2e2e2e] px-2 py-0.5 text-[12px]">
🌐 EN
</div>
</div>


<div className="flex flex-col gap-3">
<AppButton label=" App Store" />
<AppButton label="▶ Android" />
<AppButton label="ⓖ AppGallery" />
</div>
</div>
);
};


export default BrandBlock;
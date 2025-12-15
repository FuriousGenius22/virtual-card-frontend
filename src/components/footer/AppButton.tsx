import React from "react";


interface Props {
label: string;
}


const AppButton: React.FC<Props> = ({ label }) => (
<div className="flex w-fit items-center gap-2 rounded-full border border-[#2e2e2e] px-4 py-2 text-[13px] text-white">
{label}
</div>
);


export default AppButton;
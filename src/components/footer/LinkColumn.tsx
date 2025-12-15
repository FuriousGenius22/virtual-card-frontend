import React from "react";


interface Props {
title: string;
links: string[];
}


const LinkColumn: React.FC<Props> = ({ title, links }) => (
<div>
<h4 className="mb-4 text-[16px] font-semibold">{title}</h4>
<ul className="space-y-2 text-[14px] text-[#9a9a9a]">
{links.map((l) => (
<li key={l} className="cursor-pointer hover:text-white">{l}</li>
))}
</ul>
</div>
);


export default LinkColumn;
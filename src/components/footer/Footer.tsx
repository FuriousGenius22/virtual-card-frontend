import React from "react";
import NoticeBar from "./NoticeBar";
import BrandBlock from "./BrandBlock";
import LinkColumn from "./LinkColumn";
import CookiesBlock from "./CookiesBlock";


const Footer: React.FC = () => {
return (
<footer className="w-full bg-black text-white">
<NoticeBar />


<div className="mx-auto max-w-[1320px] px-6 pb-12 pt-14">
<div className="grid grid-cols-1 gap-10 md:grid-cols-5">
<BrandBlock />


<LinkColumn
title="About Us"
links={["Terms of Service", "Privacy Policy", "Legal Documents", "Complaints Policy", "Legal Requests"]}
/>


<LinkColumn
title="Cards"
links={["Tariffs", "Banks", "FAQ"]}
/>


<LinkColumn
title="Find out more"
links={["Helpdesk", "Delete Account", "Login"]}
/>


<CookiesBlock />
</div>
</div>
</footer>
);
};


export default Footer;
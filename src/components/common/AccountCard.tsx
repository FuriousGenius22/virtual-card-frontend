import React from "react";

type AccountCardType = {
    width:string,
    Link_comp:React.ReactNode,
    Main_str:string,
    Button_comp:React.ReactNode
}

const AccountCard: React.FC<AccountCardType> = ({
    width,
    Link_comp,
    Main_str,
    Button_comp
}) => {
    return(
        <>
            <div className={`w-[${width}] p-[24px] rounded-3xl bg-[#f7f9fb] flex flex-1 flex-col justify-start border-gray-200 border-1`}>
                <div className="mb-[16px]">{Link_comp}</div>
                <h1 className="mb-[28px] font-semibold text-2xl">{Main_str}</h1>
                {Button_comp}
            </div>
        </>
    );
}

export default AccountCard;
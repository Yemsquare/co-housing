import React from "react";

const sizes = {
    subtitle_subtitle_1: "text-[18px] font-bold",
    textxs: "text-[12px] font-medium",
    textmd: "text-[16px] font-medium",
    textxl1: "text-[20px] font-medium",
    text3xl: "text-[24px] font-medium md:text-[22px]",
    headingxs: "text-[17px] font-semibold",
    headings: "text-[18px] font-bold",
    headingmd: "text-[23px] font-bold md:text-[21px]",
    headinglg: "text-[24px] font-semibold md:text-[22px] sm:text-[21px]",
    headingxl: "text-[25px] font-bold md:text-[23px] sm:text-[24px]",
    heading2xl: "text-[33px] font-bold md:text-[26px] sm:text-[24px]",
    heading3xl: "text-[37px] font-extrabold md:text-[34px] sm:text-[32px]",
    heading4xl: "text-[40px] font-extrabold md:text-[38px] sm:text-[36px]",
    heading5xl: "text-[59px] font-bold md:text-[46px] sm:text-[40px]",
    heading6xl: "text-[55px] font-bold md:text-[47px] sm:text-[41px]",
};

const Heading = ({ children, className = "", size = "headingxs", as, ...restProps}) => {
    const Component = as || "h6";

    return (
        <Component className={`text-text_color font-poppins ${className} ${sizes[size]} `} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading};
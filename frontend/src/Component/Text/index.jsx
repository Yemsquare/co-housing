import React from "react";

const sizes = {
    body_body_1: "text-[16px] font-normal not-italic",
    texts: "text-[14px] font-normal not-italic",
    textlg: "text-[18px] font-normal not-italic",
    text2xlg: "text-[21px] font-normal not-italic",
};

const Text = ({ children, className = "", as , size = "texts", ...restProps }) => {
    const Component = as || "p";
    
    return (
        <Component className={`text-dark-0 font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };
import React from "react";

const ClassSVG = ({ fillcolor = "#000000", className = "", ...props }) => {
    return (
        <svg 
        fill={fillcolor}
        xmlns="http://www.w3.org/2000/svg"
        className={`class-svg ${className}`}
        {...props}
        height={props?.width || 20}
        width={props?.height || 20}
        viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
        >
            <path d="M16.43 12.5C16.43 11.6699 15.6099 11 14.77 11C13.93 11 13.11 11.6699 13.11 12.5C13.11 13.3301 13.93 14 14.77 14C15.6099 14 16.43 13.3301 16.43 12.5Z" fill="#212121"/>
            
        </svg>
    );
};
export { CloseSVG };
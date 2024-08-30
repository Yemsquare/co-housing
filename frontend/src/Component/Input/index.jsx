import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded",
};

const variants = {
    fill: {
        light_background_color: "bg-light_background_color shadow-bs",
        gray_50: "bg-gray-50 text-second_text_color",
    },
};

const sizes = {
    sm: "h-[56px] px-3.5 text-[17px]",
    xs: "h-[50px] px-5 text-[14px]",
};

const Input = React.forwardRef({
    className = "",
    name = "",
    type = "text",
    label,
    onChange,
    placeholder,
    prefix,
    suffix,
    shape = "round",
    variant = "fill",
    size = "xs",
    color = "gray_50",
   ...restProps
},
ref,
) => { 
    return ( 
        <label className={`${className} flex items-center justify-center cursor-text border border-solid ${shape && shapes[shape]} $ {variant && (variants[variant]?.[color] || varinats[variant])} ${size && sizes[size]}`}>
            {!!label && label}
            {!!prefix && prefix}
            <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
            {!!suffix && suffix}
        </label>
    );
};


Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    variant: PropTypes.oneOf(["fill"]),
    size: PropTypes.oneOf(["sm", "xs"]),
    color: PropTypes.oneOf(["light_background_color", "gray_50"]),
};

export { Input };
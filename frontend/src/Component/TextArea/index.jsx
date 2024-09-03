import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[5px]",
};

const variants = {
    tarOutlineGray300: "!border-gray-300 border border-solid bg-gray-50",
};

const sizes = {
    xs: "h-[150px] p-5 text-[14px]",
};

const TextArea = React.forwardRef
(
    ({
    className = "",
    name = "",
    placeholder = "",
    shape,
    size = "xs",
    variant = "tarOutlineGray300",
    onChange,
    ...restProps
},
    ref,
) => {
    const handleChange = (e) => {
        if(onChange) onChange(e?.target?.value);
    };

    return (
        <textarea
            ref={ref}
            className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
            placeholder={placeholder}
            name={name}
            onChange={handleChange}
            {...restProps}
        />
    );
},
)

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["tarOutlineGray300"]),
};

export {TextArea};
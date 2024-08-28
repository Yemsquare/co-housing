import React from "react";
import PropTypes from "prop-types";

const shapes = {
    circle: "rounded-[50%]",
    round: "rounded",
    square: "rounded-[0px]",
};
const variants = {
    fill: {
        deep_orange_600: "bg-deep_orange-600 text-light_background_color",
        gray_100: "bg-gray-100 text-muted_color",
        light_background_color: "bg-light_background_color text-deep_orange-600",
    },
};
const sizes = {
    xs: "h-[56px] pl-6 pr-[34px] text-[16px]",
    md: "h-[68px] pl-[34px] text-[21px]",
    xl: "h-[92px] px-[34px]",
    sm: "h-[64px] px-8 text-[17px]",
    lg: "h-[74px] px-6 text-[16px]",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    size = "lg",
    variant = "fill",
    color = "deep_orange_600",
    ...restProps
 }) => {
    return (
        <button
          className={`${className} flex flex-row items-center justify-content text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant] && variants[variant]?.[color]}`}
          {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
 };

 Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "round", "square"]),
    size: PropTypes.oneOf(["xs", "md", "xl", "sm", "lg"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["deep_orange_600", "gray_100", "light_background_color"]),
 };

 export { Button };
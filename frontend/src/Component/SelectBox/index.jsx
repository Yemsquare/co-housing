import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded",
};
const variants = {
    fill: {
        light_background_color: "bg-light_background_color shadow-bs text-indigo-800",
        gray_50: "bg-gray-50 text-second_text_color",

    },
};

const sizes = {
    sm: "h-[56px] px-3.5 text-[17px]",
    xs: "h-[56px] pl-[18px] pr-7 text-[14px]",
};

const SelectBox = React.forwardRef(({
    children,
    className ="",
    options = [],
    isSearchable = false,
    isMulti = false,
    indcator,
    shape,
    variant = "fill",
    size = "xs",
    color = "gray_58",
    ...restProps
},
ref,
) =>{
    return (
        <>
        <Select
        ref={ref}
        options={options}
        className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} &{variants && variants[variant]?.[color]}`}
        isSearchable={isSearchable}
        isMulti={isMulti}
        components={{
            IndicatorSeparator: () => null,
            ...PropTypes(indicator && { DropdownIndicator: () => indicator }),
        }}
        styles={{
            indicatorsContainer: (provided) => ({
                ...provided,
                padding: undefined,
                flexShrink: undefined,
                width: "max-content",
                "& > div": {padding:0},
            }),
            container: (provided) => ({
                ...provided,
                zIndex: 0,
                alignItems: "center",
            }),
            control: (provided) => ({
                ...provided,
                backgroundcolor: "transparent",
                border: "0 !important",
                boxShadow: "none !important",
                minHeight: "auto",
                width: "100%",
                flexWrap: undefined,
                "&:hover": {
                    border: "0 !important",
                },
            }),
            input: (provided) => ({
                ...provided,
                color: "inherit",
            }),
            option: (provided, state) => ({
                ...provided,
                display: "flex",
                minWidth: "max-content",
                width: "100%",
                backgroundcolor: state.isSelected ? "#f4511e" : "transparent",
                color: state.isSelected ? "#ffffff" : "inherit",
                "&:hover": {
                    backgroundcolor: "#f4511e",
                    color: "#ffffff",
                },
            }),
            singleValue: (provided) => ({
                ...provided,
                display: "flex",
                marginLeft: undefined,
                marginRight: undefined,
            }),
            valueContainer: (provided) => ({
                ...provided,
                padding: 0,
                display: "flex",
                flexWrap: undefined,
            }),
            placeholder: (provided) => ({
                ...provided,
                margin: 0,
            }),
            menuPortal: (base) => ({
                ...base, 
                zIndex: 999999
            }),
            menu: (base) => ({
                ...base,
              minWidth: "max-content",
              width: "max-content"
            }),
        }}
        menuPortalTarget={document.body}
        closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
        }}
        {...restProps}
        >
        </Select>
        {children}
        </>
    );
},
);

SelectBox.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onchange: PropTypes.string,
    value: PropTypes.string,
    indicator: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["sm", "xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["light_background_color", "gray_50"]),
};

export { SelectBox };
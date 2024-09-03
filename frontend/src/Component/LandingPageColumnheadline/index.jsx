import React from "react";
import { Heading, Img } from "Component";

export default function LandingPageColumnheadline({
    image = "images/img_money_dollar_circle_line.svg",
    headline = (
        <>
            Pay as Little
            <br />
            as possible!
        </>
    ),
    ...props 
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-start w-full gap-5`}>
            <div className="flex flex-col items-center rounded-[10px] bg-light_background_color p-4 shadow-xs">
                <Img src={image} alt="Money Image" className="h-[44px] w-[44px]" />
            </div>
           <Heading size="textxl" as="p" className="capitalize leading-[150%] !text-text-gray_900">
                {headline}
           </Heading>
        </div>
    );
}
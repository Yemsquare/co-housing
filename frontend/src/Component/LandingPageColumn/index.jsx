import { Heading, Img, Text } from "./..";
import React from "react";

export default function LandingPageColumn({
    image ="images/img_unsplash_eh.png",
    maltohouse = "2578 Falsom street, san francosco, CA, 94110",
    maltohouseOne = "Private Room",
    price = "N120000/month",
    four="4",
    two="2",
    twoone = "2",
    ...props 
}) {
    return (
        <div
        {...props}
        className={`${props.className} flex flex-col items-center justify-center w-full gap-4 border-gray-500 border-[0.5px] border-solid bg-light_background_color cursor-pointer rounded-[26px] hover:shadow-sm`}
        >
            <Img 
            src={image}
            alt="Featured Image"
            className="h-[282px] w-full rounded-tl-[26px] rounded-tr-[26px] object-cover" 
            >
            </Img>
            <div 
            className="flex flex-col items-center gap-3.5 self-stretch"
            >
                <Heading
                size="headingmd"
                as="h5"
                className="ml-[26px] w-[86%] self-start !font-dmsans capitalize leading-[20px] tracking-[-0.64px] !text-black-900"
                >
                    {maltohouse}
                </Heading>
                <div className="mx-[26px] flex flex-col items-start self-stretch">
                    <Text 
                    size="textlg"
                    as="p"
                    className="relative z-[1] !font-dmsans capitalize tracking-[-0.64px] !text-gray-600"
                    >
                        {maltohouseOne}
                    </Text>
                    <Heading
                    size="headingxl"
                    as="h4"
                    className="!font-dmsans !text-[25.55px] capitalize tracking-[-0.64px] !text-deep_orange-600"
                    >
                        {price}
                    </Heading>
                </div>
                <div className="self-stretch">
                    <div>
                        <div className="h-[1.06px] bg-gray-300_03" />
                        <div className="ml-10 mr-11 flex items-center justify-center">
                            <div className="flex flex-1 items-center">
                                <Img src="images/img_bed.svg" alt="Bedroom Icon" className="h-[10px]" />
                                <Heading
                                size="headings"
                                as="h6"
                                className="ml-2.5 !font-dmsans !text-[18.1px] tracking-[-0.45px] !text-black-900"
                                >
                                    {four}
                                </Heading>
                                <div className="ml-19 h-[62px] w-px bg-gray-300_03" />
                            </div>
                            <Img src="images/img_television.svg" alt="TV Icon" className="ml-2.5 mt-5 h-[16px] self-start"/>
                            <Heading
                            size="headings"
                            as="h6"
                            className="ml-2.5 !font-dmsans !text-[18.1px] tracking-[-0.45px] !text-black-900"
                            >
                                {two}
                            </Heading>
                            <div className="flex flex-1 items-center justify-end">
                                <div className="h-[62px] w-px bg-gray-300_03" />
                                <Img src="images/img_grid.svg" alt="Bathroom Icon" className="ml-[34px] h-[16px] w-[16px]" />
                                <Heading
                                size="headings"
                                as="h6"
                                className="ml-2.5 !font-dmsans!text-[18.1px] tracking-[-0.45px]!text-black-900"
                                >
                                    {twoone}
                                </Heading>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    );
}
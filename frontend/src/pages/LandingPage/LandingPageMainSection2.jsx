import React from "react";
import { Button, Img, Text, Heading } from "Component";

export default function LandingPageMainSection2() {
    return (
        <>
        <div>
            <div className="flex items-start justify-center bg-deep_orange-600_11 md:flex-col">
                <Img 
                src=""
                alt="Product Image"
                className="mt-[98px] h-[60px] w-[5%] object-contain md:w-full"
                />
                <div className="relative ml-[-22px] mt-1.5 flex w-[90%] items-center justify-center gap-[38px] self-center md:ml-0 md:w-full md:flex-col md:px-5">
                    <div className="mb-[78px] flex w-full flex-col gap-[74px] self-end md:gap-[55px] md:self-auto sm:gap-[37px]">
                        <div>
                            <div className="flex flex-col gap-[26px]">
                                <Text size="text2xl" as="p" className="leading-9 !text-text-gray_900">
                                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, et! Voluptates et, non, fugit ab animi repellat incidunt provident autem perspiciatis dignissimos reiciendis at culpa velit ducimus itaque, tempore minus!
                                </Text>
                                <div className="flex items-center gap-[18px]">
                                    <Img 
                                    src=""
                                    alt="Profile Image"
                                    className="h-[60px] w-[60px] rounded-[30px] object-cover"
                                    />
                                    <div className="flex flex-1 flex-col items-start gap-0.5 self-end">
                                        <Heading size="subtitle_subtitle_1" as="h2" className="!text-deep_orange-600">
                                            Oluyemi Ibiyemi
                                        </Heading>
                                        <Text size="body_body_1" as="p" className="!text-text-gray_900">
                                            Property owner
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="h-[10px] w-[10px] rounded-[5px] bg-deep_orange-600" />
                            <div className="h-[10px] w-[10px] rounded-[5px] bg-text-gray_300" />
                            <div className="h-[10px] w-[10px] rounded-[5px] bg-text-gray_300" />
                        </div>
                    </div>
                    <div className="relative h-[590px] w-full content-center rounded-[5px] border border-solid border-gray-300_02 bg-light_background md:h-auto">
                        <Img 
                        src=""
                        alt="Cover Image"
                        className="mx-auto h-[590px] w-full flex-1 rounded-[5px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center rounded-[5px] bg-gradient px-14 py-[248px] md:p-5">
                            <Button size="xl" shape="circle" className="w-[92px] !rounded-[46px]">
                                <Img src="" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
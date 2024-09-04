import React from "react";
import { Button, Heading, TextArea, SelectBox, Img, Text, Input } from "Component";

const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

export default function PropertyFormSection() {
    return (
        <>
        <div className="flex flex-col items-center">
            <div className="container-xs flex-col items-center gap-9 md:px-5">
                <Heading size="text3xl" as="h2" className="capitalize !text-black-900">
                    Your Property with us and be confident that Your Room will be Filled Out!
                </Heading>
                <div className="ml-[34px] flex flex-col items-center gap-[52px] self-stretch rounded-[10px] bg-light_background_color p-10 shadow-md md:ml-0 sm:gap-[26px] sm:p-5">
                    <Heading size="heading2xl" as="h3" className="tracking-[0.10px] !text-deep_orange-600">
                        Add a New Property
                    </Heading>
                    <div className="flex w-[90%] justify-center md:w-full">
                        <div className="flex w-full flex-col items-start">
                            <div className="flex items-center gap-6 self-stretch md:flex-col">
                                <Heading as="h4" className="tracking-[0.20px]">
                                    <span className="text-text_color">Name&nbsp;</span>
                                    <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <Input 
                                 shape="round"
                                 type="text"
                                 name="Name Input"
                                 placeholder={'Enter Name'}
                                 className="self-stretch !rounded-[5px] border-gray-300 tracking-[0.20px]"
                                />
                            </div>
                            <div className="flex w-full flex-col items-start gap-0.5">
                                <Heading as="h5" className="tracking-[0.20px]">
                                    <span className="text-text_color">Address&nbsp;</span>
                                    <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <Input 
                                    shape="round"
                                    name="Address Input"
                                    placeholder={'Enter Address'}
                                    className="self-stretch !round-[5px] border-gray-300 tracking-[0.20px]"
                                />
                            </div>
                            <div className="flex w-full flex-col items-start gap-0.5">
                                <Heading as="h6" className="tracking-[0.20px]">
                                    <span className="text-text_color">Unit Number&nbsp;</span>
                                    <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <Input 
                                shape="round"
                                name="Unit Number Input"
                                placeholder={'Enter Unit Number'}
                                className="self-stretch!round-[5px] border-gray-300 tracking-[0.20px]"
                                />
                            </div>
                        </div>
                        <div className="mt-[22px] flex items-center gap-6 self-stretch md:flex-col">
                            <div className="flex w-full flex-col items-start">
                                <Heading as="h6" className="tracking-[0.20px">
                                    <span className="text-text_color">City&nbsp;</span>
                                    <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <SelectBox 
                                    shape="round"
                                    indicator={<Img src="" alt="Arrow Down" className="h-[10px] w-[14px]" />}
                                    name="City Dropdown"
                                    placeholder={`Select City`}
                                    options={dropDownOptions}
                                    className="gap-4 self-stretch !rounded-[5px] border border-solid border-gray-300 01 font-poppins tracking-[0.20px]"
                                />
                            </div>
                            <div className="flex w-full flex-col items-start gap-0.5">
                                <Heading as = "h6" className="tracking-[0.20px]">
                                    <span className="text-text_color">State&nbsp;</span>
                                    <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <SelectBox
                                shape="round"
                                indicator={<Img src="" alt="Arrow Down" className="h-[10px] w-[14px]" />}
                                name="State Dropdown"
                                placeholder={`Select State`}
                                options={dropDownOptions}
                                className="gap-4 self-stretch!rounded-[5px] border border-solid border-gray-300 01 font-poppins tracking-[0.20px]"
                                >
                                </SelectBox>
                            </div>
                            <div className="flex w-full flex-col items-start">
                                <Heading as="h6" className="tracking-[0.20px]">
                                     <span className="text-text_color">Room Type&nbsp;</span>
                                     <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <SelectBox
                                shape="rounded"
                                indicator={<Img src="" alt="Arrow Down" className="h-[10px] w-[14px]" />}
                                name="Room Type Dropdown"
                                placeholder={`Select Room Type`}
                                options={dropDownOptions}
                                className="gap-4 self-stretch!rounded-[5px] border border-solid border-gray-300_01 font-poppins tracking-[0.20px]"
                                >
                                </SelectBox>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center gap-6 self-stretch md:flex-col">
                            <div className="flex w-[32%] flex-col items-start gap-0.5 md:w-full">
                                <Heading as="h6" className="tracking-[0.20px]">
                                    <span className="text-text_color">Price&nbsp;</span>
                                    <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <div className="flex self-stretch rounded-[5px] bordder border-solid border-gray-300 bg-gray-50 px-5 py-3.5">
                                    <Text as="p" className="tracking-[0.20px] !text-second_text_color">
                                        Enter price
                                    </Text>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col items-start md:self-stretch">
                                <Heading as="h6" className="tracking-[0.20px">
                                     <span className="text-text_color">Room Type&nbsp;</span>
                                     <span className="text-deep_orange-600">*</span>
                                </Heading>
                                <SelectBox
                                  shape="round"
                                  indicator={<Img src="" alt="Arrow Down" className="h-[10px] w-[14px]" />}
                                  name="Room Dropdown"
                                  placeholder={`Select Room Type`}
                                  options={dropDownOptions}
                                  className="gap-4 self-stretch!rounded-[5px] border border-solid border-gray-300_01 font-poppins tracking-[0.20px]"
                                  >
                                  </SelectBox>
                            </div>
                        </div>
                        <Heading as="h6" className="mt-6 tracking-[0.20px]">
                            <span className="text-text_color">Property Description&nbsp;</span>
                            <span className="text-deep_orange-600">*</span>
                        </Heading>
                        <div className="flex flex-col items-start gap-6 self-stretch">
                            <TextArea
                            shape="round"
                            name="Property Description"
                            placeholder={'Enter Property Description'}
                            className="self-stretch!rounded-[5px] border-gray-300 tracking-[0.20px] text-second_text_color"
                            />
                            <Heading size="headings" as="h6" className="!font-semibold capitalize !text-black-900">
                                Upload Photos
                            </Heading>
                        </div>
                        <div className="mt-1 flex flex-col items-center gap-1.5 self-stretch rounded-[10px] border border-dashed border-deep_orange-600 p-[26px] sm:p-5">
                            <Heading size="textmd" as="p" className="!text-black-900">
                                <span className="text-text_color">DRag your images here, or&nbsp;</span>
                                <span className="text-deep_orange-600">browse</span>
                            </Heading>
                            <Heading size="textxs" as="p" className="!text-black-900_7f">
                                Supported: JPG, JPEG, PNG
                            </Heading>
                        </div>
                    </div>
                </div>
                <Button size="md" className="mb-2.5 min-w-[512px] rounded-lg font-medium tracking-[0.18px]">
                    Add New Property
                </Button>
            </div>
        </div>
        </>
    );
}
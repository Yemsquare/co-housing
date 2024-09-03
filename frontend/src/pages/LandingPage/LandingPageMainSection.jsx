import { Button, Img, Input, SelectBox, GoogleMap, Heading  } from "../../Component";
import { CloseSVG } from "Component/Input/close";
import React from "react";

const dropDownOptions = [
    { label: "Option1", value: "option1"},
    { label: "Option2", value: "option2"},
    { label: "Option3", value: "option3"},
];

export default function LandingPageMainSection(){
    const [searchBarValue, setSearchBarValue] = React.useState("");

    return (
        <>
        {/* landing page main section  */}
        <div className="mb-2.5 flex justify-center">
            <div className="container-xs flex justify-center md:px5">
                <div className="flex w-full flex-col items-end gap-[26px]">
                    <div className="flex items-start justify-end self-stretch md:flex-col">
                        <Heading
                        size="heading6xl"
                        as="h1"
                        className="w-[76%] capitalize leading-[70px] tracking-[-1.00px] !text-light_background_color md:w-full"
                        >
                            The most affordable place to Stay
                        </Heading>
                        <Heading
                        size="textxl"
                        as="h2"
                        className="w-[88%] text-justify !font-normal capitalize leading-[150%] !text-light_background_color md:w-full"
                        >
                            Co-Housing Connect is a revolutionary platform designed to streamline the process of finding shared 
                            accomodation. It aims to faclitate connections between individuals seeking rental properties and 
                            encourage co-housing arrangements, enabling users to share living spaces with compatible roommates.
                            This innovative solution not only simplifies the search for suitable housing but also fosters a sense 
                            of community and affordability.
                        </Heading>
                    </div>
                    <GoogleMap showMarker={false} className="h-[340px] w-[34%] rounded-[14px]"/>
                </div>
                <div className="flex w-[62%] justify-content gap-4 rounded bg-light_gray p-6 md:w-full md:flex-col sm:p-5">
                    <SelectBox
                    color="light_background_color"
                    size="sm"
                    shape="round"
                    indicator={
                        <Img src="images/img_arrowdown_indigo_800.svg" alt="Arrow Down" className="h-[12px] w-[12px]"/>
                    }
                    name="Property Dropdown"
                    placeholder={`Property type`}
                    options={dropDownOptions}
                    className="w-[30%] gap-4 border border-solid border-indigo-400 font-opensans md:w-full"
                     />
                    <Input 
                        color="light_background_color"
                        size="sm"
                        shape="round"
                        name="Location Search"
                        placeholder={`Search of location`}
                        value={searchBarValue}
                        onChange={(e) => setSearchBarValue(e.target.value)}
                        prefix={
                            <div className="flex h-[22px] w-[14px] items-center justify-center">
                                <Img src="images/img_linkedin.svg" alt="Linkedin" className="my-1.5 h-[12px] w-[14px]" />
                            </div>
                        }
                        suffix={
                            searchBarValue?.length > 0 ? (
                                <CloseSVG onClick={() => setSearchBarValue("")} height={12} width={14} />
                            ) : null
                        }
                        className="flex-grow gap-4 border-gray-300_01 font-opensans text-gray-900_7f"
                    />
                    <Button
                    size="xs"
                    shape="round"
                    leftIcon={<Img src="images/img_rewind.svg" alt="Rewind" className="my-0.5 h-[16px] w-[16px]"/>}
                    className="min-w-[150px] gap-4 font-opensans font-bold"
                    >
                        search
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
}
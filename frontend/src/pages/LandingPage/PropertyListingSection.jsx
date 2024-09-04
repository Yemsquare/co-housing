import { Button, Heading } from "Component";
import LandingPageColumn from "Component/LandingPageColumn";
import React, {Suspense} from "react";

const PropertyDetailsGrid = [
    {
        image: "",
        maltohouse: "2578 FOlsom street, san francisco, CA, 94110",
        maltohouseOne: "Private Room",
        price: "N120000/month",
        four: "4",
        two: "2",
        twoone: "2"
    },
    {
        image: "",
        maltohouse: "2578 Falsom street, san francisco, CA, 94110",
        maltohouseOne: "Shared Room",
        price: "N120000/month",
        four: "4",
        two: "2",
        twoone: "2"
    },
    {
        image: "",
        maltohouse: "2578 Falsom street, san francisco, CA, 94110",
        maltohouseOne: "Shared Bathroom",
        price: "N120000/month",
        four: "4",
        two: "2",
        twoone: "2"
    },
    {
        image: "",
        maltohouse: "2578 Falsom street, san francisco, CA, 94110",
        maltohouseOne: "Shared Kitchen",
        price: "N120000/month",
        four: "4",
        two: "2",
        twoone: "2"
    },
    {
        image: "",
        maltohouse: "2578 Falsom street, san francisco, CA, 94110",
        maltohouseOne: "Shared Bedroom",
        price: "N120000/month",
        four: "4",
        two: "2",
        twoone: "2"
    },
    {
        image: "",
        maltohouse: "2578 Falsom street, san francisco, CA, 94110",
        maltohouseOne: "Shared Bathroom",
        price: "N120000/month",
        four: "4",
        two: "2",
        twoone: "2"
    }

];

export default function PropertyListingSection() {
    return (
        <>
        {/* property listing section  */}
        <div className="flex flex-col items-center bg-gray-100_01 py-[60px] md:py-5">
            <div className="container-xs mb-5 md:px-5">
                <div className="ml-8 flex flex-col items-center gap-[76px] md:ml-0 md:gap-[57px] sm:gap-[38px]">
                    <div className="flex items-center justify-center self-stretch sm:flex-col">
                        <div className="flex flex-1 flex-col items-start self-end sm:self-stretch">
                            <Heading size="heading3xl" as="h2" className="capitalize !text-text-gray_900">
                                list of properties
                            </Heading>
                            <div className="relative mt-[-2px] h-[3px] w-[32px] bg-deep_orange-600" />
                        </div>
                        <Button
                        size="sm"
                        shape="round"
                        className="min-w-[200px] !rounded-[5px] font-manrope font-medium shadow-xl"
                        >
                            View ALl Property 
                        </Button>
                    </div>
                    <div className="grid grid-cols-3 justify-center gap-8 self-stretch md:grid-cols-2 sm:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {PropertyDetailsGrid.map((d, index)=>(
                                <LandingPageColumn
                                    {...d}
                                    key={"propertiesGrid" + index}
                                    className="shadow-sm hover:shadow-sm"
                                />
                            ))}
                        </Suspense>
                    </div>
                    <div className="flex w-[28%] justify-center rounded-md border-[1.35px] border-solid border-muted_color bg-light_background_color shadow-lg md:w-full">
                        <Button
                        color="gray_100"
                        shape="square"
                        className="flex-1 border border-solid border-muted_color font-montserrat font-bold tracking-[0.10px]"
                        >
                            First
                        </Button>
                        <Button
                        color="light_background_color"
                        shape="square"
                        className="min-w-[46px] border border-solid border-gray-200 font-montserrat font-bold tracking-[0.10px]"
                        >
                            1
                        </Button>
                        <Button
                        shape="square"
                        className="min-w-[50px] border border-solid border-gray-200 font-montserrat font-bold tracking-[0.10px]"
                        >
                            2
                        </Button>
                        <Button
                        color="light_background_color"
                        shape="square"
                        className="min-w-[50px] border border-solid border-gray-200 font-montserrat font-bold tracking-[0.10px]"
                        >
                            3
                        </Button>
                        <Button
                        color="light_background_color"
                        shape="square"
                        className="flex-1 border border-solid border-gray-200 font-montserrat font-bold tracking-[0.10px]"
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
import { Button, Text, Heading } from "../../Component";
import React, {Suspense} from "react";
import LandingPageStackflexibe from "Component/LandingPageStackflexible";

const leasingOptionsGrid = [
    {
        flexibleLeases: "images/img_unsplash.png",
        flexibleleases: (
            <>
            Flexible <br />
            Leases
            </>
        ),
    },
    {
        flexibleLeases: "images/img_images_2.png",
        flexibleleases: (
            <>
            7-Day Happiness
            <br />
            Guaranteed
            </>
        ),
    },
    {
        flexibleLeases: "images/img_images_3.png",
        flexibleleases: (
            <>
            Flexible <br />
            Leases
            </>
        ),
    },
    {
        flexibleLeases: "images/img_images_4.png",
        flexibleleases: (
            <>
            Choose Your
            <br />
            Own Roomate
            </>
        ),
    },
];

export default function flexibleLeasesSection(){
    return (
        <>
            {/* flexible leases section  */}
            <div className="flex justify-center">
                <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
                    <div className="grid w-[52%] grid-cols-2 gap-5 md:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                        {leasingOptionsGrid.map((d, index) => (
                            <LandingPageStackflexibe
                            {...d}
                            key={"flexibleGrid" + index}
                            className="h-[334px] rounded-[20px] bg-black-900_33"/>
                        ))}
                        </Suspense>
                    </div>
                    <div className="flex w-[42px] flex-col items-start gap-10 md:w-full">
                        <div className="flex flex-col items-start gap-4 self-stretch">
                            <Heading size="heading4xxl" as="h2" className="w-[90%] leading-[54px] !text-text-gray_900 md:w-full">
                                Flexibility and options to suit your lifestyle.
                            </Heading>
                            <Text size="textlg" as="p" className="w-[90%] leading-8 !text-text-gray_900 md:w-full">
                                Youneed it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee 
                                tp our selective roommate finder option. We provide you the flexibility that you most desire.
                            </Text>
                            <Button size="sm" className="min-w-[148px] rounded-[12px] font-semibold">
                                Search Rooms
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </>

    );
}
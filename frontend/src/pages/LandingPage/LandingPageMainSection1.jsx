import { Img, Heading } from "Component";
import LandingPageColumnheadline from "Component/LandingPageColumnheadline";
import React, { Suspense } from "react";

const headlineFeaturesGrid = [
    {
        image: "",
        headline: (
            <>
                pay as Little
                <br />
                as possible!  
            </>
        ),
    },
    {
        image:"",
        headline:(
            <>
                Enjoy wisdom
                <br />
                of community 
            </>
        ),
    },
    {
        image:"",
        headline:(
            <>
                Let&#39;s somebody else
                <br />
                take care of Landlord!
            </>
        ),
    },
    {
        image:"",
        headline:(
            <>
                Enjoy peaceful
                <br />
                Environment!
            </>
        ),
    },
    {
        image:"",
        headline:(
            <>
                Stay Safe!
                <br />
                Save Money!
            </>
        ),
    },
    {
        image:"",
        headline:(
            <>
                Pay for what
                <br />
                you use!
            </>
        ),
    },
];

export default function LandingPageMainSection1(){
    return (
        <>
        <div className="flex justify-center px-14 md:px-5">
            <div className="flex w-[90%] flex-col items-start">
                <div className="flex flex-col items-start">
                    <Heading size="heading3xl" as="h2" className="capitalize !text-text-gray_900">
                        minimum living cost takes care of everything
                    </Heading>
                </div>
                <div className="relative mt-[-2px] h-[3px] w-[32px] bg-deep_orange-600" />
            </div>
            <div className="mr-2.5 flex items-center justify-between gap-5 md:mr-0 md:flex-col">
                <Img 
                src=""
                alt="Featured Image"
                className="h-[520px] w-[34p%] rounded-br-[50px] rounded-tl-[50px] object-contain md:w-full"
                />
                <div className="ml-16 grid w-[66%] grid-cols-3 gap-[126px] md:ml-0 md:grid-cols-2 sm:grid-cols-1">
                    <Suspense fallback={<div>Loding feed...</div>}>
                        {headlineFeaturesGrid.map((d,index)=>(
                            <LandingPageColumnheadline
                            {...d}
                            key={"headlineFeatures" + index}/>
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
        </>
    );
}
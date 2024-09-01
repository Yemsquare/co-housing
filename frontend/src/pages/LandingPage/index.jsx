import React from "react";
import {Helmet} from "react-helmet";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import FlexibleLeasesSection from "./FlexibleLeasesSection";

export default function LandingPagePage(){
    return (
        <>
        <Helmet>
            <title>Co-Housing Connect - Affordable Shared Accomodation</title>
            <meta
             name="description" 
             content="Discover affordable shared living with Co-Housing Connect." />
        </Helmet>
        <div className="flex w-full flex-col gap-[104px] bg-light_background_color md:gap-[78px] sm:gap-[52px]">
            <div className="h-[790px] bg-[url(/public/images/img_group_421.png)] bg-cover bg-no-repeat md:h-auto">
                <div className="flex flex-col gap-36 bg-gradient py-[30px] md:gap-[108px] sm:gap-[72px] sm:py-5">
                    <Header />

                    {/* landing page main section  */}
                </div>

            </div>
            
                <FlexibleLeasesSection />
            
            <div>
                <Footer />
            </div>

        </div>
        
        </>
    );
};

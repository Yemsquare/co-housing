import { Heading, Img } from "Component";
import React from "react";

export default function LandingPageStackflexibe({
    flexibleLeases = "images/img_unsplash_net.png", //imamges needed to be adde
    flexibleleases = (
        <>
            Flexible <br />
            Leases
        </>
    ),
    ...props
}) {
    return (
        <div {...props} className={`${props.className} w-full relative`}>
            <Img 
            src={flexibleLeases}
            alt="lease Image"
            className="mx-auto h-[334px] w-full flex-1 rounded-[20px] object-cover"
            />
            <Heading 
            size="headinglg"
            as="h4"
            className="absolute bottom-[30px] left-[30px] m-auto w-[44%] leading-5 !text-light_background_color"
            >
                {flexibleleases}
            </Heading>
        </div>
    );
}
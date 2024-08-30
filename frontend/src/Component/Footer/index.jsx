import React from "react";
import { Text, Img, Heading } from "./..";

export default function Footer({ ...props}) {
    return (
        <footer {...props}
        className={`${props.className} flex justify-center items-center px-14 py-[100px] md:p-5 bg-light_background_color`}
        >
            <div className="mx-auto flex w-full max-w-[125px] flex-col items-start gap-[90px] md:gap-[67px] sm:gap-[45px]">
                <div className="h-[2px] w-full self-stretch bg-deep_orange-600">
                    <div className="flex w-[92%] flex-col items-start gap-20 md:w-full md:gap-[60px] sm:gap-10">
                        <Heading size="heading5xl" 
                        as="h1" 
                        className="w-[20%] text-center capitalize leading-[59px] !text-block-900 md:w-full">
                            <>
                            Co-Housing <br />
                            Connect
                            </>
                        </Heading>
                        <div className="flex w-[42%] flex-col gap-10 self-center md:w-full">
                           <div className="flex w-[76%] flex-col ap-4 md:w-full">
                            <div className="flex items-center gap-4">
                                <Img src="images/"
                                alt="Linkedin Icon"
                                className="h-[24px] w-[24px]" />
                            </div>
                            <Text as="p" className="self-end !font-assistant">
                                    Every where you go like MTN
                            </Text>
                           </div>
                           <div className="flex justify-between gap-5">
                            <div className="flex items-center gap-4">
                                <Img src="images/img_call.svg" alt="Call Icon" className="h-[24px] w-[24px]"/>
                                <Text as="p" className="!font-assistant">
                                    +234........
                                </Text>
                            </div>
                            <div className="flex items-center gap-4">
                                <Img src="images/img_thumbs_up.svg" alt="Thumbs Up" className="h-[24px] w-[24px]" />
                                <Text as="p" className="!font-assistant">
                                    +234........
                                </Text>
                            </div>
                           </div>
                        </div>
                        <div className="flex items-center gap-7 sm:flex-col">
                            <Text as="p" className="!font-assistant !text-dark-1">
                                Social Media 
                            </Text>
                            <div className="flex flex-1 items-center justify-between gap-5 sm:self-stretch">
                                <Img src="images/img_facebook.png" alt="Facebook Icon" className="h-[18px] w-[18px]" />
                                <Img src="images/img_twitter.png" alt="Twitter Icon" className="h-[18px] w-[18px]" />
                                <Img src="images/img_instagram.png" alt="Instagram Icon" className="h-[18px] w-[18px]" />
                                <Img src="images/img_linkedin.png" alt="Linkedin Icon" className="h-[18px] w-[18px]" />
                             </div>
                        </div>
                    </div>
                    <div className="flex w-[92%] flex-col gap-6 self-end md:w-fall">
                        <div className="h-px bg-blue-a100_33" />
                        <div className="flex justify-between gap-5 md:flex-col">
                            <ul className="flex flex-wrap">
                                <li>
                                    <a href="#">
                                        <Text as="p" className="uppercase">
                                            About us 
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                     <a href="#">
                                        <Text as="p" className="uppercase">
                                            Contact us 
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                     <a href="#">
                                        <Text as="p" className="uppercase">
                                            Help
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                     <a href="#">
                                        <Text as="p" className="uppercase">
                                            Privacy Policy
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                     <a href="#">
                                        <Text as="p" className="uppercase">
                                            Disclaimer
                                        </Text>
                                    </a>
                                </li>
                            </ul>
                            <Text as="p" className="!text-dark-1">
                                Copyright @ 2024 Co-Housing Connect. All rihts reserved
                            </Text>
                        </div>

                    </div>
                </div>

            </div>

        </footer>
    );

}
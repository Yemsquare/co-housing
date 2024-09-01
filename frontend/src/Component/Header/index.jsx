import { Img, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
    return (
        <header {...props} className={`${props.className} mx-[120px] md:mx-0`}>
            <div className="mr-[76px] flex w-[66%] items-center justify-between gap-5 self-end md:mr-0 md:flex-col">
                <ul className="flex flex-wrap gap-[54px] self-end md:gap-5 md:self-auto">
                    <li>
                        <a href="#">
                            <Text size="textlg" as="p" className="!font-dmsans !font-medium !text-light_backgground_color">
                                Home
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text size="textlg" as="p" className="!font-dmsans !font-medium!text-light_backgground_color hover:font-medium">
                                Landlord
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text size="textlg" as="p" className="!font-dmsans!font-medium!text-light_backgground_color hover:font-medium">
                                Co-Sharing
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text size="textlg" as="p" className="!font-dmsans!font-medium!text-light_backgground_color hover:font-medium">
                                Contact Us
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cursor-pointer">
                            <Text size="textlg" as="p" className="!font-dmsans!font-medium!text-light_backgground_color hover:font-medium">
                                About Us
                            </Text>
                        </a>
                    </li>
                </ul>
                <Img src="images/img_contrast.svg" alt="Contrast Image" className="h-[40px] w-[8%] object-contain md:w-full" />
            </div>
            <div className="mt-[18px] h-[0.5px] w-full self-stretch bg-light_background_color" />
            <div className="ml-[352px] h-[2.32px] w-[10%] bg-light_background_color md:ml-0" />
        </header>
    );
}

export {Header};
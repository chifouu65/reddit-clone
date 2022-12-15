import React from "react";
import {Flex} from "@chakra-ui/react";
import Image from "next/image";
import {SearchInput} from "./searchInput";
import {RightContent} from "./rightContent/rightContent";

export const Navbar: React.FC = () => {
    return (
        <Flex bg="white" height={"44px"} padding={"6px 12px"}>
            <Flex align={'center'} mr={4}>
                <Image src='/vercel.svg' width={120} height={30} alt={"fr"}/>
            </Flex>
            <SearchInput/>
            <RightContent/>
        </Flex>
    );
};


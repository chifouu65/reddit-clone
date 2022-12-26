import React from "react";
import {Flex} from "@chakra-ui/react";
import Image from "next/image";
import {SearchInput} from "./searchInput";
import {RightContent} from "./rightContent/RightContent";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase/clientApp";
import Directory from "./directory/Directory";

export const Navbar: React.FC = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <Flex bg="white" height={"44px"} padding={"6px 12px"}
        justify={{md: "space-between"}}
        >
            <Flex align={'center'} width={{base: '44px', md: 'auto'}} mr={{base: 2, md: 0}}>
                <Image src='/vercel.svg' width={120} height={30} alt={"fr"}/>
            </Flex>
            {user && <Directory user={user}/>}
            <SearchInput user={user}/>
            <RightContent user={user}/>
        </Flex>
    );
};



import React from 'react'
import {Flex, Button, Icon} from "@chakra-ui/react";
import {AuthButtons} from "./AuthButtons";
import {AuthModal} from "../../model/auth/authModal";
import {signOut, User} from "@firebase/auth";
import Icons from "./Icons";
import UserMenu from "./UserMenu";

type RightContentProps = {
    user?: User | null
}

export const RightContent: React.FC<RightContentProps> = ({user}) => {
    return (
        <>
            {/*
                      <Button
                            onClick={() => signOut(auth)}
                        >Logout</Button>
                        */}
            <AuthModal/>
            <Flex justify={'center'} align={'center'}>
                {
                    user ?
                        <Icons/>
                        :
                        <AuthButtons/>
                }
                <UserMenu user={user}/>
            </Flex>
        </>
    );
}
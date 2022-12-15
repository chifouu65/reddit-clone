
import React from 'react'
import {Flex} from "@chakra-ui/react";
import {AuthButtons} from "./authButtons";
import {AuthModal} from "../../model/auth/authModal";

type RightContentProps = {}

export const RightContent: React.FC<RightContentProps> = ({}) => {
    return (
        <>
            <Flex justify={'center'} align={'center'}>
                <AuthModal/>
                <AuthButtons/>
            </Flex>
        </>
    );
}
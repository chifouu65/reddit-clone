import React from "react";
import {Button} from "@chakra-ui/react";
import {useSetRecoilState} from "recoil";
import {authModalState} from "../../../atoms/authModalAtom";

type authButtonProps = {}


export const AuthButtons: React.FC<authButtonProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    return (
        <>
            <Button
                variant="outline"
                height={"28px"}
                display={{base: "none", sm: "flex"}}
                width={{base: "70px", md: "110px"}}
                mr={2}
                onClick={() => setAuthModalState({open: true, view: "login"})}
            >
                Login
            </Button>
            <Button
                colorScheme="blue"
                height={"28px"}
                display={{base: "none", sm: "flex"}}
                width={{base: "70px", md: "110px"}}
                onClick={() => setAuthModalState({open: true, view: "signup"})}
            >
                Sign Up
            </Button>
        </>
    );
}
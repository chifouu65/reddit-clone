
import React from "react";
import {Flex} from "@chakra-ui/react";
import {authModalState} from "../../../atoms/authModalAtom";
import {useRecoilValue} from "recoil";
import {Login} from "./Login";
import {SignUp} from "./Signup";

type authInputProps = {}

const AuthInput:React.FC<authInputProps> = () => {
    const modalState = useRecoilValue(authModalState);
    return (
        <>
            <Flex direction='column' mt={4} alignItems='center' justifyContent='center' width='100%'>
                {modalState.view === "login" && <Login/>}
                {modalState.view === "signup" && <SignUp/>}
            </Flex>
        </>
    )
}

export default AuthInput
import React from "react";
import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Text
} from "@chakra-ui/react";
import {useRecoilState} from "recoil";
import {authModalState} from "../../../atoms/authModalAtom";
import {Login} from "./Login";
import AuthInput from "./authInput";
import {OauthButtons} from "./OauthButtons";

export const AuthModal: React.FC = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false
        }));
    }
    return (
        <>
            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>
                        {modalState.view === "login" && "Login"}
                        {modalState.view === "signup" && "Signup"}
                        {modalState.view === "forgotPassword" && "Reset password"}
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody display='flex'
                               flexDirection='column'
                               alignItems='center'
                               justifyContent='center'
                               pb={6}
                    >
                        <Flex
                              direction='column'
                              alignItems='center'
                              justifyContent='center'
                              width='70%'>
                            <OauthButtons/>
                            <Text
                                textAlign='center'
                                color='gray.500'
                                fontWeight={700}
                            >OR</Text>
                            <AuthInput/>
                            {/*ResetPass*/}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};


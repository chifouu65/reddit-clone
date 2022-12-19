import React from "react";
import {Button, Flex, Text} from "@chakra-ui/react";
import {FaGoogle} from "react-icons/fa";
import {useSignInWithGoogle} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/clientApp";
import {FIREBASE_ERROR} from "../../../firebase/errors";

export const OauthButtons: React.FC = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <>
            <Flex direction={'column'} width={"100%"} mb={4}>
                <Button
                    width={"100%"}
                    mb={2}
                    colorScheme={'blue'}
                    variant={'outline'}
                    leftIcon={<FaGoogle/>}
                    onClick={() => signInWithGoogle()}
                    isLoading={loading}
                >
                    Sign up with Google
                </Button>
                <Button
                    width={"100%"}
                    colorScheme={'blue'}
                    variant={'outline'}
                >
                    Some other provider
                </Button>
                {error && <Text color={'red.500'}>{
                    FIREBASE_ERROR
                        [error?.message as keyof typeof FIREBASE_ERROR]
                }</Text>}
            </Flex>
        </>
    )
}


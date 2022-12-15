import React from "react";
import {Button, Flex} from "@chakra-ui/react";
import {FaGoogle} from "react-icons/fa";

export const OauthButtons: React.FC = () => {
    return (
        <>
            <Flex direction={'column'} width={"100%"} mb={4}>
                <Button
                    width={"100%"}
                    mb={2}
                    colorScheme={'blue'}
                    variant={'outline'}
                    leftIcon={<FaGoogle/>}
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
            </Flex>
        </>
    )
}


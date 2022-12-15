import React from "react";
import {Input} from "@chakra-ui/input";
import {Button, Flex, Text} from "@chakra-ui/react";
import {useSetRecoilState} from "recoil";
import {authModalState} from "../../../atoms/authModalAtom";

type loginProps = {}

export const Login: React.FC<loginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);

    const [loginForm, setLoginForm] = React.useState({
        email: '',
        password: ''
    })

    const onSubmit = () => {
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({
            ...loginForm,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <Input
                    name='email'
                    placeholder='email'
                    type='email'
                    mb={2}
                    onChange={onChange}
                    required={true}
                    _placeholder={{color: 'gray.500'}}
                    _focus={{
                        bg: "white",
                        borderColor: "blue.500",
                        border: "1px solid",
                    }}
                    _hover={{
                        bg: "white",
                        borderColor: "blue.500",
                        border: "1px solid",
                    }}
                    bg='gray.50'
                />
                <Input
                    name='password'
                    placeholder='password'
                    type='password'
                    onChange={onChange}
                    required={true}
                    mb={2}
                    _placeholder={{color: 'gray.500'}}
                    _focus={{
                        bg: "white",
                        borderColor: "blue.500",
                        border: "1px solid",
                    }}
                    _hover={{
                        bg: "white",
                        borderColor: "blue.500",
                        border: "1px solid",
                    }}
                    bg='gray.50'
                />
                <Button
                    width='100%'
                    height="36px"
                    mt={2}
                    mb={2}
                    type={'submit'}
                >Login
                </Button>
                <Flex justifyContent='center'>
                    <Text mr={1}>Don't have an account?</Text>
                    <Text
                        onClick={() => setAuthModalState((prev) => ({
                            ...prev,
                            view: 'signup'
                        }))}
                        color='blue.500'
                        fontWeight='bold'
                        cursor={"pointer"}
                    >
                        Sign up
                    </Text>
                </Flex>
            </form>
        </>
    )
}
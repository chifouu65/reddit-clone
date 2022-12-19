import React from "react";
import {Input} from "@chakra-ui/input";
import {Button, Flex, Text} from "@chakra-ui/react";
import {useSetRecoilState} from "recoil";
import {authModalState} from "../../../atoms/authModalAtom";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/clientApp";
import {FIREBASE_ERROR} from "../../../firebase/errors";

type loginProps = {}
export const Login: React.FC<loginProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [loginForm, setLoginForm] = React.useState({
        email: '',
        password: ''
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error] = useSignInWithEmailAndPassword(auth);
    const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        signInWithEmailAndPassword(loginForm.email, loginForm.password)
            .then(r => console.log(r))
            .catch(e => console.log(e));
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
                {error && <Text color='red.500'>{FIREBASE_ERROR
                    [error?.message as keyof typeof FIREBASE_ERROR]
                }</Text>}
                <Button
                    width='100%'
                    height="36px"
                    mt={2}
                    mb={2}
                    type={'submit'}
                >Login
                </Button>
                <Flex justifyContent={'center'} mb={2}>
                    <Text fontSize={"9pt"} cursor={'pointer'}>
                        Forgot password?
                    </Text>
                    <Text fontSize={"9pt"} ml={2} color={'blue.500'} fontWeight={'bold'} cursor={'pointer'}
                          onClick={() => setAuthModalState((prev) => ({
                              ...prev,
                              view: 'forgotPassword'
                          }))}
                    >
                        Reset
                    </Text>
                </Flex>
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
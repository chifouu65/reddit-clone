import React from "react";
import {Input} from "@chakra-ui/input";
import {Button, Flex, Text} from "@chakra-ui/react";
import {useSetRecoilState} from "recoil";
import {authModalState} from "../../../atoms/authModalAtom";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";
import {auth} from "../../../firebase/clientApp";
import {FIREBASE_ERROR} from "../../../firebase/errors";

type signupProps = {}

export const SignUp: React.FC<signupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signupForm, setSignUpForm] = React.useState({
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = React.useState('');
    const [createUserWithEmailAndPassword, user, loading, userError] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (signupForm.password !== signupForm.confirmPassword) {
            setError('Passwords do not match');
            return;
        } else {
            setError('');
            createUserWithEmailAndPassword(signupForm.email, signupForm.password).then(r =>
                console.log(r)).catch(e => console.log(e));
        }
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm({
            ...signupForm,
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
                <Input
                    name='confirmPassword'
                    placeholder='confirm password'
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
                    isLoading={loading}
                    width='100%'
                    height="36px"
                    mt={2}
                    mb={2}
                    type={'submit'}
                >
                    SignUp
                </Button>
                {(error || userError) && (
                    <Text color='red.500'
                          fontSize='sm'>
                        {error || FIREBASE_ERROR
                                [userError?.message as keyof typeof FIREBASE_ERROR]
                        }
                    </Text>
                )}
                <Flex justifyContent='center'>
                    <Text mr={1}>You have already a account ?</Text>
                    <Text
                        onClick={() => setAuthModalState((prev) => ({
                            ...prev,
                            view: 'login'
                        }))}
                        color='blue.500'
                        fontWeight='bold'
                        cursor={"pointer"}
                    >
                        Login
                    </Text>
                </Flex>
            </form>
        </>
    )
}
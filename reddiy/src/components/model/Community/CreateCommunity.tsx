import React from 'react';
import {
    Box,
    Button, Checkbox, Divider, Flex, Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay, Stack, Text
} from "@chakra-ui/react";
import {doc, getDoc, setDoc} from "@firebase/firestore";
import {firestore} from "../../../firebase/clientApp";
import {serverTimestamp} from "@firebase/database";
import {User} from "@firebase/auth";
type CommunityProps = {
    user?: User | null;
    open: boolean;
    handleClose: () => void;
}

const CreateCommunityModal: React.FC<CommunityProps> = ({user, open, handleClose}) => {
    const [valid, setValid] = React.useState(false);
    const [communityName, setCommunityName] = React.useState('');
    const [charsRemaining, setCharsRemaining] = React.useState(21);
    const [communityType , setCommunityType] = React.useState('public');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 21) {
            setCommunityName(e.target.value);
            setCharsRemaining(21 - e.target.value.length);
            setValid(true)
        } else if (e.target.value.length > 21) {
            setCommunityName(communityName);
            setValid(false)
        }
    }
    const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCommunityType(e.target.name);
    }

    const handleCreateCommunity = async () => {
        const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (error) setError("");
        try {
            if(format.test(communityName) || communityName.length < 3) {
                setError('Community name must be at least 3 characters long and cannot contain special characters');
                return;
            }

            setLoading(true);
            const communityDocRef = doc(firestore, 'communities', communityName);
            const communityDoc = await getDoc(communityDocRef);

            if(communityDoc.exists()) {
                setError('Community name already taken');
                return;
            }

            await setDoc(communityDocRef, {
                creatorId: user?.uid,
                createdAt: serverTimestamp(),
                numberOfMembers: 1,
                privacyType: communityType,
                communityName: communityName,
            })
        } catch (e : any) {
            console.log("Error creating community: ", e);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <Modal isOpen={open} onClose={handleClose} size={'lg'}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader display={'flex'}
                                 flexDirection={'column'}
                                 fontSize={15}
                                 padding={3}
                    >Create Community</ModalHeader>
                    <Box pl={3} pr={3}>
                        <Divider/>
                        <ModalCloseButton/>
                        <ModalBody display={'flex'} flexDirection={'column'}
                                   padding={'10px 0'}>
                            <Text fontWeight={600} fontSize={15}>
                                Name
                            </Text>
                            <Text fontSize={12} color={'gray.500'}>
                                Community names including capitalization cannot be changed.
                            </Text>
                            <Text position={'relative'} top={'33px'} left={'10px'} width={'20px'} fontSize={12}
                                  color={'gray.500'}>
                                r /
                            </Text>
                            <Input fontSize={'9pt'} position={'relative'} value={communityName} pl={'22px'}
                                   placeholder={'Community Name'}
                                   size={'sm'} mt={2}
                                      onChange={handleChange}
                            />
                            <Text color={valid ? 'gray.500' : 'red' }
                                  fontSize={12}>
                                {valid ? <>{charsRemaining} characters remaining</> :
                                'You have already max of the character limit'}
                            </Text>
                            <Text fontWeight={500} fontSize={15} mt={3}>{error}</Text>
                            <Box>
                                <Text fontWeight={600} fontSize={15} mt={4}>
                                    Community Type
                                </Text>
                                <Stack spacing={2}>
                                    <Checkbox onChange={handleTypeChange}
                                              isChecked={communityType === 'public'}
                                              name={'public'}>
                                        <Flex align={'center'}>
                                            <Text fontSize={12} color={'gray.500'}>
                                                Public
                                            </Text>
                                            <Text fontSize={12} color={'gray.500'} ml={2}>
                                                Anyone can view and join
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox onChange={handleTypeChange}
                                              isChecked={communityType === 'restricted'}
                                              name={'restricted'}>
                                        <Flex align={'center'}>
                                            <Text fontSize={12} color={'gray.500'}>
                                                Restricted
                                            </Text>
                                            <Text fontSize={12} color={'gray.500'} ml={2}>
                                                Only approved users can view and join
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                    <Checkbox onChange={handleTypeChange}
                                              isChecked={communityType === 'private'}
                                              name={'private'}>
                                        <Flex align={'center'}>
                                            <Text fontSize={12} color={'gray.500'}>
                                                Private
                                            </Text>
                                            <Text fontSize={12} color={'gray.500'} ml={2}>
                                                Only  users can view
                                            </Text>
                                        </Flex>
                                    </Checkbox>
                                </Stack>
                            </Box>
                        </ModalBody>
                    </Box>
                    <Text fontSize={13} color={'red.500'} ml={2}>{error}</Text>
                    <ModalFooter bg={"gray.200"} borderRadius={"0 0 7px 7px"} >
                        <Button height={"30px"} colorScheme="blue" mr={3} onClick={handleClose}>
                            Close
                        </Button>
                        <Button onClick={handleCreateCommunity} isLoading={loading} border={'1px solid'} height={"30px"} borderColor={'blue.500'} variant="ghost">
                            Create Community
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateCommunityModal;
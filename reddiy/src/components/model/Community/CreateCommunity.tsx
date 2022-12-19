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

type CommunityProps = {
    open: boolean;
    handleClose: () => void;
}

const CreateCommunityModal: React.FC<CommunityProps> = ({open, handleClose}) => {

    const [valid, setValid] = React.useState(false);
    const [communityName, setCommunityName] = React.useState('');
    const [charsRemaining, setCharsRemaining] = React.useState(21);
    const [communityType , setCommunityType] = React.useState('public');
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
    return (
        <>
            <Modal isOpen={open} onClose={handleClose}>
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
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="ghost">
                            Create Community
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateCommunityModal;
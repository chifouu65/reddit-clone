import React from 'react'
import {Menu, MenuButton, MenuDivider, MenuItem, MenuList} from "@chakra-ui/menu";
import {Button, Flex, Icon, Text} from "@chakra-ui/react";
import {signOut, User} from "@firebase/auth";
import {FaRedditSquare} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import {VscAccount} from "react-icons/vsc";
import {MdOutlineLogin} from "react-icons/md";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {auth} from "../../../firebase/clientApp";
import {useSetRecoilState} from "recoil";
import {authModalState} from "../../../atoms/authModalAtom";

type UserMenuProps = {
    user?: User | null
}

const UserMenu: React.FC<UserMenuProps> = ({user}) => {
    const setAuthModalState = useSetRecoilState(authModalState)
    return (
        <Menu>
            <MenuButton cursor={'pointer'} padding={"0px 6px"} borderRadius={4} _hover={{
                outline: "1px solid", outlineColor: 'gray.200'
            }}>
                <Flex align={"center"}>
                    <Flex align={"center"}>
                        {user ? (
                            <>
                                <Icon fontSize={24} mr={1} color={'gray.300'} as={FaRedditSquare}/>
                                <Flex direction={'column'} align={"flex-start"} mr={0} fontSize={"8pt"} display={{base: "none", md: "flex"}}>
                                    <Text fontWeight={700}>
                                        {user ?.displayName || user.email?.split('@')[0]}
                                    </Text>
                                </Flex>
                            </>
                        ):(
                            <Icon as={VscAccount} fontSize={24} mr={1} color={'gray.400'}/>
                        )}
                    </Flex>
                    <ChevronDownIcon/>
                </Flex>
            </MenuButton>
            <MenuList>
                {user ? (
                    <>
                        <MenuItem fontSize={"10pt"} fontWeight={700} _hover={{bg: 'blue.500', color: 'white'}}>
                            <Flex cursor={'pointer'} align={'center'}>
                                <Icon fontSize={20} mr={2} as={CgProfile}/>
                                Login
                            </Flex>
                        </MenuItem>
                        <MenuDivider/>
                        <MenuItem
                            onClick={() => signOut(auth)}
                            fontSize={"10pt"} fontWeight={700} _hover={{bg: 'blue.500', color: 'white'}}>
                            <Flex cursor={'pointer'} align={'center'}>
                                <Icon fontSize={20} mr={2} as={MdOutlineLogin}/>
                                Logout
                            </Flex>
                        </MenuItem>
                    </>
                ) : (
                    <>
                        <MenuItem
                            onClick={() => setAuthModalState({
                                open: true,
                                view: 'login'
                            })}
                            fontSize={"10pt"} fontWeight={700} _hover={{bg: 'blue.500', color: 'white'}}>
                            <Flex cursor={'pointer'} align={'center'}>
                                <Icon fontSize={20} mr={2} as={MdOutlineLogin}/>
                                Login/ Sign up
                            </Flex>
                        </MenuItem>
                    </>
                )}

            </MenuList>
        </Menu>
    );
}

export default UserMenu;
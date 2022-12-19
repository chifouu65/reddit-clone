import React from 'react'
import {Flex, Icon, Text} from "@chakra-ui/react";
import {Menu, MenuButton, MenuList} from "@chakra-ui/menu";
import {TiHome} from "react-icons/all";
import {ChevronDownIcon} from "@chakra-ui/icons";
import Community from "./Community";

type DirectoryProps = {}

const Directory: React.FC<DirectoryProps> = ({}) => {
    return (
        <Menu>
            <MenuButton cursor={'pointer'} mr={2} ml={{base: 0, md: 2}} padding={"0px 6px"} borderRadius={4} _hover={{
                outline: "1px solid", outlineColor: 'gray.200'
            }}>
                <Flex align={"center"} justify={'space-between'} width={{base: 'auto', md: '200px'}}>
                    <Flex align={"center"}>
                        <Icon as={TiHome} fontSize={18} mr={1}/>
                        <Text fontWeight={700} fontSize={"8pt"} display={{base: "none", md: "flex"}}>
                            Home
                        </Text>
                    </Flex>
                    <ChevronDownIcon/>
                </Flex>
            </MenuButton>
            <MenuList>
                <Community/>
            </MenuList>
        </Menu>
    );
}

export default Directory;

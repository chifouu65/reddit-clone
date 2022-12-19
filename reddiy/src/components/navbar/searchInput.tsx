import React from "react";
import {Flex, InputGroup, InputLeftElement, Input} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {User} from "@firebase/auth";

type searchInputProps = {
    user?: User | null
}

export const SearchInput: React.FC<searchInputProps> = ({user}) => {
    return (
        <Flex flexGrow={1} mr={2} align={'center'} maxWidth={user ? 'auto' : "680px"}>
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" mb={1}/>}
                />
                <Input type="text" placeholder="Search"
                       fontSize="10pt"
                       _placeholder={{color: "gray.500"}}
                       _hover={{
                           bg: "white",
                           border: "1px solid",
                           borderColor: "blue.500"
                       }}
                       _focus={{
                           outline: "none",
                           border: "1px solid",
                           borderColor: "blue.500"
                       }}
                       height='34px'
                />
            </InputGroup>
        </Flex>
    );
};

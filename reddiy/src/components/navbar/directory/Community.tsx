import React from 'react';
import CreateCommunityModal from "../../model/Community/CreateCommunity";
import {MenuItem} from "@chakra-ui/menu";
import {Flex, Icon} from "@chakra-ui/react";
import {GrAdd} from "react-icons/gr";

type CommunityProps = {

}

const Community: React.FC<CommunityProps> = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CreateCommunityModal open={open}/>
            <MenuItem width={'100%'} fontSize={'10pt'} _hover={{bg: 'gray.100'}}
            onClick={() => setOpen(true)}>
                <Flex align={'center'}>
                    <Icon as={GrAdd} fontSize={20} mr={2}/>
                    Create Community
                </Flex>
            </MenuItem>
        </>
    );
}

export default Community;
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import React from 'react';

function index(props) {
    return (
        <Box w="300px" zIndex='99' backgroundColor='#fff' boxShadow="0px 1px 5px #4cbec7" borderRadius='4px' display={props.visible ? "block" : "none"} mt='64px' position='absolute' right='4px' p='8px'>
            <Input type='text' placeholder='Search topics' />
        </Box>
    );
}

export default index;
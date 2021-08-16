import React, { useState } from 'react';
import { Flex, Heading, IconButton, Spacer, Button } from '@chakra-ui/react';
import { FaSearch, FaUser } from 'react-icons/fa';
import SearchBox from '../SearchBox';
import { useHistory } from 'react-router';

function Index(props) {
    const [searchVisible, tootleSearch] = useState(false);
    const history = useHistory();

    return (
        <Flex p='16px' boxShadow="0px 1px 8px #b9b9b9">
            {/* <Container> */}
            <Heading ml="8" fontSize='24px' fontWeight='semibold' size='md' color='cyan.600' >AkSepya</Heading>
            <Spacer />
            <Button onClick={(e) => history.push("/login")} ml='2' pl='8px' pr='8px' leftIcon={<FaUser />} variant="solid">
                Log In
                </Button>
            <IconButton ml='2' icon={<FaSearch />} onClick={() => tootleSearch(!searchVisible)} />
            <SearchBox visible={searchVisible} />
            {/* </Container> */}
        </Flex>
    );
}

export default Index;
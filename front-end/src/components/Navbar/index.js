import React, { useState } from 'react';
import { Flex, Heading, IconButton, Spacer, Button, Image } from '@chakra-ui/react';
import { FaSearch, FaUser } from 'react-icons/fa';
import SearchBox from '../SearchBox';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import AvatarBox from '../AvatarHoverBox'

function Index(props) {
    const [searchVisible, tootleSearch] = useState(false);
    const [avatarBoxVisible,setAvatarVisible]=useState(false);
    const history = useHistory();
    const user = useSelector(state => state.auth);

    return (
        <Flex p='16px' boxShadow="0px 1px 8px #b9b9b9">
            {/* <Container> */}
            <Heading ml="8" fontSize='24px' fontWeight='semibold' size='md' color='cyan.600' >AkSepya</Heading>
            <Spacer />
            { user.isLoggedIn ? (
                <Image onClick={(e)=>setAvatarVisible(!avatarBoxVisible)} src={user.avatar} boxSize="40px" borderRadius="full"/>
            ): (
                <Button onClick={(e) => history.push("/login")} ml='2' pl='8px' pr='8px' leftIcon={<FaUser />} variant="solid">
                  Log In
                </Button>
            )}

            <IconButton ml='2' icon={<FaSearch />} onClick={() => tootleSearch(!searchVisible)} />
            <SearchBox visible={searchVisible} />
            <AvatarBox visible={avatarBoxVisible}  />
            {/* </Container> */}
        </Flex>
    );
}

export default Index;

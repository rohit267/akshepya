import React from 'react';
import { Box, Center, Container, Flex, Text } from '@chakra-ui/layout';
import Logo from '../Logo'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { FaUser } from 'react-icons/fa';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import { IconContext } from "react-icons";
import { useHistory } from 'react-router-dom';

function Index(props) {

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container maxW="container.lg">
            <form onSubmit={handleSubmit}>
                <Center>
                    <Box /*backgroundColor='#f9f9f9'*/ mt='16' pt='5' pl='2' pr='2' pb='6' boxSize='lg' height='auto' border='1px solid #e3e3e3' borderRadius='8px'>
                        <Box>
                            <Center>
                                <Logo />
                            </Center>
                            <Center mt='4'>
                                <Text fontSize='24px' fontWeight='semibold'>Signup</Text>
                            </Center>
                            <Center mt='6' ml='7' mr='7'>
                                <InputGroup>
                                    <InputLeftElement
                                        color='grey.300'
                                        pointerEvents="none"
                                        position='absolute'
                                        top='5px'
                                        children={<MIconProvider> <FaUser size='24px' /></MIconProvider>}
                                    />
                                    <Input required color='black.800' borderColor='cyan.300' bgColor='#fff' focusBorderColor='cyan.600' type='text' size="lg" placeholder='Name' />
                                </InputGroup>

                            </Center>
                            <Center mt='6' ml='7' mr='7'>
                                <InputGroup>
                                    <InputLeftElement
                                        color='grey.300'
                                        pointerEvents="none"
                                        position='absolute'
                                        top='5px'
                                        children={<MIconProvider> <HiMail size='28px' /></MIconProvider>}
                                    />
                                    <Input required color='black.800' borderColor='cyan.300' bgColor='#fff' focusBorderColor='cyan.600' type='email' size="lg" placeholder='Email' />
                                </InputGroup>

                            </Center>
                            <Center mt='6' ml='7' mr='7'>
                                <InputGroup>
                                    <InputLeftElement
                                        color='grey.300'
                                        pointerEvents="none"
                                        position='absolute'
                                        top='5px'
                                        children={<MIconProvider> <HiLockClosed size='28px' /></MIconProvider>}
                                    />
                                    <Input required minLength="8" borderColor='cyan.300' bgColor='#fff' focusBorderColor='cyan.600' type='password' size="lg" placeholder='Password' />
                                </InputGroup>
                            </Center>
                            <Center mt='6' ml='7' mr='7'>
                                <InputGroup ml='2'>
                                    <Text>Choose avatar: &nbsp;</Text>
                                    <input required accept="image/png, image/jpeg" type='file' name='avatar' />
                                </InputGroup>
                            </Center>
                            <Flex mt='6' ml='7' mr='7' justifyContent='space-between'>
                                <Text onClick={() => props.toggleIsLogin(true)} cursor='pointer' fontWeight='semibold' color='cyan.600'>Already have an account?</Text>
                                <Button type='submit'>Submit</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Center>
            </form>
        </Container>

    );
}

function MIconProvider(props) {
    return (
        <IconContext.Provider value={{ color: "grey.300", className: 'emailLock' }}>
            {props.children}
        </IconContext.Provider>
    )
}

export default Index;
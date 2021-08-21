import React, { useState } from 'react';
import { Box, Center, Container, Flex, Text } from '@chakra-ui/layout';
import Logo from '../Logo'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import { Button, IconButton } from '@chakra-ui/button';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { HiMail, HiLockClosed } from 'react-icons/hi';
import { IconContext } from "react-icons";
import { useHistory } from 'react-router-dom';
import { login } from '../../controllers/auth';
import { useDispatch, useSelector } from 'react-redux'

function Index(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState({ value: "", error: false, errorMessage: "Please enter a valid email." });
    const [password, setPassword] = useState({ value: "", error: false, errorMessage: "Please enter strong password." });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");

    function onEmailChange(e) {
        setEmail(s => ({ ...s, value: e.target.value }));
    }

    function onPasswordChange(e) {
        setPassword(s => ({ ...s, value: e.target.value, error: e.target.value.length >= 8 ? false : true }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError("");
        let res = await login({ email: email.value, password: password.value }, dispatch);
        if (res.status) {
            history.push("/");
        }
        else {
            setFormError(res.error)
        }
        setIsSubmitting(false);

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
                                <Text fontSize='24px' fontWeight='semibold'>Login</Text>
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
                                    <Input value={email.value} onChange={onEmailChange} required color='black.800' borderColor='cyan.300' bgColor='#fff' focusBorderColor='cyan.600' type='email' size="lg" placeholder='Email' />
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
                                    <Input value={password.value} onChange={onPasswordChange} required minLength="8" borderColor='cyan.300' bgColor='#fff' focusBorderColor='cyan.600' type='password' size="lg" placeholder='Password' />
                                </InputGroup>
                            </Center>
                            <Center>
                                <Text position='relative' top='8px'>Login using: </Text>
                                <Flex mt='6' width='120px' justifyContent='space-around'>
                                    <IconButton icon={<FaGoogle />} />
                                    <IconButton icon={<FaFacebook />} />
                                </Flex>
                            </Center>
                            <Text ml='9' mr='7' color='red'>{formError ? formError : ""}</Text>
                            <Flex mt='6' ml='7' mr='7' justifyContent='space-between'>
                                <Text fontWeight='semibold' onClick={() => props.toggleIsLogin(false)} cursor='pointer' color='cyan.600'>Create account</Text>
                                <Button isLoading={isSubmitting} type='submit'>Submit</Button>
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
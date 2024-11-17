import React from 'react';
import axios from 'axios';
import { Spinner,Box, Button, Flex, HStack, FormControl, Input, Text, VStack, Switch, InputGroup, InputLeftElement,useToast } from '@chakra-ui/react';
import {LockIcon,EmailIcon} from '@chakra-ui/icons';
import { useState} from 'react';

function LoginComponent() {
    const [isKeptLoggedIn, setIsKeptLoggedIn] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const toast = useToast()

    const handleLogin = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try{
            const response = await axios.post("http://localhost:5001/api/customer/customerLogin",{
                "phone_number":username,
                "password":password
            })
            console.log("---response---",response)
            if(response.data.status === 'success'){
                toast({
                    title: 'Success',
                    description: response.data.message,
                    status: 'success',
                    duration: 5000,
                    position:'bottom-top',
                    isClosable: true,
                })
            } else{
                toast({
                    title: 'Failure',
                    description: response.data.message,
                    status: 'error',
                    duration: 5000,
                    position:'bottom',
                    isClosable: true,
                })
            }
            setIsLoading(false)
        }
        catch(err){
            console.error('Login Error:',err);
        }
    }
    return(
        <Box 
            bgImage="url('https://your-image-url.com/image.jpg')"
            bgSize="cover"
            bgPosition="center"
            minH="100vh"
            color="white"
            display="flex"
            flexDirection="column"
        >
            {/* Main Content */}
            <Flex as="header" direction="column" flex="1" justifyContent="center" border="2px solid"
            >
                {/* Navbar */}
                <Flex alignItems="center" justifyContent="space-between" px={4} py={2} position="absolute" top="0" w="100%">
                    <Box fontWeight="bold" color="black">
                        Logo
                    </Box>
                    <HStack spacing={3}>
                        <Button>Login</Button>
                        <Button>About Us</Button>
                        <Button>Register</Button>
                        <Button>Contact</Button>
                    </HStack>
                </Flex>

                {/* Login Form */}
                <Flex direction="column" alignItems="center" mt={8}>
                    <Box maxW="360px" w="100%" p={5}>
                        <FormControl isRequired>
                            <VStack spacing={4}>
                                <InputGroup>
                                    <InputLeftElement>
                                        <EmailIcon color="gray.300" />
                                    </InputLeftElement>
                                    <Input type="text" name="title" placeholder="Username" value = {username} onChange={ (e) => setUsername(e.target.value)} color="black" />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement>
                                        <LockIcon color="gray.300" />
                                    </InputLeftElement>
                                    <Input colorScheme="black" type="password" name="password" placeholder="Password" value={password} onChange={ (e) => setPassword(e.target.value)} color="black" />
                                </InputGroup>
                                {isLoading?<Spinner></Spinner>:<Button type="submit" colorScheme="teal" onClick={handleLogin}>
                                    Get Started
                                </Button>}
                            </VStack>
                        </FormControl>
                    </Box>

                    {/* Additional Links */}
                    <Box maxW="360px" w="100%" p={5}>
                        <Flex direction="column" alignItems="center">
                            <Flex alignItems="center" justifyContent="space-between" w="100%">
                                <Switch colorScheme="teal" isChecked={isKeptLoggedIn} onChange={() => setIsKeptLoggedIn(!isKeptLoggedIn)} />
                                <Text cursor="pointer" color="teal.200">Keep Logged In</Text>
                                <Text cursor="pointer" color="teal.200">Forget Password?</Text>
                            </Flex>
                            <Flex alignItems="center" justifyContent="space-between" w="100%">
                                <Text cursor="pointer" color="teal.200" fontSize={15}>CREATE ACCOUNT</Text>
                                <Text cursor="pointer" color="teal.200" fontSize={15}>NEED HELP?</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>

            {/* Footer */}
            <Flex 
                as="footer" 
                alignItems="center" 
                justifyContent="space-between" 
                p={4} 
                bg="whiteAlpha.800"
                color="black"
            >
                <HStack spacing={4}>
                    <Button>About Us</Button>
                    <Button>Privacy Policy</Button>
                    <Button>Terms Of Use</Button>
                </HStack>
                <HStack spacing={3}>
                    <Text>@2019 Key.</Text>
                    <Text>All Rights Reserved |</Text>
                    <Text>Design By W3Layouts</Text>
                </HStack>
            </Flex>
        </Box>
    )
}

export default LoginComponent;

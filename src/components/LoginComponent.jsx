import React from 'react';
import { Box, Button, Flex, HStack, FormControl, Input, Text, VStack, Switch } from '@chakra-ui/react';
import { useState} from 'react';

function LoginComponent() {
    const [isKeptLoggedIn, setIsKeptLoggedIn] = useState(false)

    return(
        <Box 
            bgImage="url('https://your-image-url.com/image.jpg')"
            bgSize="cover"
            bgPosition="center"
            minH="100vh"
            color="white"
        >
            <Flex direction="column" justifyContent="center">
                {/* Navbar */}
                <Flex alignItems="center" justifyContent="space-between" p={4}>
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
                                <Input type="text" name="title" placeholder="Username" />
                                <Input type="password" name="password" placeholder="Password" />
                                <Button type="submit" colorScheme="teal">
                                    Get Started
                                </Button>
                            </VStack>
                        </FormControl>
                    </Box>

                    {/* Additional Links */}
                    <Flex direction="column" alignItems="center">
                        <Flex alignItems="center" justifyContent="space-between">
                            <Text cursor="pointer" color="teal.200">Keep Logged In</Text>
                            <Switch colorScheme="teal" isChecked={isKeptLoggedIn} onChange={() => setIsKeptLoggedIn(!isKeptLoggedIn)} />
                            <Text cursor="pointer" color="teal.200">Forget Password?</Text>
                        </Flex>
                        <Flex alignItems="center" justifyContent="space-between" w="100%" maxW="360px">
                            <Text cursor="pointer" color="teal.200">CREATE ACCOUNT</Text>
                            <Text cursor="pointer" color="teal.200">NEED HELP?</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex as="footer" alignItems="center" justifyContent="space-between" p={4}>
                    <HStack spacing={4}>
                        <Button>About Us</Button>
                        <Button>Privacy Policy</Button>
                        <Button>Terms Of Use</Button>
                    </HStack>
                    <HStack spacing={3}>
                        <Text color="black">@2019 Key.</Text>
                        <Text color="black">All Rights Reserved |</Text>
                        <Text color="black">Design By W3Layouts</Text>
                    </HStack>
                </Flex>
            </Flex>
        </Box>
    )
}

export default LoginComponent;

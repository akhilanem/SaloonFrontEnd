import React, { useState} from 'react';
import axios from 'axios';
import { Box, Flex, FormControl, Input, FormLabel, Button, Text, Spinner } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'

const LoginComponent=()=> {
    const [isClick, setIsClick] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [phoneNumber,setPhoneNumber] = useState("");
    const [password,setPassword] = useState("");
    const toast = useToast()
    const loginApi = async () => {
        try{
            setIsLoad(true)
            const response = await axios.post("http://localhost:5001/api/customer/customerLogin",{
                "phone_number":phoneNumber,
                "password":password
            })
            console.log(response)
            console.log(response.data.message)
            if(response.data.status === "success"){
                toast({
                    title: 'Success',
                    description: response.data.message,
                    status: 'success',
                    duration: 5000,
                    position:'bottom-top',
                    isClosable: true,
                  })
            }
            else{
                toast({
                    title: 'Failure',
                    description: response.data.message,
                    status: 'error',
                    duration: 5000,
                    position:'top-right',
                    isClosable: true,
                })
            }
            setIsLoad(false)
        }
        catch(err){

            toast({
                title: 'Failure',
                description: response.data.message,
                status: 'error',
                duration: 5000,
                position:'top-right',
                isClosable: true,
              })
              setIsLoad(false)
        }
    }

    const handleClick = () => {
       setIsClick(true)
       if(password.length > 4 && phoneNumber.length === 10){
            loginApi()
       }
    };

    const handlePhoneNumber = (e) => {
       setPhoneNumber(e.target.value)
       setIsClick(false)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setIsClick(false)
    }

    return (
        <FormControl isRequired>
            <Flex direction="column" alignItems="center" justifyContent="center" p={20}>
                <Box w={500} m={5}>
                    <FormLabel>Phone Number:</FormLabel>
                    <Input onChange={handlePhoneNumber} type="number" name="phonenumber" />
                    {(phoneNumber === "" && isClick) ? <Text color="red">Please enter the phone number</Text> : (phoneNumber.length > 10 && isClick) ? (<Text color="red">Phone length should not be greater than 10 digits</Text>) : ((phoneNumber.length < 10 && isClick) ? <Text color="red">Phone number is less than 10 digits</Text> : <Text></Text>)}
                </Box>
                <Box w={500} m={5}>
                    <FormLabel>Password:</FormLabel>
                    <Input onChange={handlePassword} type="password" name="password" />
                    {(password === "" && isClick) ? <Text color="red">Please enter your password</Text> : ((password.length < 5 && isClick) ? <Text color = "red">Password should be greater than 4 characters</Text>: <Text></Text>)}
                </Box>
                {isLoad ? <Spinner></Spinner>:<Button onClick={handleClick} type="button" colorScheme="teal" mt={4}>
                    Submit
                </Button>}
            </Flex>
        </FormControl>
    );
}

export default LoginComponent;

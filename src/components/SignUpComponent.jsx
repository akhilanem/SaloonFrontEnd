import { Box, Flex, FormControl, Input, FormLabel, Button, Text, Spinner } from '@chakra-ui/react';
import React, { useState} from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'

const SignUpComponent = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [location,setLocation] = useState("")
    const [latitude,setLatitude] = useState("")
    const [longitude,setLongitude] = useState("")
    const [isLoad,setIsLoad] = useState(false)
    const toast = useToast()

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const handleEmailAddress = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLocationName = (e) => {
        setLocation(e.target.value)
    }

    const handleLatitude = (e) => {
        setLatitude(e.target.value)
    }

    const handleLongitude = (e) => {
        setLongitude(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        signUpApi()
    }


    const signUpApi = async () => {
        try{
            setIsLoad(true)
            const response = await axios.post("http://localhost:5001/api/customer/createCustomer",{
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email_address: email,
                password: password,
                location_name: location,
                latitude: latitude,
                longitude: longitude
            })
            console.log(response.data.message)
            if(response.data.status === 'success'){
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

    return(
        <FormControl isRequired>
            <Flex direction='column' justifyContent='center' alignItems='center'>
                <Box w={400} p={5}>
                    <FormLabel>First Name:</FormLabel>
                    <Input onChange={handleFirstName} placeholder="First Name" type="text" name="firstName" />
                </Box>
                <Box w={400} p={5}>
                    <FormLabel>Last Name:</FormLabel>
                    <Input onChange={handleLastName} placeholder="Last Name" type="text" name="lastName" />
                </Box>
                <Box w={400} p={5}>
                    <FormLabel>Phone Number:</FormLabel>
                    <Input onChange={handlePhoneNumber} type="number" placeholder="Phone Number" name="phoneNumber" />
                </Box>
                <Box w={400} p={5}>
                    <FormLabel>Email Address:</FormLabel>
                    <Input onChange={handleEmailAddress} type="email" placeholder="Email Address" name="emailAddress" />
                </Box>
                <Box w={400} p={5}>
                    <FormLabel>Password:</FormLabel>
                    <Input onChange={handlePassword} type="password" placeholder="Password" name="password" />
                </Box>
                <Box w={400} p={5}>
                    <FormLabel>Location Name:</FormLabel>
                    <Input onChange={handleLocationName} type="text" placeholder="Location Name" name="locationName" />
                </Box>
                <Box w={400} p={5}>
                    <FormLabel>Latitude:</FormLabel>
                    <Input onChange={handleLatitude} type="text" placeholder="Latitude" name="latitude" />
                </Box>
                <Box w={400} p={5}>
                    <FormLabel>Longitude:</FormLabel>
                    <Input onChange={handleLongitude} type="text" placeholder="Longitude" name="longitude" />
                </Box>
                {isLoad ? <Spinner></Spinner> : <Button onClick={handleClick} type="button">
                    Submit
                </Button>}
            </Flex>
        </FormControl>     
    )
}

export default SignUpComponent
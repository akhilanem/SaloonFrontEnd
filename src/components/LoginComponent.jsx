import React from 'react';
import { Box, FormHelperText, FormControl, Input, FormLabel, Button } from '@chakra-ui/react';

function LoginComponent() {
    return(
        <Box maxW="480px">
            <FormControl isRequired>
                <FormLabel>Phone Number:</FormLabel>
                <Input type="text" name="title" />
                <FormHelperText>Enter a descriptive task name</FormHelperText>
                <Button type="submit" colorScheme="teal" mt={4}>
                    Submit
                </Button>
            </FormControl>
        </Box>
    )
}

export default LoginComponent;

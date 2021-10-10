import React from 'react';
import {Alert, AlertDescription, AlertIcon, AlertTitle} from "@chakra-ui/react";

const Notification = () => {


    return (<Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="100vh"
    >
        <AlertIcon boxSize="40px" mr={0}/>
        <AlertTitle mt={4} mb={1} fontSize="lg">
            Details submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
            Thanks for submitting details. Our admin will review and confirm.
        </AlertDescription>
    </Alert>)
};

export default Notification;
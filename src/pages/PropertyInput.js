import {
    Flex, Icon,
    FormControl, InputGroup, InputLeftElement, Input, Box, Spacer, Select, ButtonSpinner, Button
} from "@chakra-ui/react";
// import {HiOfficeBuilding, HiCurrencyDollar, HiPaperAirplane} from 'react-icons/hi'
import PropertyField from "../components/PropertyField";
import * as yup from 'yup'
import {Form, Formik} from "formik";
import React from 'react'
import getAllAddresses from "../api/property";
import useAddresses from "../hooks/useAddresses";
import useFilteredAddresses from "../hooks/useFilteredAddresses";
import Suggestions from "../components/Suggestions";
import RevenuePeriodField from "../components/RevenuePeriodField";


let validateSchema = yup.object({
    address_line: yup.string().required(),
    // revenue: yup.number().required().positive(),
    revenue_period: yup.string().required().oneOf(['Mo', 'Yr', 'YTD']),
    // prop_type: yup.string().required().oneOf(['single_family', 'double_family']),
    // price: yup.number().required().positive(),
    // link: yup.string().required().url(),
    // email: yup.string().required().email(),
    // notes: yup.string()
})

// TODO: Create a form context for ????
export default function PropertyInput() {
    return (
        <Formik
            initialValues={{
                address_line: '',
                revenue_period: 'Mo'
            }}
            validationSchema={validateSchema}
            onSubmit={(values) => {
                console.log(values)
                alert(JSON.stringify(values))
            }}
        >
            {props => (

                <Flex height={'100vh'} justifyContent={'center'}
                      backgroundColor={'#F4F6FA'}>
                    {/*<Form>*/}
                        <Flex direction={'column'} backgroundColor={'yellow'} justifyContent={'center'}
                              alignItems={'center'} as={Form}>

                            <Box position={'relative'}>
                                <PropertyField setFieldValue={props.setFieldValue}/>
                            </Box>
                            <Spacer/>
                            <Box width={'10rem'} display={'flex'} backgroundColor={'red'} justifyContent={'space-between'}>
                                <RevenuePeriodField/>
                            </Box>
                            <Spacer/>
                            <Button colorScheme={'teal'} variant={'solid'} isLoading={props.isSubmitting}
                                    type={'submit'}>Submit</Button>

                        </Flex>
                    {/*</Form>*/}
                </Flex>
            )}
        </Formik>
    )
}
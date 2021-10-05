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


let validateSchema = yup.object({
    address_line: yup.string().required(),
    // revenue: yup.number().required().positive(),
    // revenue_period: yup.string().required().oneOf(['Mo', 'Yr', 'YTD']),
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
                    <Form>
                        <Flex direction={'column'} backgroundColor={'yellow'} justifyContent={'center'}
                              alignItems={'center'}>

                            <Box position={'relative'}>
                                <PropertyField setFieldValue={props.setFieldValue}/>
                            </Box>
                            <Spacer/>
                            {/*<Box>*/}

                            {/*    <FormControl id={'revenue'}>*/}
                            {/*        <InputGroup>*/}
                            {/*            <InputLeftElement*/}
                            {/*                pointerEvents="none"*/}
                            {/*                children={<Icon as={HiCurrencyDollar} color={'black'}/>}*/}
                            {/*            />*/}
                            {/*            <Input borderColor={'#98DFD0'} borderWidth={'2px'} type="text" placeholder="Revenue"/>*/}
                            {/*        </InputGroup>*/}
                            {/*    </FormControl>*/}

                            {/*</Box>*/}
                            {/*<Spacer/>*/}
                            {/*<Box width={'100%'}>*/}

                            {/*    <FormControl id={'property-type'}>*/}
                            {/*        <InputGroup>*/}
                            {/*            <InputLeftElement paddingRight={'1rem'} children={<HiPaperAirplane/>}/>*/}


                            {/*                <Select isFullWidth={true} size={'md'} borderColor={'#98DFD0'} borderWidth={'2px'}*/}
                            {/*                        type="select" placeholder="Select Type">*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                </Select>*/}
                            {/*        </InputGroup>*/}
                            {/*    </FormControl>*/}
                            {/*</Box>*/}

                            {/*<Box width={'100%'}>*/}
                            {/*    <FormControl id={'property-type'}>*/}
                            {/*        <InputGroup>*/}
                            {/*            <InputLeftElement paddingRight={'1rem'} children={<HiPaperAirplane/>}/>*/}


                            {/*                <Select isFullWidth={true} size={'md'} borderColor={'#98DFD0'} borderWidth={'2px'}*/}
                            {/*                        type="select" placeholder="Select Type">*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                    <option value={'1'}>Option 1</option>*/}
                            {/*                </Select>*/}
                            {/*        </InputGroup>*/}
                            {/*    </FormControl>*/}
                            {/*</Box>*/}
                            <Button colorScheme={'teal'} variant={'solid'} isLoading={props.isSubmitting}
                                    type={'submit'}>Submit</Button>

                        </Flex>
                    </Form>
                </Flex>
            )}
        </Formik>
    )
}
import {
    Flex, Icon,
    FormControl, InputGroup, InputLeftElement, Input, Box, Spacer, Button
} from "@chakra-ui/react";
import PropertyField from "../components/PropertyField";
import * as yup from 'yup'
import {Form, Formik} from "formik";
import React from 'react'
import RevenuePeriodField from "../components/RevenuePeriodField";
import TagsField from "../components/TagsField";


let validateSchema = yup.object({
    address_line: yup.string().required(),
    // revenue: yup.number().required().positive(),
    revenue_period: yup.string().required().oneOf(['Mo', 'Yr', 'YTD']),
    // prop_type: yup.string().required().oneOf(['single_family', 'double_family']),
    // price: yup.number().required().positive(),
    // link: yup.string().required().url(),
    // email: yup.string().required().email(),
    // notes: yup.string()
    tags: yup.array().of(
        yup.object({
            value: yup.number().required(),
            label: yup.string().required()
        })
    ).required().min(3, 'Minimum 3 tags required!')
})

// TODO: Create a form context for ????
export default function PropertyInput() {
    return (
        <Formik
            initialValues={{
                address_line: '',
                revenue_period: 'Mo',
                tags: []
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
                    <Flex direction={'column'} backgroundColor={'yellow'} justifyContent={'center'}
                          alignItems={'center'} as={Form}>

                        {props.values.tags.map(t=>t.label).join(',')}
                        <Box position={'relative'}>
                            <PropertyField setFieldValue={props.setFieldValue}/>
                        </Box>
                        <Spacer/>
                        <Box width={'10rem'} display={'flex'} justifyContent={'space-between'}>
                            <RevenuePeriodField currentValue={props.values.revenue_period}/>
                        </Box>
                        <Spacer/>
                        <Box>
                            <TagsField setFieldValue={props.setFieldValue}/>
                        </Box>

                        <Spacer/>
                        <Button colorScheme={'teal'} variant={'solid'} isLoading={props.isSubmitting}
                                type={'submit'}>Submit</Button>

                    </Flex>
                </Flex>
            )}
        </Formik>
    )
}
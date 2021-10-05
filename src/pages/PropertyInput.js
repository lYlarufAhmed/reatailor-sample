import {
    Flex, Icon,
    FormControl, InputGroup, InputLeftElement, Input, Box, Spacer, Select, ButtonSpinner, Button
} from "@chakra-ui/react";
// import {HiOfficeBuilding, HiCurrencyDollar, HiPaperAirplane} from 'react-icons/hi'
import PropertyInputField from "../components/PropertyInputField";
import * as yup from 'yup'
import {useFormik} from "formik";
import React from 'react'
import getAllAddresses from "../api/property";
import useAddresses from "../hooks/useAddresses";
import useFilteredAddresses from "../hooks/useFilteredAddresses";


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


export default function PropertyInput() {
    const {addresses, status, error} = useAddresses()
    const formik = useFormik({
        validationSchema: validateSchema,
        initialValues: {
            address_line: ''
        },
        onSubmit: (values) => {
            console.log(values)

            alert(JSON.stringify(values))
        }
    })

    const filteredAddress = useFilteredAddresses({addresses, searchTerm: formik.values.address_line})
    // const handleAddressLineInput = () => {
    //     if (formik.values.address_line.length > 2) setSearchTerm(formik.values.address_line)
    // }
    return (
        <Flex height={'100vh'} justifyContent={'center'}
              backgroundColor={'#F4F6FA'}>
            <Flex direction={'column'} backgroundColor={'yellow'} justifyContent={'center'}
                  alignItems={'center'} as={'form'} onSubmit={formik.handleSubmit}>
                {filteredAddress.map(p => <p key={p.property_id}>{p.full_address}</p>)}
                <Box>
                    <FormControl id={'address_line'}
                                 isInvalid={!!formik.errors.address_line && formik.touched.address_line}>
                        <PropertyInputField formik={formik}/>
                    </FormControl>
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
                <Button colorScheme={'teal'} variant={'solid'} type={'submit'}>Submit</Button>

            </Flex>
        </Flex>

    )
}
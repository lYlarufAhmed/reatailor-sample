import {
    Flex, Icon,
    FormControl, InputGroup, InputLeftElement, Input, Box, Spacer, Button, Select, Textarea, Text, useToast
} from "@chakra-ui/react";
import PropertyField from "../components/PropertyField";
import * as yup from 'yup'
import {Form, Formik, Field} from "formik";
import React from 'react'
import RevenuePeriodField from "../components/RevenuePeriodField";
import TagsField from "../components/TagsField";
import {ReactComponent as PropertyIcon} from "../assets/svgs/vuesax-bold-building-3.svg";
import {ReactComponent as SendIcon} from "../assets/svgs/vuesax-bold-send-2.svg";
import {ReactComponent as PriceIcon} from "../assets/svgs/vuesax-bold-moneys.svg";
import {ReactComponent as LinkIcon} from "../assets/svgs/vuesax-bold-clipboard-text.svg";
import {ReactComponent as ZipIcon} from "../assets/svgs/vuesax-bold-location-tick.svg";
import {ReactComponent as EmailIcon} from "../assets/svgs/vuesax-bold-sms.svg";
import {ReactComponent as ArrowDownIcon} from "../assets/svgs/vuesax-bold-arrow-down.svg";
import {ReactComponent as NoteIcon} from "../assets/svgs/vuesax-bold-edit.svg";
import useProperty from '../hooks/useProperty'
import Notification from "../components/Notification";

let selectOptions = {
    "single_family": "Single Family",
    "duplex": "Duplex",
    "multi_family": "Multi-Family",
    "condo": "Condo",
    "townhome": "Townhome",
    " other": "Other"
}

let validateSchema = yup.object({
    address_line: yup.string().required(),
    revenue: yup.number().required().positive(),
    revenue_period: yup.string().required().oneOf(['Mo', 'Yr', 'YTD']),
    prop_type: yup.string().required().oneOf([...Object.keys(selectOptions)]),
    price: yup.number().required().positive(),
    zip: yup.number().required().positive(),
    link: yup.string().required().url(),
    email: yup.string().required().email(),
    notes: yup.string(),
    tags: yup.array().of(
        yup.object({
            tag_id: yup.number().required(),
            tag: yup.string().required()
        })
    )
        .required().min(3, 'Minimum 3 tags required!')
})
const initialFormValue = {
    address_line: '',
    revenue: '',
    link: '',
    notes: '',
    email: '',
    zip: '',
    revenue_period: 'Mo',
    prop_type: '',
    price: '',
    tags: []
}

// TODO: Create a form context for ????
export default function PropertyInput() {
    const [submitted, setSubmitted] = React.useState(false)
    const {postProperty, status, error} = useProperty()
    const [foundError, setFoundError] = React.useState(!!error)
    React.useEffect(() => {
        if (submitted || foundError) {
            console.log('setting submitted timeout')
            let timeoutHandler = setTimeout(() => {
                setSubmitted(false)
                setFoundError(false)
            }, 5000)
            return () => clearTimeout(timeoutHandler)
        }
    }, [submitted, foundError])
    return (
        <>
            {submitted && <Notification/>}
            {/*{foundError && <Notification type={'error'} title={'Submission Failed'}*/}
            {/*                             description={'There was an error please try again or check you internet connection.'}/>}*/}
            <Formik
                initialValues={initialFormValue}
                validationSchema={validateSchema}
                onSubmit={async (values, {resetForm, setSubmitting}) => {
                    console.log(values)
                    // alert(JSON.stringify(values))
                    await postProperty(values)
                    if (error) {
                        setFoundError(true)
                    } else {
                        setSubmitted(true)
                        console.log('form reset')
                        resetForm(initialFormValue)
                    }
                    setSubmitting(false)
                }}
            >
                {props => (
                    <Flex minHeight={'100vh'} justifyContent={'center'}
                          backgroundColor={'#F4F6FA'} p={'1rem 0'}>
                        <Flex direction={'column'} justifyContent={'center'}
                              alignItems={'center'} as={Form} width={'450px'}>
                            <Box position={'relative'} width={'100%'}>
                                <PropertyField setFieldValue={props.setFieldValue}/>
                            </Box>
                            <Spacer/>
                            <Flex justifyContent={'space-between'} width={'100%'} style={{gap: '10px'}}
                                  alignItems={'center'}>
                                <Field name={'revenue'} render={({field, form}) => (
                                    <FormControl isInvalid={form.errors.revenue && form.touched.revenue}>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<Icon as={PropertyIcon} color={'black'}/>}
                                            />
                                            <Input {...field} borderColor={'#98DFD0'}
                                                   id={'revenue'}
                                                   borderWidth={'2px'}
                                                   type="text" placeholder="Revenue"/>
                                        </InputGroup>
                                    </FormControl>
                                )}/>
                                <RevenuePeriodField currentValue={props.values.revenue_period}/>
                            </Flex>
                            <Spacer/>

                            <Box
                                width={'100%'}
                            >
                                <FormControl isInvalid={props.errors.prop_type && props.touched.prop_type}>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents={'none'} children={<Icon as={SendIcon}/>}/>
                                        <Field name={'prop_type'} placeholder={'Select One'} icon={<ArrowDownIcon/>}
                                               as={Select}
                                               style={{
                                                   paddingLeft: '30px'
                                               }}>
                                            {[...Object.entries(selectOptions)].map(op => (
                                                <option value={op[0]}
                                                        onClick={() => props.setFieldValue('prop_type', op[0])}>{op[1]}</option>
                                            ))}
                                        </Field>
                                    </InputGroup>
                                </FormControl>

                            </Box>


                            <Spacer/>
                            <Box width={'100%'}>
                                <Field name={'price'} render={({field, form}) => (
                                    <FormControl isInvalid={form.errors.price && form.touched.price}>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<Icon as={PriceIcon} color={'black'}/>}
                                            />
                                            <Input {...field} borderColor={'#98DFD0'}
                                                   id={'price'}
                                                   borderWidth={'2px'}
                                                   type="text" placeholder="List Price"/>
                                        </InputGroup>
                                    </FormControl>
                                )}/>
                            </Box><Spacer/>

                            <Box
                                width={'100%'}
                            >

                                <Field name={'link'} render={({field, form}) => (
                                    <FormControl isInvalid={form.errors.link && form.touched.link}>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<Icon as={LinkIcon} color={'black'}/>}
                                            />
                                            <Input {...field} borderColor={'#98DFD0'}
                                                   id={'price'}
                                                   borderWidth={'2px'}
                                                   type="text" placeholder="Link"/>
                                        </InputGroup>
                                    </FormControl>
                                )}/>

                            </Box><Spacer/>


                            <Box
                                width={'100%'}
                            >

                                <Field name={'zip'} render={({field, form}) => (
                                    <FormControl isInvalid={form.errors.zip && form.touched.zip}>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<Icon as={ZipIcon} color={'black'}/>}
                                            />
                                            <Input {...field} borderColor={'#98DFD0'}
                                                   id={'price'}
                                                   borderWidth={'2px'}
                                                   type="text" placeholder="Zip Code"/>
                                        </InputGroup>
                                    </FormControl>
                                )}/>

                            </Box><Spacer/>

                            <Box
                                width={'100%'}
                            >

                                <Field name={'email'} render={({field, form}) => (
                                    <FormControl isInvalid={form.errors.email && form.touched.email}>
                                        <InputGroup>
                                            <InputLeftElement
                                                pointerEvents="none"
                                                children={<Icon as={EmailIcon} color={'black'}/>}
                                            />
                                            <Input {...field} borderColor={'#98DFD0'}
                                                   id={'price'}
                                                   borderWidth={'2px'}
                                                   type="text" placeholder="Contact email"/>
                                        </InputGroup>
                                    </FormControl>
                                )}/>

                            </Box><Spacer/>


                            <Box width={'100%'}>
                                <Flex alignItems={'center'} style={{gap: '10px', marginLeft: '10px'}}>
                                    <Icon as={NoteIcon} fontSize={'lg'}/> <Text fontSize={'lg'}> Note</Text>
                                </Flex>
                                <Field name={'notes'} render={({field}) => (
                                    <Textarea colorScheme={'teal'} {...field} border={'2px solid'}
                                              borderColor={'#98DFD0'}/>
                                )}/>
                            </Box><Spacer/>


                            <Box
                            >
                                <TagsField setFieldValue={props.setFieldValue}/>
                            </Box>

                            <Spacer/>

                            <Button colorScheme={'teal'} variant={'solid'} isLoading={props.isSubmitting}
                                    width={'100%'}
                                    type={'submit'}>Submit</Button>

                        </Flex>
                    </Flex>
                )}
            </Formik>
        </>
    )
}
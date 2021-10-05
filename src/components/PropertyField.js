import {FormControl, Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import React from "react";
import {Field} from "formik";
import {HiCurrencyDollar} from "react-icons/hi";
import useAddresses from "../hooks/useAddresses";
import useFilteredAddresses from "../hooks/useFilteredAddresses";
import Suggestions from "./Suggestions";


function CustomField(props) {
    const {selected} = props

}

export default function PropertyField({setFieldValue}) {
    const {addresses, status, error} = useAddresses()
    const fieldRef = React.useRef(null)
    const [term, setTerm] = React.useState()
    const filteredAddress = useFilteredAddresses({addresses, searchTerm: term})
    const handleSuggestionItemClick = (ev, itemValue) => {
        setFieldValue('address_line', itemValue)
    }
    return (
        <Field name={'address_line'}>
            {({field, form}) => (
                <>
                    {setTerm(field.value)}
                    <FormControl isInvalid={form.errors.address_line && form.touched.address_line}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<Icon as={HiCurrencyDollar} color={'black'}/>}
                            />
                            <Input {...field} borderColor={'#98DFD0'}
                                   id={'address_line'}
                                   borderWidth={'2px'}
                                   type="text" placeholder="Property"/>
                        </InputGroup>
                    </FormControl>
                    <Suggestions items={filteredAddress} handleSuggestionItemClick={handleSuggestionItemClick}/>
                </>
            )}
        </Field>

    )
}
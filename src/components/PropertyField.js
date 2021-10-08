import {FormControl, Icon, Input, InputGroup, InputLeftElement, Td, Tr} from "@chakra-ui/react";
import React from "react";
import {Field} from "formik";
import {ReactComponent as PropertyIcon} from "../assets/svgs/vuesax-bold-building-3.svg";
import useAddresses from "../hooks/useAddresses";
import useFilteredAddresses from "../hooks/useFilteredAddresses";
import PropertySuggestions from "./PropertySuggestions";

import {useDispatch} from "react-redux";
import {setPropertyObj} from "../redux/actions";

function ItemRenderer(itemId, itemValue) {
    const dispatch = useDispatch()
    const handleClick = () => {
        // set the property id and full address.
        dispatch(setPropertyObj({property_id: itemId, full_address: itemValue}))
    }
    return (
        <Tr>
            <Td backgroundColor={'whiteAlpha.200'} _hover={{backgroundColor: 'teal', color: 'white'}}
                onClick={handleClick}>{itemValue}</Td>
        </Tr>)

}

export default function PropertyField({setFieldValue}) {
    // TODO: Create a context to pass the status and handleClick to the child component
    const {addresses, status, error} = useAddresses()
    const [term, setTerm] = React.useState()
    const filteredAddress = useFilteredAddresses({addresses, searchTerm: term})
    const dispatch = useDispatch()
    const handleSuggestionItemClick = (itemId, itemValue) => {
        setFieldValue('address_line', itemValue)
        dispatch(setPropertyObj({property_id: itemId, full_address: itemValue}))
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
                                children={<Icon as={PropertyIcon} color={'black'}/>}
                            />
                            <Input {...field} borderColor={'#98DFD0'}
                                   id={'address_line'}
                                   borderWidth={'2px'}
                                   type="text" placeholder="Property"
                                   // width={'60ch'}
                            />
                        </InputGroup>
                    </FormControl>
                    {/* Todo:  In suggestions when a suggestion item is clicked also store the id*/}
                    <PropertySuggestions status={status} items={filteredAddress.map(obj => [obj.property_id, obj.full_address])}
                                         ItemRenderer={ItemRenderer} handleSuggestionItemClick={handleSuggestionItemClick}/>
                </>
            )}
        </Field>

    )
}
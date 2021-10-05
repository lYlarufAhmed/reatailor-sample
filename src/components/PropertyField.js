import {FormControl, Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {Field} from "formik";
import {HiCurrencyDollar} from "react-icons/hi";

export default function PropertyField() {
    return (
        <Field name={'address_line'}>
            {({field, form}) => (
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
            )}
        </Field>

    )
}
import {Icon, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {HiCurrencyDollar} from "react-icons/hi";

export default function PropertyInputField({formik}) {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<Icon as={HiCurrencyDollar} color={'black'}/>}
            />
            <Input borderColor={'#98DFD0'} onChange={formik.handleChange} onBlur={formik.handleBlur} borderWidth={'2px'}
                   value={formik.values.address_line}
                   type="text" placeholder="Property"/>
        </InputGroup>

    )
}
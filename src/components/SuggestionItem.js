import {Td, Tr} from "@chakra-ui/react";

export default function SuggestionItem({value, formik}) {
    const handleClick = ()=>{
        formik.values.address_line = value
    }
    return (
        <Tr>
            <Td onClick={handleClick}>{value}</Td>
        </Tr>)
}
import {Td, Tr} from "@chakra-ui/react";

export default function SuggestionItem({value, handleSuggestionItemClick}) {
    const handleClick = (ev) => {
        console.log('Clicked on the suggestions')
        handleSuggestionItemClick(ev, value)
    }
    return (
        <Tr>
            <Td backgroundColor={'whiteAlpha.200'} _hover={{backgroundColor: 'teal', color: 'white'}} onClick={handleClick}>{value}</Td>
        </Tr>)
}
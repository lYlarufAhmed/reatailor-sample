import {Progress, Table, Tbody, Td, Tr} from "@chakra-ui/react";


function SuggestionItem({value, handleSuggestionItemClick}) {
    return (
        <Tr>
            <Td backgroundColor={'whiteAlpha.200'} _hover={{backgroundColor: 'teal', color: 'white'}}
                onClick={handleSuggestionItemClick}>{value}</Td>
        </Tr>)
}

export default function PropertySuggestions({
                                                status,
                                                items: values,
                                                ItemRenderer,
                                                handleSuggestionItemClick,
                                                ...styleProps
                                            }) {

    return (
        //TODO: Table should have a fixed height to view a specific amount of rows and will have a scroll bar to
        // scroll the other suggestions
        <>
            {status === 'loading' && <Progress size="xs" isIndeterminate/>}
            <Table backgroundColor={"white"} variant="simple" {...styleProps}
                   position={'absolute'} zIndex={'3'}>
                <Tbody>
                    {values.map(([itemId, itemValue]) => <SuggestionItem key={itemId}
                                                                         handleSuggestionItemClick={() => handleSuggestionItemClick(itemId, itemValue)}
                                                                         value={itemValue}/>)}
                </Tbody>
            </Table>
        </>
    )
}
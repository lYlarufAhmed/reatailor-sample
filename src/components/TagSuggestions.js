import {Box,
    // , Progress,
    Table, Tbody, Td, Text, Tr} from "@chakra-ui/react";


function SuggestionItem({tagObj, handleSuggestionItemClick}) {
    return (
        <Tr>
            <Td backgroundColor={'whiteAlpha.200'} _hover={{backgroundColor: 'teal', color: 'white'}}
                onMouseDown={() => handleSuggestionItemClick(tagObj)}>{tagObj.tag}</Td>
        </Tr>)
}

function CreateItemRenderer({handleCreateItem, typedValue}) {
    return (
        <Tr>
            <Td backgroundColor={'whiteAlpha.200'} _hover={{backgroundColor: 'teal', color: 'white'}}
                onMouseDown={() => handleCreateItem(typedValue)}>Create {<Text d={'inline'} fontSize={'md'}
                                                                               fontWeight={'bold'}>"{typedValue}"</Text>}</Td>
        </Tr>
    )

}

export default function TagSuggestions({
                                           status,
                                           items: values,
                                           handleSuggestionItemClick,
                                           currentValue,
                                           handleCreateItem,
                                           ...styleProps
                                       }) {

    return (
        //TODO: Table should have a fixed height to view a specific amount of rows and will have a scroll bar to
        // scroll the other suggestions
        <Box height={'5rem'} overflowY={'scroll'} overflowX={'hidden'} position={'absolute'} zIndex={'3'}>


            <Table backgroundColor={"white"} variant="simple" {...styleProps}
            >
                <Tbody>
                    {currentValue &&
                    <CreateItemRenderer handleCreateItem={handleCreateItem} typedValue={currentValue}/>}
                    {values && values.map((item) => <SuggestionItem key={item.tag}
                                                                    handleSuggestionItemClick={handleSuggestionItemClick}
                                                                    tagObj={item}/>)}
                </Tbody>
            </Table>
        </Box>
    )
}

import {Table, Tbody, Td, Tr} from "@chakra-ui/react";
import SuggestionItem from "./SuggestionItem";

export default function Suggestions({items, handleSuggestionItemClick}) {
    return (
        <Table backgroundColor={"white"}  variant="simple" size={'lg'}
               position={'absolute'} zIndex={'3'}>
            <Tbody>
                {items.map((item) => <SuggestionItem key={item.propery_id}
                                                     handleSuggestionItemClick={handleSuggestionItemClick}
                                                     value={item.full_address}/>)}
            </Tbody>
        </Table>
    )
}
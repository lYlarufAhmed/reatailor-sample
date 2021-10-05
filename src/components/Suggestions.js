import {Table, Tbody, Td, Tr} from "@chakra-ui/react";
import SuggestionItem from "./SuggestionItem";

export default function Suggestions({ items, formik }) {
    return (
        <Table variant="simple" size={'sm'}>
            <Tbody>
                {items.map((item)=><SuggestionItem formik={formik} key={item.propery_id} value={item.full_address}/>)}
            </Tbody>
        </Table>
    )
}
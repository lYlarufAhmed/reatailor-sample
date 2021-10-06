import React from 'react'
import {Text, Flex, Box} from '@chakra-ui/react'
// import {CUIAutoComplete} from 'chakra-ui-autocomplete'
// import {CUIAutoComplete} from "chakra-ui-autocomplete";
import {ModifiedCUIAutocomplete as CUIAutoComplete} from "./ModifiedCUIAutocomplete";
import {FieldArray} from "formik";


const tagOptions = [
    {value: '1', label: 'Ski Resort'},
    {value: '2', label: 'Hot Tub'},
    {value: '3', label: 'Mountain Views'},
    {value: '4', label: 'Recently Updated'},
    {value: '5', label: 'Private Pool'},
    {value: '6', label: 'Resort Pool'},
]

export default function TagsField({setFieldValue}) {
    const [pickerItems, setPickerItems] = React.useState(tagOptions);
    const [selectedItems, setSelectedItems] = React.useState([]);

    const handleCreateItem = (item) => {
        setPickerItems((curr) => [...curr, item]);
        setSelectedItems((curr) => [...curr, item]);
    };

    const handleSelectedItemsChange = (selectedItems) => {
        if (selectedItems) {
            setSelectedItems(selectedItems);
        }
    };

    const customRender = (selected) => {
        return (
            <Flex flexDir="row" alignItems="center">
                <Text>{selected.label}</Text>
            </Flex>
        )
    }

    const customCreateItemRender = (value) => {
        return (
            <Text>
                <Box as='span'>Create</Box>{' '}
                <Box as='span' bg='red.300' fontWeight='bold'>
                    "{value}"
                </Box>
            </Text>
        )
    }

    return (
        <FieldArray name={'tags'} render={(arrayHelper) => (<CUIAutoComplete
                // Customize the selected tags
                tagStyleProps={{
                    rounded: 'md',
                    bg: '#1EBF99',
                    textAlign: 'left',
                    font: 'normal normal medium 16px/25px Poppins',
                    color: "#FFFFFF",
                }}
                label="Tags"
                labelStyleProps={{
                    textAlign: 'left',
                    font: 'normal normal medium 25px / 38px Poppins',
                    fontWeight: "bolder",
                    letterSpacing: '0.31px',
                    color: '#1D1F2B',
                    opacity: 1,
                }}
                placeholder="Choose/Create Tags"
                onCreateItem={handleCreateItem}

                items={pickerItems}
                itemRenderer={customRender}
                hideToggleButton={true}
                createItemRenderer={customCreateItemRender}
                selectedItems={selectedItems}
                onSelectedItemsChange={(changes) => {
                    handleSelectedItemsChange(changes.selectedItems)
                    setFieldValue('tags', changes.selectedItems)
                }
                }
            />
        )
        }/>

    );
}
import React from 'react'
import {Text, Flex, Box, Input, FormControl, Progress} from '@chakra-ui/react'
import {FieldArray} from "formik";
import TagSuggestions from "./TagSuggestions";
import useTags from "../hooks/useTags";

// TODO: make a network call
// const tags = [
//     {tag_id: '1', tag: 'Ski Resort'},
//     {tag_id: '2', tag: 'Hot Tub'},
//     {tag_id: '3', tag: 'Mountain Views'},
//     {tag_id: '4', tag: 'Recently Updated'},
//     {tag_id: '5', tag: 'Private Pool'},
//     {tag_id: '6', tag: 'Resort Pool'},
// ]


function SelectedItemRenderer({value, label, handleDelete}) {
    return (
        <Flex alignItems={'center'} justifyContent={'space-around'}
              p={'8px 10px'} backgroundColor={'#1EBF99'}
              margin={'.5rem'}
        >
            <Text fontSize={'xs'} letterSpacing={'.08rem'} fontWeight={'500'} color={"white"}
                  marginRight={'15px'}>{label}</Text><Text color={'white'} onClick={handleDelete}>x</Text>
        </Flex>
    )
}


export default function TagsField({setFieldValue}) {
    // the items showed in the suggestion dropdown ( fetched from db and are not selected)
    // TODO: do a fetch call
    const {tags: tagOptions, create, status
        // , error
    } = useTags()
    const [pickerItems, setPickerItems] = React.useState(tagOptions);
    const [showSuggestions, setShowSuggestions] = React.useState(false)
    const [currentVal, setCurrentVal] = React.useState('')

    React.useEffect(() => {
        setPickerItems(tagOptions)
    }, [tagOptions])

    return (
        <FieldArray name={'tags'} render={({form}) => (
            <FormControl isInvalid={form.errors.tags && form.touched.tags}>
                <Text marginLeft={'10px'} fontWeight={'bold'} fontSize={'xl'}>Tags</Text>
                <Box border={'1.5px solid #1EBF99'} p={'.4rem'}
                     justifyContent={'space-between'} width={'450px'} minHeight={'70px'}
                     position={'relative'}>
                    <Flex flexWrap={'wrap'}>
                        {form.values.tags.map(
                            ({tag_id, tag}, i) => (
                                <SelectedItemRenderer
                                    key={i} value={tag_id}
                                    label={tag}
                                    handleDelete={() => {
                                        setFieldValue('tags', form.values.tags.filter(obj => obj.tag_id !== tag_id))
                                        setPickerItems(prevState => {
                                            console.log('tagOptions', tagOptions)
                                            console.log('prevState', prevState)
                                            if (tagOptions.some(obj => obj.tag_id === tag_id)
                                                && !prevState.some(obj => obj.tag_id === tag_id)
                                            ) {
                                                prevState.push({
                                                    tag_id,
                                                    tag
                                                })
                                            }
                                            return JSON.parse(JSON.stringify(prevState))
                                        })
                                    }}/>
                            )
                        )}
                    </Flex>
                    <FormControl>
                        <Input
                            onFocus={() => {
                                setShowSuggestions(true)
                            }}
                            // onChange
                            onBlur={() => {
                                setShowSuggestions(false)
                            }}
                            onChange={(ev) => setCurrentVal(ev.target.value)}
                            value={currentVal}
                            variant={'unstyled'}
                            id={'tagInput'}
                            type="text" placeholder="Type to add tag" width={'10ch'}
                        />
                    </FormControl>
                    {
                        // It breaks the the layout at bottom of the screen when showed
                        // solution would be a scroll able vie
                        status === 'loading' ? <Progress size="xs" isIndeterminate/> :
                            showSuggestions &&
                            <TagSuggestions
                                items={
                                    pickerItems && pickerItems.filter(item => (
                                            currentVal && (
                                                !form.values.tags.some(t => t.tag_id === item.tag_id)
                                            ) && new RegExp(`.*${currentVal}.*`, 'i').test(item.tag.split(',')[0]))
                                    )
                                }
                                currentValue={currentVal}
                                handleSuggestionItemClick={
                                    (obj) => {
                                        setFieldValue('tags', [...form.values.tags, obj])

                                        setPickerItems(prevState => prevState.filter(prevObj => prevObj.tag_id !== obj.tag_id))
                                        setCurrentVal('')
                                    }
                                }
                                handleCreateItem={async (tag) => {
                                    // iterate over the the tags
                                    let newTag = await create(tag)
                                    setFieldValue('tags', [...form.values.tags, newTag])
                                    // console.log('newly created tag', newTag)
                                    setCurrentVal('')
                                    // if (newTag){}
                                }}
                                size={'sm'}/>
                    }

                </Box>
            </FormControl>
        )}/>
    );
}
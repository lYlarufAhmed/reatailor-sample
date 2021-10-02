import {
    Flex, Icon,
    FormControl, InputGroup, InputLeftElement, Input, Box, Spacer, Select
} from "@chakra-ui/react";
import {HiOfficeBuilding, HiCurrencyDollar, HiPaperAirplane} from 'react-icons/hi'


export default function PropertyInput() {
    return (
        <Flex height={'100vh'} justifyContent={'center'}
              backgroundColor={'#F4F6FA'}>
            <Flex direction={'column'} backgroundColor={'yellow'} justifyContent={'center'}
                  alignItems={'center'}>

                <Box>

                    <FormControl id={'property'}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<Icon as={HiOfficeBuilding} color={'black'}/>}
                            />
                            <Input borderColor={'#98DFD0'} borderWidth={'2px'} type="text" placeholder="Property"/>
                        </InputGroup>
                    </FormControl>

                </Box>
                <Spacer/>
                <Box>

                    <FormControl id={'revenue'}>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<Icon as={HiCurrencyDollar} color={'black'}/>}
                            />
                            <Input borderColor={'#98DFD0'} borderWidth={'2px'} type="text" placeholder="Revenue"/>
                        </InputGroup>
                    </FormControl>

                </Box>
                <Spacer/>
                <Box width={'100%'}>

                    <FormControl id={'property-type'}>
                        <InputGroup>
                            <InputLeftElement paddingRight={'1rem'} children={<HiPaperAirplane/>}/>


                                <Select isFullWidth={true} size={'md'} borderColor={'#98DFD0'} borderWidth={'2px'}
                                        type="select" placeholder="Select Type">
                                    <option value={'1'}>Option 1</option>
                                    <option value={'1'}>Option 1</option>
                                    <option value={'1'}>Option 1</option>
                                    <option value={'1'}>Option 1</option>
                                </Select>
                        </InputGroup>
                    </FormControl>
                </Box>

                <Box width={'100%'}>
                    <FormControl id={'property-type'}>
                        <InputGroup>
                            <InputLeftElement paddingRight={'1rem'} children={<HiPaperAirplane/>}/>


                                <Select isFullWidth={true} size={'md'} borderColor={'#98DFD0'} borderWidth={'2px'}
                                        type="select" placeholder="Select Type">
                                    <option value={'1'}>Option 1</option>
                                    <option value={'1'}>Option 1</option>
                                    <option value={'1'}>Option 1</option>
                                    <option value={'1'}>Option 1</option>
                                </Select>
                        </InputGroup>
                    </FormControl>
                </Box>

            </Flex>
        </Flex>

    )
}
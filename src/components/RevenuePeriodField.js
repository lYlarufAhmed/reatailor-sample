import {Field} from "formik";
import {Box, Flex} from "@chakra-ui/react";

const selectedProps = {
    backgroundColor: '#1EBF99',
    color: 'white',
}

const genProps = {
    backgroundColor: "white",
    color: '#4F4F4F'
}

function Label({value, selected, index}) {
    let props = selected ? selectedProps : genProps
    return (
        <Box as={'label'} height={'40px'}
            width={'50px'}
             {...props}
             textAlign={'center'}
             display={'grid'} placeItems={'center'} border={'1.5px solid #1EBF99'}
             borderRadius={index === 0 ? '10px 0 0 10px' : index === 2 ? '0 10px 10px 0' : ''}
        >
            <Field name={'revenue_period'} value={value} type={'radio'} hidden={true}/>
            {value}
        </Box>
    )
}

export default function RevenuePeriodField({currentValue}) {
    return (
        <Flex>
            {['Mo', 'Yr', 'YTD'].map((val, i) => <Label key={i} value={val} index={i}
                                                        selected={val === currentValue}/>)}
        </Flex>

    )
}
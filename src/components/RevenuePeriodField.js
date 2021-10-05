import {Field} from "formik";
import {Box} from "@chakra-ui/react";

function Label({value}) {
    return (
        <Box as={'label'}>
            <Field name={'revenue_period'} value={value} type={'radio'} hidden={true}/>
            {value}
        </Box>
    )
}

export default function RevenuePeriodField() {
    return (
        <>
            {['Mo', 'Yr', 'YTD'].map((val, i) => <Label key={i} value={val}/>)}
        </>

    )
}
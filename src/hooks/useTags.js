import React from "react";
import {createTag, getAllTags} from "../api";

export default function useTags() {
    const [tags, setTags] = React.useState([])
    const [status, setStatus] = React.useState('loading')
    const [error, setError] = React.useState('')
    const create = async (tag) => {
        try {
            setStatus('loading')
            let newTag = await createTag(tag)
            setTags(prevState => JSON.parse(JSON.stringify([...prevState, newTag])))
            setStatus('success')
            return newTag
        } catch (e) {
            setStatus('error')
            setError(e.error)
        }
    }

    const refetch = async () => {
        try {
            setStatus('loading')
            setTags(await getAllTags())
            setStatus('success')
        } catch (e) {
            setStatus('error')
            setError(e.error)
        }
    }


    React.useEffect(() => {
        refetch()
    }, [])

    return {
        tags, create, status, error
    }
}

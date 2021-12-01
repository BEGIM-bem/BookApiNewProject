import {useParams, useHistory} from 'react-router-dom'
import { useMutation, useQuery } from 'react-query'

import {Box, Heading, Flex}  from 'rebass/styled-components'

import {BookForm, Container} from '../shared'

import {getBook, updateBook} from '../api'
import Loader from 'react-loader-spinner'


function UpdateBook() {
    const {id} = useParams()
    const history = useHistory()
    const {data, error, isLoading , isError} = useQuery(['book', {id}], getBook)

    const {mutateAsync, isLoading: isMutating } = useMutation(updateBook ) 

    const onFormSubmit = async (data) =>{
        await mutateAsync({...data, id})  
        history.push('/')
    }
  
    if(isLoading){
        return <Container>
            <Flex py = '5' justifyContent ='center'>
                <Loader type ='ThreeDots' color ='#ccc' height ={30} /> 

            </Flex>
             </Container>
    }

    if(isError){
        return  <Container>
        <Flex py = '5' justifyContent ='center'>
            Error: {error.message}

        </Flex>
         </Container>
    }
    return (
        <Container>
            <Box sx ={{py:3}} >
                <Heading sx={{marginBottom: 3}}>UpdateBook</Heading>
                <BookForm defaultValue ={data} onFormSubmit = {onFormSubmit} isLoading= {isMutating}  />

            </Box>
        </Container>
    )
}

export default UpdateBook
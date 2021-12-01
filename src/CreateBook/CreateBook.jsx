import React from 'react'
import BookForm from '../shared/BookForm'
import Container from '../shared/Container'

import {Box, Нeading} from 'rebass/styled-components'
import { useMutation} from 'react-query'
import createBoook from "../api"

import {
    useNavigate
 } from 'react-router-dom';


export const CreateBook = () =>{


    const navigate = useNavigate();
    const{mutateAsync, isLoading } =useMutation(createBoook) 

console.log("Crete: ", createBoook)

    const onFormSubmit = async(data) =>{
        await mutateAsync(data)
     
        navigate("/")
        
    }
  
    return(

        <Container>
            <Box sx ={{py:'3px'}}>
                <Нeading sx ={{marginBottom: '3px'}}>Create New Book</Нeading>
                <BookForm onFormSubmit ={onFormSubmit} isLoading ={isLoading} ></BookForm>

            </Box>
        </Container>
    )
}
export default CreateBook;
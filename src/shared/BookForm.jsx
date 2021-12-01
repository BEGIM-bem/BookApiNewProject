import React from 'react'
import {Box , Button} from 'rebass/styled-components'
import {Label, Input} from '@rebass/forms'
import {useForm} from 'react-hook-form'
import Loader from 'react-loader-spinner'

function BookForm  ({defaultValues, onFormSumbit, isLoading }) {
    const {handleSumbit, register } = useForm({defaultValues }) 
    
    const onSubmit = handleSumbit((data) => {
        onFormSumbit(data)
    })   
    return (    
        <form onSubmit ={onSubmit} >
            <Box sx ={{marginBottom: 3 }}>
                <Label htmlFor ='title'>Title</Label>
                <Input ref = {register} id ="title" name ='title' type = 'text' />
            </Box>


            <Box sx ={{marginBottom: 3 }}>
                <Label htmlFor ='author'>Author</Label>
                <Input ref = {register} id ="author" name ='author' type = 'text' />
            </Box>
            <Button> {isLoading?( <Loader type ='ThreeDots' color ='#fff' height={10}/>) : ("Submit") } </Button>
        </form>
    )

}
export default BookForm; 
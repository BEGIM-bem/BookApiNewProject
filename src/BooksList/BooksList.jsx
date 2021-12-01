import React from 'react'
import {useQuery } from 'react-query' 
// import {getAllBooks} from '../api'
import {Container} from '../shared/Conteiner'
import {Flex} from 'rebass/styled-components'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import { BookItem } from './BookItem'


const getAllBooks = async () => {
    let response = await axios.get("http://localhost:4000/books")
    console.log("dataat: ",  response.data)

    // if(!response.ok){
    //     throw new Error("Something went wrong!!!")
    // }

    return response.data

   
}

 
 function BooksList(){
   

     const {isSuccess, data,  error, isLoading, isError} = useQuery('books', getAllBooks)
     console.log("Data22: ",  data)


     if(isLoading){
         return <Container>
             <Flex py = '5' justifyContent ='center'>
                 <Loader type ='ThreeDots' color ='#ccc' height ={30} />

             </Flex>
              </Container>
     }


     if(isError){
         return <span>Error: {error.message} </span>
     }
   

    return ( 
        <Container> 
            <Flex flexDirection ='column' alignItems ='center'>
                {data.map( item =>(
                    <BookItem author = {item.author} title ={item.title} key ={item.id} id ={item.id} />
                ) ) }
            </Flex>
        </Container>
    )

    }

export default BooksList;
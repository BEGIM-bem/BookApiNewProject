import React from "react"
import axios from 'axios'

export const getAllBooks = async () => {
    const response = await axios.get("http://localhost:4000/books")
    console.log("dataat: ",  response.data)

    if(!response.ok){
        throw new Error("Something went wrong!!!")
    }

    return response.data

   
}

export const getBook = async ({queryKey}) =>{
    const [_key, {id}] = queryKey;
    const response = await axios.get(`http://localhost:4000/books/${id}`)
    if(response.ok == false){
        console.log("Error!!")
    }
    return response.data
}   

export const updateBook = async({id, ...date}) =>{
    const headers  ={
        "Content-Type" : "application/json"
    }
    const response = await axios.put(`http://localhost:4000/books/${id}`, {headers}  )

    if(!response.ok){
        return("Ошибка в: ", response.message)
    }
    return response /* остановка здесь время видео 49: 01 написала updateBook надо подключить   */

}

export const removeBook =  async (id) =>{
    const res = await axios.delete(`http://localhost:4000/books/${id}`)

    if(res.ok == false){
        console.log("Error!!")
    }

    return true

}


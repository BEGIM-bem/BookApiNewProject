
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
    const [ _key, {id}] = queryKey;
    const response = await axios.get(`http://localhost:4000/books/${id}`)
    if(response.ok === false){
        console.log("Error!!")
    }
    return response.data
}   


export const updateBook = async({id, ...data}) =>{
  const response  = await fetch (`http://localhost:4000/books/${id}` , {
      method: "PUT",
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  if(!response.ok){
      throw new Error(response.json().message)
  }
  return response.json()

}

export const removeBook =  async (id) =>{
    const res = await axios.delete(`http://localhost:4000/books/${id}`)

    if(res.ok === false){
        console.log("Error!!")
    }

    return true

}

const createBoook = async(data) =>{
    const response = await fetch(`http://localhost:4000/books/`, {
        method: 'POST',
        headers:{
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data)
    })
    if(!response.ok){
        console.log("Ошибка")
    }

    return response.json()

}
export default createBoook


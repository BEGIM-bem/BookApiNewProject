import React from 'react';
import {Routes, Route, Router }  from 'react-router-dom' /*Routes -это место Swich разработчики так поменяли */
import BooksList from './BooksList/BooksList'
import CreateBook from './CreateBook/CreateBook.jsx'
import UpdateBook from './UpdateBook/UpdateBook.jsx';
import NavBar from './shared/NavBar'
function App() {
  return (
 
<>
    <NavBar />
 
    <Routes>
        <Route path ='/update-book/:id' element ={<UpdateBook />} />
           

      <Route path ='/create-book' element = {<CreateBook />} />
       
        

      <Route path = '/' element ={<BooksList />} />

    </Routes>
    </>
  
  );
}

export default App;

import { Button } from '@mui/material';
import { useParams , useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {API} from './global'

export function BookDetail() {
  const { bookid } = useParams();
  // const book = bookList[bookid];
  const navigate = useNavigate()
  const [book , setBook] = useState({})

  useEffect(() =>{
    fetch(`${API}/books/${bookid}`,{
      method: "GET"
    } )
        .then((data) => data.json()).then((bkl) => {setBook(bkl)})
  },[])


  return (
    <div>
      <iframe 
      width="100%"
       height="750px"
        src={book.video}
        title="The Secret Documentary Trailer"
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowfullscreen></iframe>

    <div className="bookDetail">
       <div className="tittle">
      <h1 className="name">{book.name} </h1>
      <p  className="rating">⭐{book.rating}</p>
    </div>
    {/* <button onClick={() => setShow(!show)}>Toggle Description</button> */}
    {/* <button onClick={()=> navigate("/book/"+ id)} >Info</button> */}
  
    {/* {show ? <p className="summary">{book.summary}</p> : ""} */}
   <p className='summary'>{book.summary}</p>
   <Button variant="contained" onClick={()=> navigate(-1)} ><ArrowBackIosNewIcon/>BACK</Button>
  </div>
  </div>
  );
}

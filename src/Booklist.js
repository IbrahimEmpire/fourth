import { Counder } from './Counder';
import { useState, useEffect } from 'react';
import { punch_book_list } from './App';
import { useNavigate} from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import {API} from './global'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export function Booklist() {
  // const booklist = punch_book_list;
  // const [name , setName] = useState("")
  // const [poster , setPoster] = useState("")
  // const [rating , setRating] = useState("")
  // const [summary , setSummary] = useState("")
  // const [video , setVideo ] = useState("")
  // const [bookList , setBookList] = useState(punch_book_list)
  // console.log(bookList)
  const [bookList , setBookList] = useState([])
  const navigate = useNavigate()

  const getBook = () => {
    fetch(`${API}/books`, {method: "GET"})
        .then((res) => res.json()).then((data) => {setBookList(data)})
  }

  // useEffect(() =>,[])

  useEffect(() => getBook, [])
  return (
    <div>
      {/* <div className='input'>
      <TextField 
      label="Book Name"
      variant="outlined"
      type="text"
      placeholder='Enter Book Name'
      onChange={(event)=> setName(event.target.value)}
      value ={name}
      />
      <br>
      </br>
       <TextField 
       variant="outlined"
       label="Poster"
      type="text"
      placeholder='Enter Book Poster'
      onChange={(event)=> setPoster(event.target.value)}
      value ={poster}
      />
      <br>
      </br>
       <TextField 
       variant="outlined"
       label="Rating"
      type="text"
      placeholder='Enter Book Rating'
      onChange={(event)=> setRating(event.target.value)}
      value ={rating}
      />
      <br>
      </br>
       <TextField 
       variant="outlined"
       label="Summary"
      type="text"
      placeholder='Enter Book Summary'
      onChange={(event)=> setSummary(event.target.value)}
      value={summary}
      />
      <br></br>
      <TextField 
       variant="outlined"
       label="Video"
      type="text"
      placeholder='Enter Book Video'
      onChange={(event)=> setVideo(event.target.value)}
      value={video}
      />
      <br></br>
      <Button
       variant="contained"
      onClick={() =>{
        const newbook ={
          name : name,
          poster : poster,
          rating : rating,
          summary : summary
        }
       
        const data = bookList
        const data1 = [...data, newbook]
        console.log(data1)
        setBookList(data1)
      } }
      >Add book</Button>
      
</div> */}

<div className='booklist' >
      {bookList.map((bk) => (
        <Book key={bk.id} book={bk} id={bk.id} 
        deleteBtn={
          <IconButton color="error" aria-label="upload picture" component="label"
          onClick={()=>  fetch(`${API}/books/${bk.id}`,{
            method: "DELETE"
          } ).then(() => getBook())
          }>
  <DeleteIcon/>
</IconButton>
        }
        editBtn={
          <IconButton color="info" aria-label="upload picture" component="label"
          onClick={()=> navigate(`/book/edit/${bk.id}`)
          }>
  <EditIcon/>
</IconButton>

        } 
        />
        
      ))}

    </div>
    </div>
    

  );

}

function Book({ book,id,deleteBtn,editBtn }) {
  const [show, setShow] = useState(false);
  // const sumstyles ={
  //   display: show? "block" : "none"
  // }
  const styles = {
    color: book.rating >= 8 ? "green" : "red"
  };
const navigate = useNavigate()
  return (
    <div className="container">
      <img className="img" src={book.poster} alt={book.name} />
      <div className="tittle">
        <h1 className="name">{id}.  {book.name}</h1>
        <p style={styles} className="rating">⭐{book.rating}</p>
      </div>
      {/* <button onClick={() => setShow(!show)}>Toggle Description</button> */}
      {/* <button onClick={()=> navigate("/book/"+ id)} >Info</button> */}
      <IconButton aria-label="likebtn"
      color= "primary"
     onClick={() => setShow(!show)}
      >
        {show ? <ExpandMoreIcon/> : <ExpandLessIcon/> }
       
      </IconButton>
      <IconButton aria-label="likebtn"
      onClick={()=> navigate("/book/"+ id)}
      ><InfoIcon/>
       </IconButton>

      {show ? <p className="summary">{book.summary}</p> : ""}
      <Counder />{deleteBtn}{editBtn}
    </div>

  );
}

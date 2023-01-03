import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {API} from './global'
import TextField from '@mui/material/TextField';


export function Addbook({ bookList, setBookList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();
  return (
    
    <div className='input'>
      <TextField
        label="Book Name"
        variant="outlined"
        type="text"
        placeholder='Enter Book Name'
        onChange={(event) => setName(event.target.value)}
        value={name} />
      <br>
      </br>
      <TextField
        variant="outlined"
        label="Poster"
        type="text"
        placeholder='Enter Book Poster'
        onChange={(event) => setPoster(event.target.value)}
        value={poster} />
      <br>
      </br>
      <TextField
        variant="outlined"
        label="Rating"
        type="text"
        placeholder='Enter Book Rating'
        onChange={(event) => setRating(event.target.value)}
        value={rating} />
      <br>
      </br>
      <TextField
        variant="outlined"
        label="Summary"
        type="text"
        placeholder='Enter Book Summary'
        onChange={(event) => setSummary(event.target.value)}
        value={summary} />
      <br></br>
      <TextField
        variant="outlined"
        label="Video"
        type="text"
        placeholder='Enter Book Video'
        onChange={(event) => setVideo(event.target.value)}
        value={video} />
      <br></br>
      <Button
        variant="contained"
        onClick={() => {
          const newbook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            video: video
          };

          fetch(`${API}/books/`,{
            method: "POST",
            body: JSON.stringify(newbook),
            headers: {"content-Type": "application/json"}
          } )
              .then((data) => data.json()).then(()=>navigate("/book"))
              // navigate("/book");
          // const data = bookList;
          // const data1 = [...data, newbook];
          // console.log(data1);
          // setBookList(data1);
          // navigate("/book");
        }}
      >Add book</Button>

    </div>
    
  );
}

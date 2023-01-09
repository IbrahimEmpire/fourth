import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {API} from './global'
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import * as yup from "yup";


export function Addbook({ bookList, setBookList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues : {
       name : "",
       poster: "",
       rating: "",
       summary: "",
       video: "",
      },
    // validationSchema : formValidationSchema,
    onSubmit : (newbook) => {
      // console.log("submit values", newbook)
      creatBook(newbook)
    }
  })

const creatBook = (newbook) => {
console.log("updater value ", newbook)

    fetch(`${API}/books/`,{
      method: "POST",
      body: JSON.stringify(newbook),
      headers: {"content-Type": "application/json"}
    } )
        .then((data) => data.json()).then(()=>navigate("/book"))
       


}

  return (
    
    <form onSubmit={formik.handleSubmit}  className='input'>
      <TextField
        label="Book Name"
        variant="outlined"
        type="text"
        name="name"
  id="name"
        placeholder='Enter Book Name'
        onChange={formik.handleChange}
        onBlur = {formik.handleChange}
      
        value={formik.values.name}
         />
      <br>
      </br>
      <TextField
        label="poster"
        variant="outlined"
        type="text"
        name="poster"
  id="poster"
        placeholder='Enter Book poster'
        onChange={formik.handleChange}
        onBlur = {formik.handleChange}
      
        value={formik.values.poster} />
      <br>
      </br>
      <TextField
        label="Book rating"
        variant="outlined"
        type="rating"
        name="rating"
  id="name"
        placeholder='Enter Book rating'
        onChange={formik.handleChange}
        onBlur = {formik.handleChange}
      
        value={formik.values.rating} />
      <br>
      </br>
      <TextField
     label="Book summary"
     variant="outlined"
     type="text"
     name="summary"
id="summary"
     placeholder='Enter Book summary'
     onChange={formik.handleChange}
     onBlur = {formik.handleChange}
   
     value={formik.values.summary} />
      <br></br>
      <TextField
        label="Book video"
        variant="outlined"
        type="text"
        name="video"
  id="video"
        placeholder='Enter Book video'
        onChange={formik.handleChange}
        onBlur = {formik.handleChange}
      
        value={formik.values.video} />
      <br></br>
      <Button
        variant="contained"
        onClick= {creatBook}
          //  {
          // const newbook = {
          //   name: name,
          //   poster: poster,
          //   rating: rating,
          //   summary: summary,
          //   video: video
          // };

          // fetch(`${API}/books/`,{
          //   method: "POST",
          //   body: JSON.stringify(newbook),
          //   headers: {"content-Type": "application/json"}
          // } )
          //     .then((data) => data.json()).then(()=>navigate("/book"))
          //     // navigate("/book");
          // const data = bookList;
          // const data1 = [...data, newbook];
          // console.log(data1);
          // setBookList(data1);
          // navigate("/book");
        // }
      
        type= "submit"
      >Add book</Button>

    </form>
    
  );
}

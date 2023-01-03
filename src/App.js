import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { Addcolor2 } from './Addcolor2';
import { Users } from './Users';
import { Booklist } from './Booklist';
import { useEffect, useState  } from 'react';
import { BookDetail } from './BookDetail';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { Addbook } from "./Addbook";
import { Home } from './Home';
import { EditBook } from './EditBook';
import { Form } from './Form';

// export const punch_book_list=
//   [
//     {
      
//       name: "Charlotte's web",
//       poster:
//         "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
//       rating: 8.8,
//       video:"https://www.youtube.com/embed/PU2r9tDwZ1M",
//       summary:
//         "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",  
//     },
//     {
//       name: "The power of your subconscious mind",
//       poster:
//         "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
//       rating: 7,
//       video:"https://www.youtube.com/embed/WgITT4zcssY",
//       summary:
//         "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories"
//     },
//     {
//       name: "Attitude is everything ",
//       poster:
//         "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
//       rating: 8.1,
//       video:"https://www.youtube.com/embed/gqviJoSkf6U",
//       summary:
//         "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes."
//     },
//     {
//       name: "The Secret",
//       poster:
//         "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
//         rating: 8.8,
//         video:"https://www.youtube.com/embed/san61qTwWsU",
//       summary:
//         "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
     
      
//     },
//     {
//       name: "Discover Your Destiny",
//       poster:
//       "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
//       rating: 6,
//       video:"https://www.youtube.com/embed/o8wUR2JAeUw",
//       summary:
//         "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    
//     },
//     {
//       name: "The 5 AM Club",
//       poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
//       rating: 8.6,
//       video:"https://www.youtube.com/embed/Kxvp3eOYphY",
//       summary:
//         "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success."
//     },
//     {
//       name: "Atomic Habits",
//       poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
//       rating: 8,
//       video:"https://www.youtube.com/embed/Mwd4CYuBq2s",
//       summary:
//         "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time."
//     },
//     {
//       name: "I Can Do It",
//       poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
//       rating: 8,
//       video:"https://www.youtube.com/embed/Au4uleWHk4M",
//       summary:
//         "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations."
//     }
  
  
// ]

function App() {
  // js start
  const [bookList , setBookList] = useState([])
  const navigate = useNavigate();
  const [mode, setMode] = useState("light")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() =>{
    fetch("https://63a99b287d7edb3ae612712b.mockapi.io/books")
    .then((res) => res.json()).then((data) => {setBookList(data)})
  },[])
  
  // fetch("https://63a99b287d7edb3ae612712b.mockapi.io/books")
  // .then((res) => res.json()).then((data) => {console.log(data)})
  // js end
  // jsx start
  return (
        <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
    <AppBar position="static">
    <Toolbar disableGutters>
      <Button color='inherit' onClick={() => navigate("/") }>Home</Button>
      <Button color='inherit' onClick={() => navigate("/book") }>Movies</Button>
      <Button color='inherit' onClick={() => navigate("/book/add") }>Add Movies</Button>
      <Button color='inherit' onClick={() => navigate("/book/form") }>Form</Button>
      <Button color='inherit' onClick={() => navigate("/color-game") }>Colors</Button>
      <Button color='inherit' onClick={() => navigate("/users") }>Users</Button>
      <Button  startIcon={theme.palette.mode === 'dark' ? <Brightness5Icon/> : <Brightness4Icon/>}
       color='inherit' onClick={() => setMode(mode === "light" ? "dark" : "light") }>
      {mode === "light" ? "dark" : "light"} Mode</Button>

    </Toolbar>
    </AppBar>
    <div>
 
      <Routes>
  <Route path="/" element={<Home />}/>  
  <Route path="/book" element={<Booklist />}/>

  <Route path="/book/:bookid" element={<BookDetail/>}/>
  <Route path="/book/add" element={<Addbook/>}/>
  <Route path="/book/form" element={<Form/>}/>
  <Route path="/book/edit/:bookid" element={<EditBook/>}/>
  
  <Route path="/color-game" element={<Addcolor2/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path='/novel' element={<Navigate replace to = "/book"/>}/>
    <Route path="/404" element={<Error/>}/>
    <Route path="*" element = {<Navigate replace to = "/404"/>}/>
   
   
  
  
</Routes>
   
   
    </div>
    
    </div>
    </ThemeProvider>
   
  );
  // jsx end
}

export default App;

function Error(){
  return(
    <div>
      <h1>Sorry we can't find your .....</h1>
      <img className='error' src='https://media1.giphy.com/media/3Zp8CshcNtX6Mtr2Oj/200w.webp?cid=ecf05e47ddb760n10sh4dvci9hfmvwuamasqt2hoh7b59gjs&rid=200w.webp&ct=g' alt='404 Error'/>
   
    </div>
  )
}


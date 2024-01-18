import './App.css';
import {useEffect} from 'react';
import {SearchIcon} from './search.svg'
// a93d4a2f
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=eabf57e1&';

const App =()=> {

const searchMovies =async (title)=>{
  const response =await fetch(`${API_URL}$s=${title}`);
  const data = await response.json();
  console.log(data.Search);
}

  useEffect(()=>{
searchMovies();
}, [])

  
}

export default App;





































// const [counter, setCounter] = useState(0)
// useEffect(()=>{
//  setCounter(100);
// },[])
// return(
//    <div className='App'>
//    <button onClick={() => setCounter((prevCount)=> prevCount-1)}>-</button>
//    <h1>{counter}</h1>
//    <button onClick={()=> setCounter((prevCount)=> prevCount +1)}>+</button>
// </div>
//  )
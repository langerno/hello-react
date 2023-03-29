import { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css';


function LikeButton(){
  const [count, setCount] = useState(0);
  function doLike(){
    setCount(count + 1);
  }
  return(
    <>
      <h3>Press this button if you like Rosemary!</h3>
      <button onClick={doLike}>Like</button>
      <h4>Likes : {count}</h4>
    </>
  );
}

function Rosemary(){
  return(
    <>
      <img src="RosemarySprig.jpg" alt="rosemary sprig"></img>
    </>
  );
}

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books } = await supabase.from('books').select('*');
    setMyBooks(books);
  }
  getBooks();
  return(
    <table>
        <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>ISBN</th>
      </tr>
    {
      myBooks.map(b => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.Genre}</td>
          <td>{b.ISBN}</td>
        </tr>
      ))
    }
    </table>
  )
}

const facts = [
  {title: "Scientific Name:", desc: "Salvia rosmarinus"},
  {title: "Previous name:", desc: "Previously known as Rosmarinus officinalis"},
  {title: "Description:", desc: "Rosemary is an aromatic evergreen shrub with leaves similar to hemlock needles. Native to the Mediterranean and Asia, but will grow in reasonably well in cool climates"}
]

function RosemaryFacts(){
  const factsList = facts.map(fact =>
    <li style={{
      listStyle: "none",
      fontWeight: fact.title === "Scientific Name:" ? "bold" : "normal"
    }}
    >{fact.title} {fact.desc}</li>);
  return ( 
  <>
    <h3>Rosemary Facts</h3>
    <ul>{factsList}</ul>
  </>);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Rosemary/>
        <RosemaryFacts/>
        <LikeButton/>
        <Library/>
      </header>
    </div>
  );
}

export default App;


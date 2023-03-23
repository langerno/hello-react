import './App.css';

function LikeButton(){
  return(
    <>
      <h3>Press this button if you like Rosemary!</h3>
      <button>Like</button>
    </>
  );
}

function Rosemary(){
  return(
    <>
      <img src="RosemarySprig.jpg" alt="Image of rosemary sprig"></img>
    </>
  );
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
      </header>
    </div>
  );
}

export default App;


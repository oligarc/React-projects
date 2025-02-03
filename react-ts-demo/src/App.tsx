import './App.css'


function App() {

  type Color = "red" | "blue" ;
  type User = {
    id:number;
    name:string;
  }
  const color : Color = "blue"
  const user1 : User = {
    id:1,
    name:'Pepe'
  }
  const n: number=1;

  return (
    <>
      <div>
        <h1>Hey, there you go with a number: {n}</h1>
        <h2>Just trying my color {color}</h2>
        <h3>Just trying my user id {user1.id}</h3>
        <h3>Just trying my user name {user1.name}</h3>
      </div>
    </>
  )
}

export default App

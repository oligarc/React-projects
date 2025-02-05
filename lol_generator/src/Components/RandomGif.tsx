function RandomGif() {

    const imagenRandom = Math.round(Math.random()*4) +1 ;
    console.log(imagenRandom)

  return (
    <img src={`/assets/${imagenRandom}.gif`}></img>
  )
}

export default RandomGif
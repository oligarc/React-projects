import { useEffect, useState } from "react"

function WishListItem({wish, onCompletedChange}) { 

  const [age,setAge] = useState(0); //This state stores how many seconds since wish is not completed
  useEffect( () =>{ //useEffect executes when we render the component or everytime wish.completed changes (or the variable we put at the end)
    console.log("WishListItem Component created: " +wish.text)
    let ageInterval;
    if(!wish.completed){
      //If wish not completed, start a timer that is adding 1 each second to the age
      ageInterval = setInterval( () =>{
        setAge((currentAge) => currentAge +1)
      },1000)
    }else{
      setAge(0);
    }
    return () => clearInterval(ageInterval)
  }, [wish.completed] //List of variables (props or states you're watching)

  )
  return (
    <li key={wish.id} 
          className={`wish-list__item 
          ${wish.completed ? "wish-list__item--done" : ""}
          ${age >= 5 && age  <10 ? 'wish-list__item--warn': ''}
          ${age >= 10  ? 'wish-list__item--danger': ''}
          `}>
            <input type="checkbox" 
            checked={wish.completed}
            onChange={(e) => onCompletedChange(e.target.checked)} 
            readOnly />
            <label htmlFor={wish.id} >
              {wish.text}</label>
          </li>
  )
}

export default WishListItem
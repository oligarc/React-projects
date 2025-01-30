import WishListItem from './WishListItem'
export function WishList({wishes, setWishes}) { //Takes as a prop the list of wishes and the function setWishes
  const onCompletedChangeHandler = (checked, i) => { //Checked to see if checkbox is true or false and i is the index of the wish in the array
    const tempWishes = [...wishes]; //We store the array
    tempWishes[i].completed = checked; //We enter the wish and if user marks the checkbox, its gonna be true, either way false
    setWishes(tempWishes); //We update the state with the new wishes list

    /*To see it better, if we have this:

    wishes:[
    {id:0,
    text:...,
    completed:true}
    ]

    and the user marks the checkbox, React is gonna call this with onCompletedChangeHandler(true,0)
    then copy the list just to not modify it directly, and change the tempWishes[0].completed=false
    then setWishes with the new wishes

    */
    
  };
  //it is good practice to write the key on the component, even though it would not be necessary
  return (
    <ul className="wish-list">
      {wishes.map((wish, i) => (
        <WishListItem
          key={wish.id}
          wish={wish}
          onCompletedChange={(checked) => onCompletedChangeHandler(checked, i)}
        />
      ))}
    </ul>
  )
}

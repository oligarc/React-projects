import WishListItem from "./WishListItem"

function WishList({wishes,setWishes}) {

    const onCompletedChangeHandler = (checked,index) =>{

        const updatedWishes = [...wishes];
        updatedWishes[index].completed=checked;
        setWishes(updatedWishes);

    }

  return (
    <ul>
        {wishes.map((wish,index) => (
        <WishListItem key={wish.id} wish={wish} OnCompletedChange={(checked) => onCompletedChangeHandler(checked,index)}/>
      ))}
    </ul>

  )
}

export default WishList
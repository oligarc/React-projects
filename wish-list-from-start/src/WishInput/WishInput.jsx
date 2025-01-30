import { useState } from "react"

function WishInput({onNewWish}) {

    const [newWish,setNewWish] = useState('');
    const handleKeyUp = (e) =>{

        if(e.key == 'Enter' && newWish!== ''){
            const newWishObj={
                id: Math.random(),
                text: newWish,
                completed:false
            }

            onNewWish(newWishObj)
            setNewWish('')
        }

    }

  return (
    <input type='text' placeholder='My new Wish'
    value={newWish}
    onChange={e => setNewWish(e.target.value)}
    onKeyUp={handleKeyUp}>
    </input>
  )
}

export default WishInput
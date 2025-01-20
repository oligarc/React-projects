function WishListItem({wish}) {
  return (
    <li key={wish.id} 
          className={`wish-list__item 
          ${wish.completed ? 'wish-list__item--done' : ''}`}>
            <input type="checkbox" 
            checked={wish.completed} 
            readOnly />
            <label htmlFor={wish.id} >
              {wish.text}</label>
          </li>
  )
}

export default WishListItem
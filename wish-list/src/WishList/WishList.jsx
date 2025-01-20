import WishListItem from './WishListItem'
export function WishList({wishes}) {
  return (
    <ul className='wish-list'>
        {wishes.map(wish => (
          <WishListItem key={wish.id}
          wish={wish}>
          </WishListItem>
        ))}
      </ul>
  )
}

function WishListItem({wish,OnCompletedChange}) {
  return (
    <li key={wish.id}>
        <input type="checkbox"
        checked={wish.completed}
        onChange={(e) => OnCompletedChange(e.target.checked)}
        readOnly
        />
        {wish.text}
    </li>
  )
}

export default WishListItem
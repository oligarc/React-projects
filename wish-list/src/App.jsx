import './App.css'

const wishes = [
  {
    id: 0,
    text: "Travel to BCN",
    completed: true
  },
  {
    id: 1,
    text: "See Muse live",
    completed: true
  },
  {
    id: 2,
    text: "Get a dev job",
    completed: false
  }
]

function App() {
  return (
    <div className='app'>
      <h1>My wishlist</h1>
      <fieldset className='wish-input'>
        <legend>New Wish:</legend>
        <input type="text" placeholder='My new wish' />
      </fieldset>
      <ul className='wish-list'>
        {wishes.map(wish => (
          <li key={wish.id} className={`wish-list__item ${wish.completed ? 'wish-list__item--done' : ''}`}>
            <input type="checkbox" checked={wish.completed} readOnly />
            <label>{wish.text}</label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

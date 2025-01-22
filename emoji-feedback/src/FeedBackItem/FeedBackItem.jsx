import "../App.css"
export function FeedBackItem({ emoji, onClick }) {
    return (
      <button className= 'emojiButton' onClick={onClick}>
        {emoji}
      </button>
    );
  }
  
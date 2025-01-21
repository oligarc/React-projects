export function FeedBackItem({ emoji, onClick }) {
    return (
      <button onClick={onClick}>
        {emoji}
      </button>
    );
  }
  
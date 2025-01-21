import { FeedBackItem } from "../FeedBackItem/FeedBackItem";

function FeedBackList({ emojis, onFeedBackSelect }) {
  return (
    <div>
      {emojis.map((item) => (
        <FeedBackItem
          key={item.id}
          emoji={item.code}
          onClick={() => onFeedBackSelect(item)}
        />
      ))}
    </div>
  );
}

export default FeedBackList;

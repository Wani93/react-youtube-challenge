import formatAgo from '@/util/date';
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ item, type }: { item: any; type?: 'list' }) => {
  const navigate = useNavigate();
  const {
    id,
    snippet: { thumbnails, title, channelTitle, publishedAt },
  } = item;
  const isList = type === 'list';

  const handleClick = () => {
    navigate(`/videos/watch/${id}`, { state: { video: item } });
  };

  return (
    <li className={isList ? 'flex gap-1 m-2' : ''}>
      <img
        onClick={handleClick}
        className={
          isList ? 'w-60 mr-2' : 'w-full' + 'rounded-lg cursor-pointer'
        }
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p
          title={title}
          className="text-slate-50 font-semibold line-clamp-2 my-1 cursor-pointer"
        >
          {title}
        </p>
        <p className="text-sm text-slate-300 opacity-80 line-clamp-1">
          {channelTitle}
        </p>
        <p className="text-xs text-slate-300 opacity-80">
          {formatAgo(publishedAt, 'ko')}
        </p>
      </div>
    </li>
  );
};

export default VideoCard;

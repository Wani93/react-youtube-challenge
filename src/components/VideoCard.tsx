import formatAgo from '@/util/date';

const VideoCard = ({ item }: { item: any }) => {
  const {
    snippet: { id, thumbnails, title, channelTitle, publishedAt },
  } = item;

  return (
    <li>
      <img
        className="w-full rounded-lg"
        src={thumbnails.medium.url}
        alt={title}
      />
      <p
        title={title}
        className="text-lg text-slate-50 font-bold whitespace-nowrap overflow-hidden text-ellipsis my-1"
      >
        {title}
      </p>
      <p className="text-sm text-slate-300 opacity-80">{channelTitle}</p>
      <p className="text-xs text-slate-300 opacity-80">
        {formatAgo(publishedAt, 'ko')}
      </p>
    </li>
  );
};

export default VideoCard;

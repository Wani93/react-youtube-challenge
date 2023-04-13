const VideoCard = ({ item }: { item: any }) => {
  const {
    snippet: { id, thumbnails, title, channelTitle, publishedAt },
  } = item;

  return (
    <div>
      <img className="rounded-lg" src={thumbnails.high.url} />
      <h1
        title={title}
        className="text-lg text-slate-50 font-bold whitespace-nowrap overflow-hidden text-ellipsis"
      >
        {title}
      </h1>
      <h2 className="text-sm text-slate-300">{channelTitle}</h2>
      <h3 className="text-xs text-slate-300">{publishedAt}</h3>
    </div>
  );
};

export default VideoCard;

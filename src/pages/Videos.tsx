import VideoCard from '@/components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['search', keyword], () => {
    const url = keyword ? '/data/search.json' : '/data/trend.json';

    return fetch(url)
      .then((res) => res.json())
      .then((data) => data.items);
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading && 'loading...'}
      {error && error}
      {videos &&
        videos.map((item: any) => (
          <VideoCard key={item.id.videoId || item.id} item={item} />
        ))}
    </div>
  );
};

export default Videos;

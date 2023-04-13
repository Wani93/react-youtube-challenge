import VideoCard from '@/components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useYoubuteApi } from '@/context/YoutubeApiContext';

const Videos = () => {
  const { keyword } = useParams();
  const { youtube } = useYoubuteApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    return youtube.search(keyword || '');
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {isLoading && 'loading...'}
      {error && error}
      {videos &&
        videos.map((item: any) => <VideoCard key={item.id} item={item} />)}
    </div>
  );
};

export default Videos;

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
  } = useQuery(
    ['videos', keyword],
    () => {
      return youtube.search(keyword || '');
    },
    { staleTime: 1000 * 60 },
  );

  return (
    <>
      {isLoading && 'loading...'}
      {error && error}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((item: any) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;

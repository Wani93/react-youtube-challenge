import { useYoubuteApi } from '@/context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

const RelatedVideos = ({ id }: { id: string }) => {
  const { youtube } = useYoubuteApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['related', id],
    () => {
      return youtube.relatedVideos(id);
    },
    { staleTime: 1000 * 60 * 5 },
  );
  return (
    <>
      {isLoading && 'loading...'}
      {error && error}
      {videos && (
        <ul>
          {videos.map((item: any) => (
            <VideoCard key={item.id} item={item} type="list" />
          ))}
        </ul>
      )}
    </>
  );
};

export default RelatedVideos;

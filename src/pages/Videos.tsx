import VideoCard from '@/components/VideoCard';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import FakeYoutube from '@/api/fakeYoutube';

const Videos = () => {
  const fakeYoutube = new FakeYoutube();
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new FakeYoutube();

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

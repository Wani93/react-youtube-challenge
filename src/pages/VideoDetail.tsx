import ChannelInfo from '@/components/ChannelInfo';
import RelatedVideos from '@/components/RelatedVideos';
import { useLocation, useParams } from 'react-router-dom';

const VideoDetail = () => {
  const {
    state: {
      video: {
        snippet: { title, channelId, description },
      },
    },
  } = useLocation();
  const { videoId } = useParams();

  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          typeof="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=http://example.com`}
        />
        <div className="p-8">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo channelId={channelId} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={videoId || ''} />
      </section>
    </section>
  );
};

export default VideoDetail;

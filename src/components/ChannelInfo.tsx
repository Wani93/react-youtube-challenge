import { useYoubuteApi } from '@/context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

const ChannelInfo = ({ channelId }: { channelId: string }) => {
  const { youtube } = useYoubuteApi();

  const { data: channel } = useQuery(
    ['channels', channelId],
    () => {
      return youtube.channelDetail(channelId);
    },
    { staleTime: 1000 * 60 * 5 },
  );

  return (
    <div className="flex items-center mt-4 mb-8">
      {channel && (
        <img
          src={channel.thumbnails.default.url}
          alt="thumbnails"
          className="rounded-full w-10"
        />
      )}
      {channel && (
        <span className="ml-2 text-lg font-medium">{channel.title}</span>
      )}
    </div>
  );
};

export default ChannelInfo;

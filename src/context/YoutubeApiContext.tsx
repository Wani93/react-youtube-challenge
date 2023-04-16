import YoutubeClient from '@/api/youtube/YoutubeClient';
import Youtube from '@/api/youtube/Youtube';
import { ReactNode, createContext, useContext } from 'react';

const youtubeClient = new YoutubeClient();
const youtube = new Youtube(youtubeClient);
const YoutubeApiContext = createContext({ youtube });

const YoutubeApiProdiver = ({ children }: { children: ReactNode }) => {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};

const useYoubuteApi = () => {
  return useContext(YoutubeApiContext);
};

export { YoutubeApiContext, YoutubeApiProdiver, useYoubuteApi };

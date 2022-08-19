import React, { createContext, ReactNode, useState } from "react";
import { VideoType } from "../components/Playlist";


type ContextProps = {
    children: ReactNode
}

type ContextType = {
    videos: VideoType[],
    setVideos: (newState: VideoType[]) => void
}

export const PlaylistContext = createContext({} as ContextType);

export default function PlaylistProvider({ children }: ContextProps) {
    const [videos, setVideos] = useState<VideoType[]>([
        {
            id: 'IN4YtOl-AnA',
            creator: 'Nice Guys',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/IN4YtOl-AnA/mqdefault.jpg',
            title: "Ian 80's japan vibes playlist .pt 3",
            url: '//www.youtube.com/watch?v=IN4YtOl-AnA',
        },
        {
            id: '2fJYeOr3b2s',
            creator: 'sasbo',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/2fJYeOr3b2s/mqdefault.jpg',
            title: '[FREE] Isaiah Rashad x Mick Jenkins x Earthgang Type Beat 2022 | Outside',
            url: '//www.youtube.com/watch?v=2fJYeOr3b2s',
        },

        {
            id: 'bPw6I7LEddg',
            creator: 'rasmus beats',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/bPw6I7LEddg/mqdefault.jpg',
            title: '[FREE] EARL SWEATSHIRT // MAC MILLER TYPE BEAT \"PROCAINE\"',
            url: '//www.youtube.com/watch?v=bPw6I7LEddg',
        },
        {
            id: '8IUkz8PD1t8',
            creator: 'rasmus beats',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/8IUkz8PD1t8/mqdefault.jpg',
            title: '[FREE] EARL SWEATSHIRT // NEO SOUL TYPE BEAT \"ÅKANDER\""',
            url: '//www.youtube.com/watch?v=8IUkz8PD1t8',
        },
    ]);

    return <PlaylistContext.Provider
        value={{
            videos,
            setVideos
        }}
    >
        {children}
    </PlaylistContext.Provider>
}
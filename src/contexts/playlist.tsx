import React, { createContext, ReactNode, useEffect, useState } from "react";
import { VideoType } from "../components/Playlist";
import firebase from '../services/firebase';

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
            "id": "KB2I-5hNA0c",
            "title": "Froid - Fantasmas",
            "thumb": "https://i.ytimg.com/vi/KB2I-5hNA0c/hqdefault.jpg",
            "creator": "Froid"
        },
        {
            "id": "2fJYeOr3b2s",
            "creator": "sasbo",
            "thumb": "https://i.ytimg.com/vi/2fJYeOr3b2s/mqdefault.jpg",
            "title": "[FREE] Isaiah Rashad x Mick Jenkins x Earthgang Type Beat 2022 | Outside"
        },
        {
            "id": "OZRYzH0Q0pU",
            "creator": "Men I Trust",
            "thumb": "https://i.ytimg.com/vi/OZRYzH0Q0pU/mqdefault.jpg",
            "title": "Min I Trust - Show me How"
        }

    ]);

    // useEffect(() => {
    //     (async () => {
    //         firebase.firestore().collection('rooms')
    //             .doc('EkiFWwXV4CtnMJK6havD')
    //             .onSnapshot(snapshot => {
    //                 setVideos(snapshot.data()?.playlist);
    //             })

    //     })();
    // }, []);

    // useEffect(() => {
    //     (async () => {
    //         await firebase.firestore().collection('rooms')
    //         .doc('EkiFWwXV4CtnMJK6havD')
    //         .set({
    //             playlist: videos,
    //         })
    //     })();
    // }, [videos])

    return <PlaylistContext.Provider
        value={{
            videos,
            setVideos
        }}
    >
        {children}
    </PlaylistContext.Provider>
}
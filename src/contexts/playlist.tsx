import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
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
    const { query } = useRouter();
    const [videos, setVideos] = useState<VideoType[]>([]);

    // useEffect(() => {
    //     (async () => {
    //         await firebase.firestore().collection('rooms')
    //         .doc(String(query?.id))
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
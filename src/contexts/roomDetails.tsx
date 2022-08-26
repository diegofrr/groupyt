import { useRouter } from "next/router";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { VideoType } from "../components/Playlist";
import firebase from '../services/firebase';
import { UserType } from "./user";

type ContextProps = {
    children: ReactNode
}

type ContextType = {
    roomName: string,
    setRoomName: (newName: string) => void,
    roomId: string,
    setRoomId: (newId: string) => void,
    users: UserType[],
    videos: VideoType[],
    setVideos: (newState: VideoType[]) => void
}

export const RoomDetailsContext = createContext({} as ContextType);

export default function RoomDetailsProvider({ children }: ContextProps) {
    const [videos, setVideos] = useState<VideoType[]>([]);
    const [users, setUsers] = useState<UserType[]>([]);
    const [roomName, setRoomName] = useState('');
    const [roomId, setRoomId] = useState('');

    useEffect(() => {

    })

    return <RoomDetailsContext.Provider
        value={{
            roomId,
            setRoomId,
            setRoomName,
            roomName,
            users,
            videos,
            setVideos
        }}
    >
        {children}
    </RoomDetailsContext.Provider>
}
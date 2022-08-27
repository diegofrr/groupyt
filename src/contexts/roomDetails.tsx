import React, { createContext, ReactNode, useState } from "react";
import { VideoType } from "../components/Playlist";
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
    setUsers: (newUsers: UserType[]) => void,
    videos: VideoType[],
    setVideos: (newState: VideoType[]) => void
}

export const RoomDetailsContext = createContext({} as ContextType);

export default function RoomDetailsProvider({ children }: ContextProps) {
    const [videos, setVideos] = useState<VideoType[]>([]);
    const [users, setUsers] = useState<UserType[]>([]);
    const [roomName, setRoomName] = useState('');
    const [roomId, setRoomId] = useState('');

    return <RoomDetailsContext.Provider
        value={{
            roomId,
            setRoomId,
            setRoomName,
            roomName,
            setUsers,
            users,
            videos,
            setVideos
        }}
    >
        {children}
    </RoomDetailsContext.Provider>
}
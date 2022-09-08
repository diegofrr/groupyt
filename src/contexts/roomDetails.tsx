import React, { createContext, ReactNode, useState } from "react";

import {  RoomContextType, PlaylistVideoType, UserType } from "../components/utils/types";

interface ContextProps {
    children: ReactNode
}

export const RoomDetailsContext = createContext({} as RoomContextType);

export default function RoomDetailsProvider({ children }: ContextProps) {
    const [videos, setVideos] = useState<PlaylistVideoType[]>([]);
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
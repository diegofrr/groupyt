export type UserType = {
    id: string,
    name: string,
    avatarURL: string,
    admin: boolean,
}

export type PlaylistVideoType = {
    id: string,
    title: string,
    creator: string,
    thumb: string,
    addedBy: UserType
}

export type DataType = {
    progress: number,
    videoId: string,
    videos: PlaylistVideoType[],
    time: Date,
}

export type RoomType = {
    roomName: string,
    roomId: string,
    users: UserType[],
    playlist: PlaylistVideoType[],
}

export type RoomContextType = {
    roomName: string,
    setRoomName: (newName: string) => void,
    roomId: string,
    setRoomId: (newId: string) => void,
    users: UserType[],
    setUsers: (newUsers: UserType[]) => void,
    videos: PlaylistVideoType[],
    setVideos: (newState: PlaylistVideoType[]) => void
}

export type UserContextType = {
    user: UserType,
    setUser: (newUser: UserType) => void,
}

export type ModalContextType = {
    modalIsOpen: boolean,
    setModalIsOpen: (newState: boolean) => void,
    modalType: string,
    setModalType: (newState: string) => void,
}

export type LocalCredentials = {
    roomId: string,
    userId: string,
}

export type MessageType = {
    user: UserType,
    message: string,
    id: string,
    created: string,
    createdFormat: string,
}
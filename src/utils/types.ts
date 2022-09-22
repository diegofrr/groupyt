export interface UserType {
    id: string,
    name: string,
    avatarURL: string,
    admin: boolean,
}

export interface PlaylistVideoType {
    id: string,
    title: string,
    creator: string,
    thumb: string,
    addedBy: UserType
}

export interface DataType {
    progress: number,
    videoId: string,
    videos: PlaylistVideoType[],
    time: Date,
}

export interface RoomType {
    roomName: string,
    roomId: string,
    users: UserType[],
    playlist: PlaylistVideoType[],
}

export interface RoomContextType {
    roomName: string,
    setRoomName: (newName: string) => void,
    roomId: string,
    setRoomId: (newId: string) => void,
    users: UserType[],
    setUsers: (newUsers: UserType[]) => void,
    videos: PlaylistVideoType[],
    setVideos: (newState: PlaylistVideoType[]) => void
}

export interface UserContextType {
    user: UserType,
    setUser: (newUser: UserType) => void,
}

export interface ModalContextType {
    modalIsOpen: boolean,
    setModalIsOpen: (newState: boolean) => void,
    modalType: string,
    setModalType: (newState: string) => void,
}

export interface LocalCredentials {
    roomId: string,
    userId: string,
}

export interface MessageType {
    user: UserType,
    message: string,
    id: string,
    created: string,
    createdFormat: string,
}
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, ReactNode, useState } from "react";
import { RoomDetailsContext } from "./roomDetails";

type ContextProps = {
    children: ReactNode
}

export type UserType = {
    id: string,
    name: string,
    avatarURL: string,
    admin: boolean,
}

type ContextType = {
    user: UserType,
    setUser: (newUser: UserType) => void,
}

export const UserContext = createContext({} as ContextType);

export default function UserProvider({ children }: ContextProps) {
    const [user, setUser] = useState<UserType>({} as UserType);

    return <UserContext.Provider
        value={{
            user,
            setUser
        }}
    >
        {children}
    </UserContext.Provider>
}
import React, { createContext, ReactNode, useState } from "react";

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
    const [user, setUser] = useState<UserType>({
        id: '1',
        name: 'diego',
        avatarURL: 'link do avatar',
        admin: true,
    })

    return <UserContext.Provider
        value={{
            user,
            setUser
        }}
    >
        {children}
    </UserContext.Provider>
}
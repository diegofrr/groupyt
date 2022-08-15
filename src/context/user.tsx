import React, { createContext, ReactNode, useState } from "react";

type ContextProps = {
    children: ReactNode
}

type User = {
    name: string,
    avatarURL: string,
}

type ContextType = {
    user: User,
    setUser: (newUser: User) => void,
}

export const UserContext = createContext({} as ContextType);

export default function UserProvider({ children }: ContextProps) {
    const [user, setUser] = useState<User>({
        name: 'diego', avatarURL: 'link do avatar'
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
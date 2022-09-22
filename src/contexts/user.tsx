import React, { createContext, ReactNode, useState } from "react";

import { UserType, UserContextType } from "../components/utils/types";

interface ContextProps {
    children: ReactNode
}

export const UserContext = createContext({} as UserContextType);

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
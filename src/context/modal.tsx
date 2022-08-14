import React, { createContext, ReactNode, useState } from "react";

type ContextProps = {
    children: ReactNode
}

type ContextType = {
    modalIsOpen: boolean,
    setModalIsOpen: (newState: boolean) => void,
}

export const ModalContext = createContext({} as ContextType);

export default function ModalProvider({ children }: ContextProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);

    return <ModalContext.Provider
        value={{
            modalIsOpen,
            setModalIsOpen,
        }}
    >
        {children}
    </ModalContext.Provider>
}
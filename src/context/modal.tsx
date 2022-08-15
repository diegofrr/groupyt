import React, { createContext, ReactNode, useState } from "react";

type ContextProps = {
    children: ReactNode
}

type ContextType = {
    modalIsOpen: boolean,
    setModalIsOpen: (newState: boolean) => void,
    modalType: string,
    setModalType: (newState: string) => void,
}

export const ModalContext = createContext({} as ContextType);

export default function ModalProvider({ children }: ContextProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
    const [modalType, setModalType] = useState<string>('');

    return <ModalContext.Provider
        value={{
            modalIsOpen,
            setModalIsOpen,
            modalType,
            setModalType
        }}
    >
        {children}
    </ModalContext.Provider>
}
import React, { createContext, ReactNode, useState } from "react";

import { ModalContextType } from "../components/utils/types";

interface ContextProps {
    children: ReactNode
}

export const ModalContext = createContext({} as ModalContextType);

export default function ModalProvider({ children }: ContextProps) {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
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
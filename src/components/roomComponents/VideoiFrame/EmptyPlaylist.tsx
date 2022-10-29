// COLOCAR SUGESTÕES DE VÍDEOS PARA O USUÁRIO

import React from "react";

import { EmptyPlaylistContainer } from "./styles";

interface Props {
  heigth: number;
  width: number;
}

export default function EmptyPlaylist({ heigth, width }: Props) {
  return (
    <EmptyPlaylistContainer height={heigth} width={width}>
      Adicione vídeos à sua playlist.
    </EmptyPlaylistContainer>
  );
}

<p align=center>
<img width='300px' src='https://i.imgur.com/EOXaMKs.png' />
</p>
<p align=center>
🚧 Em desenvolvimento...
</p>

### O que é?
O <b>Groupyt</b> é uma plataforma para assistir vídeos do Youtube com os amigos com bate-papo integrado. Após criar uma sala e compartilhar o link com os amigos, todos podem adicionar vídeos à playlist e interagir no chat.

Disponível em: https://groupyt.vercel.app/

ℹ️ Este projeto foi criado como estudo em desenvolvimento front-end, assim, optei por utilizar o Firebase como alternativa ao back-end, o que significa brecha para acesso aos dados trafegados nas mensagens, nome de usuário e nome de sala, visto também que a aplicação não exije autenticação, sendo assim, caso utilize a plataforma, se atente às informações que for fornecer, principalmente no bate-bapo.

### Tecnologias relevantes utilizadas
<a href='https://nextjs.org/'><img src='https://user-images.githubusercontent.com/56923620/187099131-7cde5bf0-6e1f-4e36-b973-794dd9f7af72.png' /></a>
<a href='https://firebase.google.com/'><img src='https://user-images.githubusercontent.com/56923620/187099147-d4beff2b-157c-44cd-a263-54b91257492b.png' /></a>
<a href='https://www.typescriptlang.org/'><img src='https://user-images.githubusercontent.com/56923620/187099152-b827cf48-770b-40e7-b995-a3c8682b145a.png' /></a>
<a href='https://axios-http.com/ptbr/docs/intro'><img src='https://user-images.githubusercontent.com/56923620/187099154-49ef70eb-6ce8-4da3-a43b-5be00413ff75.png' /></a>
<a href='https://styled-components.com/'><img src='https://user-images.githubusercontent.com/56923620/187099155-e30596c7-fd0a-45d9-ab10-a5ad24cbc37e.png' /></a>

### Checklist - à implementar

| Funcionalidades | Regras | Fix e mais |
|:---------------------------------------------------------------------------------------------------------|:---------------|:-------|
| ✔️ Salvar sala e seu usuário no <i>local storage</i> para entrar automaticamente caso atualize a página | ✔️ Mostrar quem foi que adicionou o vídeo à playlist | ✔️ Consertar a ordem das mensagens do chat |
| Admin pode fechar sala | ✔️ Mostrar quantidade de usuários online na sala no modal de entrada | Sincronizar tempo/estado atual do vídeo tocando |
| Fechar sala automaticamente quando não houver usuários online | Não permitir adicionar lives ou vídeos maiores que 10 minutos | Detalhamento da plataforma na Home - INCERTO |
| Sair de uma sala (atualizar também no armazenamento local) | Permitir somente uma sessão de usuário aberta na sala | Recomendar vídeos caso a playlist fique vazia (vídeos mais vistos na plataforma) |
| Admin pode remover vídeos da playlist | Mostrar no chat os usuários que forem entrando | Responsividade em modo paisagem no mobile |
| Admin pode alterar o nome da sala |  | Bloco com usuários online |
| Janela de emojis no chat - INCERTO |  |  |

### Screenshots
#### Criando uma sala
<img width='600px' src='https://user-images.githubusercontent.com/56923620/187014404-e689c33d-fc53-4f4f-b0b1-1caba0242cad.png' />

#### Interface da sala
<img width='600px' src='https://user-images.githubusercontent.com/56923620/187014627-3b229398-10f2-486a-b0c4-cac5f7e8d63d.png' />

#### Sala não encontrada 
<img width='600px' src='https://user-images.githubusercontent.com/56923620/187014662-11b23097-f05d-4ba0-a2ce-eb8a1f65c25a.png' />


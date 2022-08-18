import { VideoType } from "../Playlist";
import { 
    Container,
    Content,
    Thumb,
    VideoInfo
 } from "./styles";

 interface PlaylistProps {
    video: VideoType
 }

 export default function PlaylistVideo({video}: PlaylistProps) {

    return(
        <Container>
            <Content>
                <Thumb src={video.thumb} alt='Video thumb' />
                <VideoInfo>
                    <strong>{video.title}</strong>
                    <span>{video.creator}</span>
                </VideoInfo>
            </Content>
        </Container>
    )

 }
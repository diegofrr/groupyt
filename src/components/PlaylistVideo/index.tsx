import { VideoType } from "../Playlist";
import { 
    Container,
    Content,
    Thumb,
    VideoInfo
 } from "./styles";

 interface PlaylistProps {
    video: VideoType
    playing: boolean
 }

 export default function PlaylistVideo({video, playing}: PlaylistProps) {

    return(
        <Container>
            <Content playing={playing}>
                <Thumb src={video.thumb} alt='Video thumb' />
                <VideoInfo>
                    <strong>{video.title}</strong>
                    <span>{video.creator}</span>
                </VideoInfo>
            </Content>
        </Container>
    )

 }
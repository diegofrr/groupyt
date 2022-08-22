import { VideoType } from "../Playlist";
import {
    Container,
    Content,
    Thumb,
    VideoInfo,
    ThumbContainer,
    
} from "./styles";

interface PlaylistProps {
    video: VideoType
    playing: boolean
}

export default function PlaylistVideo({ video, playing }: PlaylistProps) {

    return (
        <Container>
            <Content playing={playing}>
                <ThumbContainer>
                    <Thumb src={video.thumb} alt='Video thumb' />
                </ThumbContainer>
                <VideoInfo>
                    <strong>{video.title}</strong>
                    <span>{video.creator}</span>
                </VideoInfo>
            </Content>
        </Container>
    )

}
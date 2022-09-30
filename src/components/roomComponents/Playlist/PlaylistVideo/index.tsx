import { PlaylistVideoType } from "../../../../utils/types";
import {
  Container,
  Content,
  Thumb,
  VideoInfo,
  ThumbContainer,
  User,
} from "./styles";

interface PlaylistProps {
  video: PlaylistVideoType;
  playing: boolean;
}

export default function PlaylistVideo({ video, playing }: PlaylistProps) {
  return (
    <Container>
      <Content>
        <ThumbContainer playing={playing}>
          <Thumb src={video.thumb} alt="Video thumb" />
          <User>
            <div>
              <img src={video.addedBy.avatarURL} alt="User avatar" />
              <strong>{video.addedBy.name}</strong>
            </div>
          </User>
        </ThumbContainer>
        <VideoInfo>
          <strong>{video.title}</strong>
          <span>{video.creator}</span>
        </VideoInfo>
      </Content>
    </Container>
  );
}

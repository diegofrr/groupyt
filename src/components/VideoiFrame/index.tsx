import { useCallback, useContext, useRef, useEffect, useState } from "react";
import Youtube, { YouTubeEvent } from 'react-youtube';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { VideoType } from "../Playlist";
import { toast } from 'react-hot-toast';
import {
    Container,
    VideoContainer,
    NotClick,
    ControlsContainer,
    ActionButton,
    CurrentTimeBar,
    BackgroundBar,
    CurrentTimeContainer,
    EmptyVideo,
    ProgressTime,
    VideoInfo,
    SkipVideo,

} from './styles';
import { myColor_100, myColor_200, } from "../../styles/variables";
import { RoomDetailsContext } from "../../contexts/roomDetails";
import { UserContext } from "../../contexts/user";
import { Button, ButtonText } from "../Header/styles";
import { FiSkipForward } from "react-icons/fi";

type DataType = {
    progress: number,
    videoId: string,
    videos: VideoType[],
    time: Date,
}

export default function VideoiFrame() {
    const { videos, setVideos } = useContext(RoomDetailsContext);
    const { user } = useContext(UserContext);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [videoId, setVideoId] = useState<String>('');
    const [video, setVideo] = useState<YouTubeEvent>({} as YouTubeEvent);
    const [progress, setProgress] = useState(0);
    const [intervalID, setIntervalID] = useState({} as any)
    const [videoDuration, setVideoDuration] = useState<number>(0);
    const [videoState, setVideoState] = useState<number>(0);
    const [counter, setCounter] = useState(0);
    const [playlist, setPlaylist] = useState<VideoType[]>([])

    useEffect(() => {
        setVideo({} as YouTubeEvent)
    }, [])

    useEffect(() => {
        if (videos.length > 0) {
            let videoId = videos[0].id;
            setVideoId(videoId);
        }

        setIntervalID(
            setInterval(() => {
                setProgress(video.target?.getCurrentTime());
            }, 1000)
        )
        return clearInterval(intervalID)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [video, videos])

    useEffect(() => {
        function updateDimensions() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        function getDimensions() {
            updateDimensions();
            setCounter(1);
        }
        if (counter < 1) {
            updateDimensions();
            window.addEventListener('resize', getDimensions)
        }
    });

    const handleFinishedVideo = () => {
        if (videos.length > 1) {
            let newList = videos.filter(video => video.id !== videoId);
            setVideos(newList);
            setProgress(0);
        } else {
            setVideo({} as YouTubeEvent)
            setVideos([] as VideoType[])
            toast('Playlist vazia', {
                style: { marginTop: '80px' },
                icon: '😢'
            })
        }

    }

    const getVideo = useCallback(() => {

        const options = {
            height: '350',
            width: width <= 800 ? width - 56 : width * 0.55,
            playerVars: {
                'autoplay': 1,
                'controls': 0,
                'showinfo': 0,
                'rel': 0,
                'disablekb': 1,
                'modestbranding': 1
            },
        }

        return <Youtube
            videoId={videoId as string}
            opts={options}
            onEnd={handleFinishedVideo}
            onStateChange={e => handleStateChange(e)}
            onPlay={handleStartedVideo}
            onReady={e => handleOnReady(e)}
        />
    }, [width, videoId, handleFinishedVideo]);

    const handleOnReady = (e: YouTubeEvent) => {
        setVideo(e);
        e.target?.playVideo();
    }

    const handleCurrentTimeChange = () => {
        video.target?.seekTo(progress);
        video.target?.playVideo();
    }

    const handleStateChange = (e: YouTubeEvent) => {
        setVideoState(e.target?.getPlayerState());
        setVideoDuration(e.target?.getDuration());
    }

    const handleStartedVideo = () => {

    }

    const formatTime = (time: number) => {
        time = Number(time);
        let sec = Number(time.toFixed(0))
        let min = Math.floor(sec / 60)
        let hours = Math.floor(min / 60)

        min = min % 60;
        sec = sec % 60;

        let r = hours >= 1
            ? `${hours}:${applyZero(min)}:${applyZero(sec)}`
            : `${applyZero(min)}:${applyZero(sec)}`

        return r;
    }

    const applyZero = (val: number) => {
        if (val < 10) return `0${val}`;
        return val;
    }

    return (
        <Container>
            <VideoContainer width={width} height={height}>
                {videos.length === 0 ? (
                    <EmptyVideo height={height} width={width}>Adicione vídeos à sua playlist.</EmptyVideo>
                )
                    : (
                        <>
                            {getVideo()}
                            <ControlsContainer>
                                {user.admin && (
                                    <SkipVideo onClick={handleFinishedVideo}>
                                        <FiSkipForward size={16} color={myColor_100} />
                                    </SkipVideo>
                                )}

                                {videoState === 1
                                    ? <ActionButton onClick={() => { }}>
                                        <BsPauseFill size={20} color={myColor_100} />
                                    </ActionButton>
                                    : <ActionButton ref={buttonRef} onClick={() => { }}>
                                        <BsPlayFill size={20} color={myColor_100} />
                                    </ActionButton>}

                                {/* {user.admin && (
                                    <CurrentTimeContainer>
                                        <BackgroundBar
                                            duration={videoDuration as number}
                                            progress={progress}
                                        />
                                        <CurrentTimeBar
                                            type='range'
                                            onChangeCapture={() => video.target?.pauseVideo()}
                                            onClickCapture={handleCurrentTimeChange}
                                            onChange={e => setProgress(Number(e.target.value))}
                                            value={progress} max={video.target?.getDuration()} min={0} />
                                    </CurrentTimeContainer>
                                )} */}

                                <VideoInfo>
                                    <strong>{video.target?.getVideoData()?.author}</strong>
                                    <span>{video.target?.getVideoData()?.title}</span>
                                </VideoInfo>
                                <ProgressTime>
                                    <span>
                                        {formatTime(videoDuration - progress)}
                                    </span>
                                </ProgressTime>
                            </ControlsContainer>
                        </>
                    )}

                <NotClick />
            </VideoContainer>
        </Container>

    )
}

import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Youtube, { YouTubeEvent } from 'react-youtube';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import {
    Container,
    VideoContainer,
    NotClick,
    ControlsContainer,
    ActionButton,
    CurrentTimeBar,
    BackgroundBar,
    CurrentTimeContainer

} from './styles';
import { myColor_100, myColor_300 } from "../../styles/variables";

interface VideoProps {
    videoID: string
}

export default function VideoiFrame(props: VideoProps) {

    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    // getVideoData() pega as informações do video (titulo - autor)
    const [videoId, setVideoId] = useState<String>('');
    const [video, setVideo] = useState<YouTubeEvent>({} as YouTubeEvent);
    const [currentTime, setCurrentTime] = useState<string>('00:00');
    const [progress, setProgress] = useState(0);
    const [intervalID, setIntervalID] = useState({} as any)
    const [videoDuration, setVideoDuration] = useState<number>();
    const [videoState, setVideoState] = useState<number>();
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setVideoId(props?.videoID);
    }, [])

    useEffect(() => {
        function updateDimensions() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        function getDimensions() {
            updateDimensions();
            setCounter(1);
        }
        if(counter < 1) {
            updateDimensions();
            window.addEventListener('resize', getDimensions)
        }
    });

    const getVideo = useCallback(() => {
        return <Youtube
            videoId={videoId as string}
            opts={options}
            onEnd={handleFinishedVideo}
            onStateChange={handleStateChange}
            onPlay={handleStartedVideo}
            onReady={e => handleOnReady(e)}
        />
    }, [width]);

    const options = {
        height: '350',
        width: width <= 800 ? width - 56 : width * 0.6,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'rel': 0,
            'disablekb': 1,
            'modestbranding': 1
        },
    }

    const handleOnReady = (e: YouTubeEvent) => {
        setVideo(e);
        setVideoDuration(e.target.getDuration());
    }

    const handleCurrentTimeChange = () => {
        video.target?.seekTo(progress);
        video.target?.playVideo();
    }

    const handleStateChange = () => {
        setVideoState(video.target?.getPlayerState());
        if (video.target?.getPlayerState() === 1) {
            setIntervalID(
                setInterval(() => {
                    setProgress(video.target?.getCurrentTime());
                    let n = Number(video.target.getCurrentTime())
                    formatTime(n);
                }, 1000)
            )
        } else {
            clearInterval(intervalID)
        }

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

        setCurrentTime(r);

    }

    const applyZero = (val: number) => {
        if (val < 10) return `0${val}`;
        return val;
    }

    const handleStartedVideo = () => {

    }

    const handleFinishedVideo = () => {
        alert('terminou')
    }

    return (
        <Container>
            <VideoContainer width={width} height={height}>
                {getVideo()}
                <ControlsContainer>

                    {videoState === 1
                        ? <ActionButton onClick={() => video.target.pauseVideo()}>
                            <BsPauseFill size={20} color={myColor_100} />
                        </ActionButton>
                        : <ActionButton onClick={() => video.target.playVideo()}>
                            <BsPlayFill size={20} color={myColor_100} />
                        </ActionButton>}

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
                </ControlsContainer>
                <NotClick />
            </VideoContainer>
        </Container>

    )
}

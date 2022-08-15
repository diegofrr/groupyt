import { NextPage } from "next";
import { useEffect, useState } from "react";
import Youtube, { YouTubeEvent } from 'react-youtube';
import {
    Container,
    VideoContainer,
    NotClick,
    ControlsContainer

} from './styles';


interface VideoProps {
    videoID: string
}

export default function VideoiFrame(props: VideoProps) {
    // getVideoData() pega as informações do video (titulo - autor)
    const [videoId, setVideoId] = useState<String>('');
    const [video, setVideo] = useState<YouTubeEvent>({} as YouTubeEvent);
    const [currentTime, setCurrentTime] = useState<string>('00:00');
    const [progress, setProgress] = useState(0);
    const [intervalID, setIntervalID] = useState({} as any)

    useEffect(() => { setVideoId(props?.videoID) }, [])

    const options = {
        height: '400',
        width: '720',
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
    }

    const handleCurrentTimeChange = () => {
        video.target?.seekTo(progress);
        video.target?.playVideo();
    }

    const handleStateChange = () => {
        video.target.setOption({ constrols: 0 })
        let state = video.target?.getPlayerState();
        if (state === 1) {
            setIntervalID(
                setInterval(() => {
                    setProgress(video.target?.getCurrentTime());
                    let n = Number(video.target.getCurrentTime())
                    formatTime(n);
                    console.log('teste')
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
        let n = '' + val;
        if (val < 10) {
            n = `0${val}`;
        }
        return n;
    }

    const handleStartedVideo = () => {
        
    }

    const handleFinishedVideo = () => {
        alert('terminou')
    }

    return (
        <Container>
            <VideoContainer>
                <Youtube
                    videoId={videoId as string}
                    opts={options}
                    onEnd={handleFinishedVideo}
                    onStateChange={handleStateChange}
                    onPlay={handleStartedVideo}
                    onReady={e => handleOnReady(e)}
                />
                <ControlsContainer>
                    <button onClick={() => video.target.playVideo()}>PLAY</button>
                    <button onClick={() => video.target.pauseVideo()}>STOP</button>
                    <input
                        type='range'
                        onChangeCapture={() => video.target?.pauseVideo()}
                        onClickCapture={handleCurrentTimeChange}
                        onChange={e => setProgress(Number(e.target.value))}
                        value={progress} max={video.target?.getDuration()} min={0} />
                </ControlsContainer>
                <NotClick />
            </VideoContainer>
            {currentTime}
            <br />
            {progress}
        </Container>

    )
}

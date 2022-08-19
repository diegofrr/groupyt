import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { Button } from '../Header/styles';
import {
    Container,
    PlaylistHeader,
    AddNewVideo,
    CancelButton,
    VideosContainer,
    VideosContent,
    ActionButtonsContainer,
    ActionButton,
    EmptyPlaylist,


} from './styles';
import { FiPlus, FiXCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { bgColor, myColor_100 } from '../../styles/variables';
import api from '../../services/api';
import PlaylistVideo from '../PlaylistVideo';
import { PlaylistContext } from '../../contexts/playlist';

export type VideoType = {
    id: string,
    title: string,
    creator: string,
    creatorurl: string,
    description: string,
    thumb: string,
    url: string,
}

export default function Playlist() {
    const { videos } = useContext(PlaylistContext);

    const [margin, setMargin] = useState(0);

    const [searching, setSearching] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [exists, setExists] = useState<boolean>(true);
    const [validUrl, setValidUrl] = useState<boolean>(false);

    const getInfo = () => {
        if (videoUrl.trim() === '') {
            alert('url vazia')
            return;
        }

        api.get(`/lookup?url=//${videoUrl}`)
            .then(response => {
                console.log(response.data);
                setSearching(false);
                setVideoUrl('');
                setExists(true)
            })
            .catch(e => console.log(e))

    }

    const handleAddNewVideo = (e: FormEvent) => {
        e.preventDefault();
        setSearching(true);
        if (searching) getInfo();
    }

    return (
        <Container>
            <PlaylistHeader>
                <AddNewVideo activeInput={searching} onSubmit={e => handleAddNewVideo(e)}>
                    <Button type='submit' primary>
                        <FiPlus size={18} color={myColor_100} />
                    </Button>
                    <input
                        placeholder='Cole a URL do vídeo...'
                        tabIndex={-1}
                        type='text'
                        value={videoUrl}
                        onChange={e => setVideoUrl(e.target.value)} />
                    {searching && <CancelButton onClick={() => setSearching(false)} type='button'>
                        <FiXCircle size={16} color='#e06060' />
                    </CancelButton>}
                </AddNewVideo>

                <ActionButtonsContainer>
                    {(margin !== 0 && videos.length !== 0) ? (
                        <ActionButton onClick={() => setMargin(margin < 0 ? margin + 310 : margin)}>
                            <FiChevronLeft size={18} color={bgColor} />
                        </ActionButton>
                    ) : <span></span>}

                    {(margin !== (-310 * (videos.length - 1)) && videos.length !== 0) && (
                        <ActionButton onClick={() => setMargin(margin > -310 * (videos.length - 1) ? margin - 310 : margin)}>
                            <FiChevronRight size={18} color={bgColor} />
                        </ActionButton>
                    )}
                </ActionButtonsContainer>
            </PlaylistHeader>

            <VideosContainer>
                {videos.length === 0
                    ? <EmptyPlaylist>Lista de reprodução vazia...</EmptyPlaylist>
                    : (
                        <VideosContent margin={margin}>
                            {videos.length > 0 && videos.map(video => <PlaylistVideo key={video.id} video={video} />)}
                        </VideosContent>
                    )}
            </VideosContainer>

        </Container>
    )
}
import React, { FormEvent, useEffect, useState } from 'react';
import { Button } from '../Header/styles';
import {
    Container,
    PlaylistHeader,
    AddNewVideo,
    CancelButton

} from './styles';
import { VideoType } from '../SearchVideoModal';
import { FiPlus, FiXCircle } from 'react-icons/fi'
import { myColor_100 } from '../../styles/variables';
import api from '../../services/api';
import SearchVideoModal from '../SearchVideoModal';

export default function Playlist() {

    const [searching, setSearching] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [exists, setExists] = useState<boolean>(true);
    const [video, setVideo] = useState<VideoType>({
        creator: 'Nice Guys',
        creatorurl: '',
        description: '',
        thumb: 'https://i.ytimg.com/vi/oVi5gtzTDx0/mqdefault.jpg',
        title: 'Indie / Bedroom / Pop / Surf Rock - 24/7 Radio - Nice Guys Chill FM',
        url: '//www.youtube.com/watch?v=oVi5gtzTDx0'
    });

    const getInfo = () => {
        if (videoUrl.trim() !== '') {
            api.get(`/lookup?url=//${videoUrl}`)
                .then(response => {
                    console.log(response.data);
                    setSearching(false);
                    setVideoUrl('');
                    setExists(true)
                })
                .catch(e => console.log(e))
                .finally(() => {
                    setExists(false);
                })
        } else {
            alert('campo vazio');
        }
    }

    const handleAddNewVideo = (e: FormEvent) => {
        e.preventDefault();
        setSearching(true);
        if (searching) getInfo();
    }

    return (
        <Container>
            <PlaylistHeader>
                <span>Playlist</span>
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
            </PlaylistHeader>

            {exists && <SearchVideoModal data={video as VideoType} />}

        </Container>
    )
}
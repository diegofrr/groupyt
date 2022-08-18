import React, { FormEvent, useEffect, useState } from 'react';
import { Button } from '../Header/styles';
import {
    Container,
    PlaylistHeader,
    AddNewVideo,
    CancelButton,
    VideosContainer,
    VideosContent,
    ActionButtonsContainer,
    ActionButton

} from './styles';
import { FiPlus, FiXCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { bgColor, myColor_100 } from '../../styles/variables';
import api from '../../services/api';
import PlaylistVideo from '../PlaylistVideo';

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
    const [margin, setMargin] = useState(0);

    const [searching, setSearching] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [exists, setExists] = useState<boolean>(true);
    const [validUrl, setValidUrl] = useState<boolean>(false);
    const [videos, setVideos] = useState<VideoType[]>([
        {
            id: 'oVi5gtzTDx0',
            creator: 'Nice Guys',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/oVi5gtzTDx0/mqdefault.jpg',
            title: 'Indie / Bedroom / Pop / Surf Rock - 24/7 Radio - Nice Guys Chill FM',
            url: '//www.youtube.com/watch?v=oVi5gtzTDx0',
        },
        {
            id: '2fJYeOr3b2s',
            creator: 'sasbo',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/2fJYeOr3b2s/mqdefault.jpg',
            title: '[FREE] Isaiah Rashad x Mick Jenkins x Earthgang Type Beat 2022 | Outside',
            url: '//www.youtube.com/watch?v=2fJYeOr3b2s',
        },

        {
            id: '2fJYeOr3b2s2',
            creator: 'sasbo',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/2fJYeOr3b2s/mqdefault.jpg',
            title: '[FREE] Isaiah Rashad x Mick Jenkins x Earthgang Type Beat 2022 | Outside',
            url: '//www.youtube.com/watch?v=2fJYeOr3b2s',
        },
        {
            id: '2fJYeOr3b2s233',
            creator: 'sasbo',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/2fJYeOr3b2s/mqdefault.jpg',
            title: '[FREE] Isaiah Rashad x Mick Jenkins x Earthgang Type Beat 2022 | Outside',
            url: '//www.youtube.com/watch?v=2fJYeOr3b2s',
        },
        {
            id: '2fJYeOr3b2s23',
            creator: 'sasbo',
            creatorurl: '',
            description: '',
            thumb: 'https://i.ytimg.com/vi/2fJYeOr3b2s/mqdefault.jpg',
            title: '[FREE] Isaiah Rashad x Mick Jenkins x Earthgang Type Beat 2022 | Outside',
            url: '//www.youtube.com/watch?v=2fJYeOr3b2s',
        },
    ]);

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
                    <ActionButton onClick={() => setMargin(margin < 0 ? margin + 310 : margin)}>
                        <FiChevronLeft size={18} color={bgColor} />
                    </ActionButton>

                    <ActionButton onClick={() => setMargin(margin > -300*(videos.length - 1) ? margin - 310 : margin)}>
                        <FiChevronRight size={18} color={bgColor} />
                    </ActionButton>
                </ActionButtonsContainer>
            </PlaylistHeader>

            <VideosContainer>
                <VideosContent margin={margin}>
                    {videos.map(video => <PlaylistVideo key={video.id} video={video} />)}
                </VideosContent>
            </VideosContainer>

        </Container>
    )
}
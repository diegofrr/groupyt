import React, { FormEvent, useContext, useEffect, useState } from 'react';
import firebase from '../../../services/firebase';
import api from '../../../services/api';
import PlaylistVideo from './PlaylistVideo';

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
import { Button } from '../../../components/Header/styles';
import { toast } from 'react-hot-toast';
import { FiPlus, FiXCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { bgColor, myColor_100 } from '../../../styles/variables';
import { PlaylistVideoType } from '../../../utils/types';
import { RoomDetailsContext } from '../../../contexts/roomDetails';
import { UserContext } from '../../../contexts/user';

export default function Playlist() {
    const { videos, setVideos, roomId, roomName } = useContext(RoomDetailsContext);
    const { user } = useContext(UserContext)

    const [margin, setMargin] = useState(0);
    const [searching, setSearching] = useState<boolean>(false);
    const [videoUrl, setVideoUrl] = useState('');
    const [exists, setExists] = useState<boolean>(true);

    useEffect(() => {
        setMargin(0);
        (async () => {
            await firebase.firestore().collection('rooms')
                .doc(roomId)
                .get()
                .then(e => {
                    if (e.data() !== undefined) {
                        firebase.firestore().collection('rooms')
                            .doc(roomId)
                            .set({
                                roomName,
                                playlist: videos,
                            })
                    }
                })
        })();

    }, [videos, roomId, roomName]);

    const idExists = (id: string) => {
        return videos.some(video => video.id === id);
    }

    const getInfo = () => {
        if (videoUrl.trim() === '') {
            toast.error('URL vazia.', { position: 'bottom-center' })
            return;
        }

        api.get(`/lookup?url=//${videoUrl}`)
            .then(response => {
                setSearching(false);
                setVideoUrl('');
                setExists(true);
                let videoId = response.data?.url.split('v=')[1];
                if (!idExists(videoId)) {
                    let newVideo = {
                        id: videoId,
                        title: response.data.title,
                        creator: response.data.creator,
                        thumb: response.data.thumb,
                        addedBy: user,
                    } as PlaylistVideoType;
                    setVideos([...videos, newVideo]);

                } else {
                    alert('Este vídeo já está na playlist')
                }
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
                    {(margin !== 0 && videos?.length !== 0) ? (
                        <ActionButton onClick={() => setMargin(margin < 0 ? margin + 310 : margin)}>
                            <FiChevronLeft size={18} color={bgColor} />
                        </ActionButton>
                    ) : <span></span>}

                    {(margin !== (-310 * (videos?.length - 1)) && videos?.length !== 0) && (
                        <ActionButton onClick={() => setMargin(margin > -310 * (videos?.length - 1) ? margin - 310 : margin)}>
                            <FiChevronRight size={18} color={bgColor} />
                        </ActionButton>
                    )}
                </ActionButtonsContainer>
            </PlaylistHeader>

            <VideosContainer>
                {videos?.length === 0
                    ? <EmptyPlaylist>Lista de reprodução vazia...</EmptyPlaylist>
                    : (
                        <VideosContent margin={margin}>
                            {videos?.length > 0 && videos.map((video: PlaylistVideoType) => <PlaylistVideo key={video.id} video={video} playing={videos[0]?.id === video.id} />)}
                        </VideosContent>
                    )}
            </VideosContainer>

        </Container>
    )
}
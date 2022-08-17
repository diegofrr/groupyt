import React, { } from 'react';
import {Button} from '../Header/styles';
import { 
    Container,
    PlaylistHeader
 } from './styles';
import { FiPlus } from 'react-icons/fi'
import { myColor_100 } from '../../styles/variables';

export default function Playlist() {
    return (
        <Container>
            <PlaylistHeader>
                <span>Playlist</span>
                <Button primary>
                    <FiPlus size={18} color={myColor_100} />
                </Button>
            </PlaylistHeader>
        </Container>
    )
}
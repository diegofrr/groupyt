import React, { useEffect } from 'react';
import {
    Container,
    Content,
    ThumbImage,

} from './styles';

interface VideoProps {
    data: VideoType
}

export type VideoType = {
    title: string,
    creator: string,
    creatorurl: string,
    description: string,
    thumb: string,
    url: string,
}

export default function SearchVideoModal({ data }: VideoProps) {

    useEffect(() => {
        console.log(data)
    })

    return (
        <Container>
            {data.title}
            <Content>
                <ThumbImage
                    alt='Video thumb'
                    src={data.thumb}
                />
            </Content>
        </Container>
    )

}
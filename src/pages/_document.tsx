import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="author" content="Diêgo Ferreira"/>
                    <meta name="keywords" content="youtube, amigos, grupo, videos, assistir" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="description" content="Uma plataforma para assistir vídeos do Youtube em grupo com os amigos" />

                    <link rel='shortcut icon' href="/favicon.png" type="image/png"/> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
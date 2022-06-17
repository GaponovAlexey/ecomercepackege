import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>test component</title>
       <link href="https://fonts.googleapis.com/css?family=Coda:regular,800" rel="stylesheet" /> 
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

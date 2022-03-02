import Head from 'next/head'

import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

import Footer from '../footer'


const Main = ({ children, router }) => {
    return (
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="JrMendoza's homepage" />
          <meta name="author" content="JrMendoza" />
          <meta name="author" content="JrMendoza" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="shortcut icon" href="/favicon2.ico" type="image/x-icon" />
          <meta property="og:site_name" content="Jr Mendoza" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/card.jpg" />
          
          <title>Jr Mendoza | Home</title>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-J6TZ8DDZ7R`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J6TZ8DDZ7R', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
  
        <NavBar path={router.asPath} />
  
        <Container maxW="container.lg" pt={14}>
    
          {children}
          <Footer />
        </Container>
      </Box>
    )
  }
  
  export default Main
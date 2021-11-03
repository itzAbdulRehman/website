import Head from 'next/head'
import NavBar from '../navbar.js'
// import noSsr from '../no-ssr.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog.js'
import Footer from '../footer.js'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>itexpert120&apos;s Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxWidth="container.md" pt={14}>
                <VoxelDog/>
                {children}
            </Container>

            <Footer/>
        </Box>
    )
}

export default Main
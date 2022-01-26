import { Container, Heading, SimpleGrid, Center } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
// import { PostsGridItem } from '../components/grid-item'

// import thumbTerminal from '../public/img/terminal.png'
// import Paragraph from '../components/paragraph'

const Projects = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <Center><p>No Projects Yet</p></Center>

            <SimpleGrid columns={2} gap={6}>
                <Section>
                    {/* ... */}
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects
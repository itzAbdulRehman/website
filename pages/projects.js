import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { ProjectsGridItem } from '../components/grid-item'

// images
import thumbAPO from '../public/img/agriculture_productivity_optimizer/thumb.jpeg'
import thumbSpotify from '../public/img/spotify/spotify.jpg'

const Projects = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={2} gap={6}>
                <Section>
                    <ProjectsGridItem title="Productivity Optimization Engine"
                                      thumbnail={thumbAPO}
                                      link="https://github.com/itzAbdulRehman/Optimization-Production-Engine"
                                      >
                        Build a Predictive Mode so as to suggest the most suitable crops to grow based on the available Climate and Soil conditions.
                    </ProjectsGridItem>
                </Section>
                <Section>
                    <ProjectsGridItem title="Spotify Recommendation Engine"
                                      thumbnail={thumbSpotify}
                                      link="https://github.com/itzAbdulRehman/Spotify-Recommendation-Engine"
                                      >
                        Suggest songs with respect to user interest.
                    </ProjectsGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects
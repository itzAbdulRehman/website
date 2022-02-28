import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { ProjectsGridItem } from '../components/grid-item'

// images
import thumbAPO from '../public/img/agriculture_productivity_optimizer/thumb.jpeg'
import thumbSpotify from '../public/img/spotify/spotify.jpg'
import thumbDashboard from '../public/img/Dashboard/Dashboard.jpg'
import thumbData_Analysis from '../public/img/Data_Analysis/Data_Analysis.jpg'

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
                <Section>
                    <ProjectsGridItem title="PSL DashBoard"
                                      thumbnail={thumbDashboard}
                                      link="https://public.tableau.com/app/profile/abdulrehman.shoukat/viz/PSLDashBoard/Story3"
                                      >
                        An Attractive DashBoard on PSL
                    </ProjectsGridItem>
                </Section>
                <Section>
                    <ProjectsGridItem title="Data Analysis"
                                      thumbnail={thumbData_Analysis}
                                      link="https://github.com/itzAbdulRehman/DevNation-Summerizing-Data"
                                      >
                        Summerizing DevNation Data and performing EDA on Data to give the answers of Investors    
                    </ProjectsGridItem>

                
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects
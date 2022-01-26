import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { ProjectsGridItem } from '../components/grid-item'

// images
import thumbAPO from '../public/img/agriculture_productivity_optimizer/thumb.jpeg'

const Projects = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={2} gap={6}>
                <Section>
                    <ProjectsGridItem id="Productivity-Optimization-Engine" title="Productivity Optimization Engine" thumbnail={thumbAPO}>
                        Agricultural Productivity Optimization Engine
                    </ProjectsGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects
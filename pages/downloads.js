import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/sections'
import { DownloadsGridItem, GridItem } from '../components/grid-item'

import thumbLineageOS from '../public/img/lineageos.png'
import thumbAEX from '../public/img/aex.png'
import thumbAFH from '../public/img/afh.png'

const Downloads = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Downloads
            </Heading>

            <SimpleGrid columns={2} gap={6}>
                <Section>
                    <DownloadsGridItem id="LineageOS-17.1" title="LineageOS 17.1" thumbnail={thumbLineageOS}>
                        Stable LineageOS 17.1 for All Grand Prime Varaints
                    </DownloadsGridItem>
                </Section>
                <Section>
                    <DownloadsGridItem id="AEX-7.3" title="AOSP Extended 7.3" thumbnail={thumbAEX}>
                        Stable AOSP Extended 17.1 for All Grand Prime Varaints
                    </DownloadsGridItem>
                </Section>
                <Section delay={0.2}>
                    <GridItem id="AFH" title="All Downloads" thumbnail={thumbAFH} href="https://androidfilehost.com/?w=files&flid=304928">
                        All Downloads from my AndroidFileHost
                    </GridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Downloads
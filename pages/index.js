import { Container,
         Box,
         Button,
         Heading,
         Icon,
         Link,
         List,
         ListItem,
         Image, 
         useColorModeValue
} from "@chakra-ui/react"
import Layout from "../components/layouts/article"
import Section from "../components/sections"
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from "../components/bio"
import { ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons"
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub
} from 'react-icons/io5'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
    return (
        <Layout>
        <Container>
            
            <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            boxShadow="md" rounded="md"
            >
                Hello, I&apos;m an Aspiring Data Scientist from Pakistan!
            </Box>
            
            <Box display={{md:'flex'}}>
            
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        AbdulRehman
                    </Heading>
                    <p>Python Developer / Data Scientist / Student</p>
                </Box>
                
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full"
                    src="https://avatars.githubusercontent.com/u/87224769?v=4"
                    alt="Profile Photo"
                    />
                </Box>
            
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>Info</p>
                </Heading>
                <Paragraph>
                    AbdulRehman is a student and a passionate developer based in Pakistan
                    with a passion for building whatever digital product he desires. He has a
                    knack for building stuff, from planning to designing all by himself and
                    find a way to solve real-life problems using code. When not online, he
                    loves playing games or capturing pictures. Recently, he is graduated in 
                    Data Science from DevNation.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/projects">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                        My Work
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>Bio</p>
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Born in Bahawalpur, Pakistan.
                </BioSection>
                <BioSection>
                <BioYear>2021</BioYear>
                    Started BS Program in Data Science at Islamia University Bahawalpur. 
                </BioSection>
                <BioSection>
                    <BioYear>
                        Present
                    </BioYear>
                    Studying...
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>I Love</p>
                </Heading>
                <Paragraph>
                    Data Analysis, Data Visualization, Dashboarding, {' '}
                    <Link href="https://www.instagram.com/itz.abdulrehman_786" target="_blank">Photography {' '} <ExternalLinkIcon mx="2px" /></Link>
                    , Gaming
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>On the Web</p>
                </Heading>
                <List>
                <ListItem>
                    <Link href="mailto:itzabdulrehman786@gmail.com" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={EmailIcon} />} >
                                E-Mail
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.github.com/itzAbdulRehman" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />} >
                                @itzAbdulRehman
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/itz.abdulrehman_786" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />} >
                                @itz.abdulrehman_786
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.twitter.com/ItzAbdulRehman" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />} >
                                @ItzAbdulRehman
                            </Button>
                        </Link>
                    </ListItem>
                </List>

            </Section>
        </Container>
        </Layout>
    )
}

export default Page

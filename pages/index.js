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
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

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
            >
                Hello, I&apos;m an Aspiring Developer from Pakistan!
            </Box>
            
            <Box display={{md:'flex'}}>
            
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Zeeshan Ahmad
                    </Heading>
                    <p>Developer / Designer / Student</p>
                </Box>
                
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full"
                    src="https://avatars.githubusercontent.com/u/46527178?v=4"
                    alt="Profile Photo"
                    />
                </Box>
            
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>Work</p>
                </Heading>
                <Paragraph>
                    Zeeshan Ahmad is a student and a passionate developer based in Pakistan
                    with a passion for building whatever digital product he desires. He has a
                    knack for building stuff, from planning to designing all by himself and
                    find a way to solve real-life problems using code. When not online, he
                    loves playing games or capturing pictures. Currently, he is a Bsc Computer
                    Systems Engineering Student at IUB.
                </Paragraph>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>Bio</p>
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Born in Multan, Pakistan.
                </BioSection>
                <BioSection>
                <BioYear>2021</BioYear>
                    Started Bsc Program in Computer Systems Engineering at Islamia University Bahawalpur. 
                </BioSection>
                <BioSection>
                    <BioYear>
                        Present
                    </BioYear>
                    Studying and working as a YouTuber.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>I Love</p>
                </Heading>
                <Paragraph>
                    Programming, Music, {' '}
                    <Link href="https://www.instagram.com/itexpert120" target="_blank">Photography {' '} <ExternalLinkIcon mx="2px" /></Link>
                    , Gaming, Designing UI and UX
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>On the Web</p>
                </Heading>
                <List>
                <ListItem>
                    <Link href="mailto:itexpert120@gmail.com" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={EmailIcon} />} >
                                E-Mail
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.github.com/itexpert120" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />} >
                                @itexpert120
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/itexpert120" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram} />} >
                                @itexpert120
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.twitter.com/itexpert120" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />} >
                                @itexpert120
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://discord.com/users/414721028321837057/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord} />} >
                                Discord
                            </Button>
                        </Link>
                    </ListItem>
                </List>

            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    <p style={{paddingBottom: 5}}>Credits</p>
                </Heading>
                <Paragraph>Huge Thanks to Takuya Matsuyama for Amazing Tutorial
                           on Creating a portfolio using Next.js and sharing his assets.
                </Paragraph>
            </Section>
        </Container>
        </Layout>
    )
}

export default Page

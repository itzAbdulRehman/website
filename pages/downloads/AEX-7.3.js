import {
    Container,
    Link,
    List,
    ListItem,
    UnorderedList,
    SimpleGrid,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, RomImage, Meta } from '../../components/downloads'
  import P from '../../components/paragraph'

  const LineageOS = () => (
    <Layout title="AOSP Extended 7.3">
      <Container>
        <Title>
        AOSP Extended 7.3
        </Title>
        <Center my={6}>
          <RomImage src="/img/aex.png" alt="logo" />
        </Center>
        <P>
        AOSP Extended is an AOSP based ROM which provides stock UI/UX experience with useful customizations. 
        Being based on AOSP it provides a smooth experience. We have added useful customizations from various 
        other open-source projects and have tried to keep our things simple. A ROM by a user, for a user. 
        #BeExtended
        </P>
        <P>
            <br/>Stable builds for Galaxy Grand Prime are available here.
            <br/>Builds are available for the following varaints:
        </P>
        <UnorderedList ml={4} my={4}>
          <ListItem>fortuna3g</ListItem>
          <ListItem>fortunaltedx</ListItem>
          <ListItem>fortunalteub</ListItem>
          <ListItem>fortunave3g</ListItem>
          <ListItem>gprimelte</ListItem>
          <ListItem>gprimeltespr</ListItem>
          <ListItem>gprimeltexx</ListItem>
          <ListItem>gprimeltezt</ListItem>
        </UnorderedList>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Device</Meta>
            <span>Samsung Galaxy Grand Prime</span>
          </ListItem>
          <ListItem>
            <Meta>Android Version</Meta>
            <span>10</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="https://androidfilehost.com/?w=files&flid=321694" target="_blank">
              Link for AFH {' '} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2021/06/01</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>XDA Thread</Center>
        </Heading>
            <Center><Link href="https://forum.xda-developers.com/t/rom-10-0-0_r40-aospextended-rom-v7-3-unofficial.4213931/" target="_blank">
            [ROM][10.0.0_r40] AospExtended ROM V7.3 [UNOFFICIAL]{' '}
              <ExternalLinkIcon mx="2px" /></Link></Center>
            
            
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Screenshots</Center>
        </Heading>

        <SimpleGrid columns={2} gap={2}>
          <RomImage src="/img/aex/1.jpg" alt="AEX" />
          <RomImage src="/img/aex/2.jpg" alt="AEX" />
          <RomImage src="/img/aex/3.jpg" alt="AEX" />
          <RomImage src="/img/aex/4.jpg" alt="AEX" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default LineageOS
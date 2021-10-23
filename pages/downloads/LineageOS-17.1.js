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
    <Layout title="LineageOS 17.1">
      <Container>
        <Title>
          LineageOS 17.1
        </Title>
        <Center my={6}>
          <RomImage src="/img/lineageos.png" alt="logo" />
        </Center>
        <P>
        LineageOS, an open-source Android distribution, is available for 
        several devices, with more being continuously added thanks to the 
        biggest, yet ever growing, Android open-source community.
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
          <ListItem>gprimeltetfnvzw</ListItem>
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
            <Link href="https://androidfilehost.com/?w=files&flid=321629" target="_blank">
              Link for AFH {' '} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2021/04/01</span>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>XDA Thread</Center>
        </Heading>
            <Center><Link href="https://forum.xda-developers.com/t/stable-lineageos-17-1-for-samsung-galaxy-grand-prime-unofficial.4144017/" target="_blank">
              LineageOS 17.1 for Samsung Galaxy Grand Prime{' '}
              <ExternalLinkIcon mx="2px" /></Link></Center>
          
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Screenshots</Center>
        </Heading>
        <SimpleGrid columns={2} gap={2}>
          <RomImage src="/img/lineage/1.jpg" alt="LineageOS" />
          <RomImage src="/img/lineage/2.jpg" alt="LineageOS" />
          <RomImage src="/img/lineage/3.jpg" alt="LineageOS" />
          <RomImage src="/img/lineage/4.jpg" alt="LineageOS" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default LineageOS
import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Esco Lifesciences">
      <Container>
        <Title>
          Esco Lifesciences <Badge>2021</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/works/escolifesciencesThumb.jpg" alt="icon" />
        </Center>
        <P>
        Esco Lifesciences is a world-leading life science company with a diversified portfolio and sales in over 100 countries. As a manufacturer of laboratory and biopharma equipment, and IVF medical devices, Esco offers tailored solutions that fit the needs of laboratories in various industries.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows 2000/XP</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Delphi</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link href="http://odoruinu.net.s3.amazonaws.com/software/amembo/amembo0515123.zip">
              v0.5.15.123
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Last update</Meta>
            <span>2008/03/23</span>
          </ListItem>
          <ListItem>
            <Meta>Manual</Meta>
            <Link href="https://w.atwiki.jp/amembo/">使い方wiki</Link>
          </ListItem>
        </List>
  
        <Heading as="h4" fontSize={16} my={6}>
          <Center>Media coverage</Center>
        </Heading>
  
        <UnorderedList my={4}>
          <ListItem>
            <Link href="https://forest.watch.impress.co.jp/article/2006/01/18/amembo.html">
              <Badge mr={2}>窓の杜</Badge>
              「MSN
              Messenger」と連係して特定ユーザーとP2Pフォルダ共有できる「Amembo」{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </UnorderedList>
  
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/amembo_01.gif" alt="amembo" />
          <WorkImage src="/images/works/amembo_02.gif" alt="amembo" />
        </SimpleGrid>
        <WorkImage src="/images/works/amembo_03.jpg" alt="amembo" />
        <WorkImage src="/images/works/amembo_04.jpg" alt="amembo" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
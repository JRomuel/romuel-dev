import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  Flex,
  Text,
  UnorderedList,
  ListIcon,
  useColorModeValue,
  Grid, 
  GridItem,
  Tooltip
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { RiArrowDropRightFill } from 'react-icons/ri'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import { SiNextdotjs, SiReact, SiLaravel, SiBootstrap, SiChakraui, SiNodedotjs, SiSass } from 'react-icons/si'
import { MdOutlineWavingHand } from 'react-icons/md'
import { griditem } from '../components/grid-item'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import VoxelDogLoader from '../components/voxel-dog-loader'
import dynamic from 'next/dynamic'
const LazyVoxelDog = dynamic(() => import('../components/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})


const Home = () => (
<Layout>
    
      <Box display={{ md: 'flex' }} flexDirection="row-reverse" alignItems="center">

        <LazyVoxelDog />

        <Box flexGrow={1} mb={['20','0', '0']}>
          <Text
            color={useColorModeValue('purple.500', 'purple.200')}
            fontSize={{ base: 'md', md: 'lg' }}
          >Hi, my name is</Text>
          <Heading as="h1" variant="page-title">
            JR Mendoza
          </Heading>
          <Text 
          color={useColorModeValue('gray.700', 'gray.300')}
          mb="5">( Developer / Web Designer )</Text>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<MdOutlineWavingHand />} colorScheme="purple">
              Say Hello
            </Button>
          </NextLink>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" display={'Flex'} gap={2} variant="section-title">
          <Text fontWeight={'normal'} fontSize={'lg'} color={useColorModeValue('purple.500', 'purple.200')}>01. </Text> About Me
        </Heading>
        <Paragraph>
              Hello, I&lsquo;m Romuel, a web developer based on Manila, Philippines who enjoys building things live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel perfect user interfaces with clean design and retina ready display.
        </Paragraph>
        <Paragraph>
              Shortly after graduating from college, I worked as a designer for one and a half year then shift my career as a web developer. I worked on wide variety of interesting and meaningful projects on daily basis.
        </Paragraph>
        <Text mb={5}>
              Here are a few technologies I&lsquo;ve been working with recently
        </Text>

        <Flex gap={4}>
          <Tooltip hasArrow label='Next.js' fontSize='sm'>
            <span><Icon as={SiNextdotjs} w={6} h={6} /></span>
          </Tooltip>
          <Tooltip hasArrow label='React' fontSize='sm'>
            <span><Icon as={SiReact} w={6} h={6} /></span>
          </Tooltip>
          <Tooltip hasArrow label='Laravel' fontSize='sm'>
            <span><Icon as={SiLaravel} w={6} h={6} /></span>
          </Tooltip>
          <Tooltip hasArrow label='Bootstrap' fontSize='sm'>
            <span><Icon as={SiBootstrap} w={6} h={6} /></span>
          </Tooltip>
        
          <Tooltip hasArrow label='ChakraUi' fontSize='sm'>
            <span><Icon as={SiChakraui} w={6} h={6} /></span>
          </Tooltip>
        
          <Tooltip hasArrow label='Node.js' fontSize='sm'>
            <span><Icon as={SiNodedotjs} w={6} h={6} /></span>
          </Tooltip>
        
          <Tooltip hasArrow label='SASS' fontSize='sm'>
            <span><Icon as={SiSass} w={6} h={6} /></span>
          </Tooltip>
      
        </Flex>

        <Box align="center"  my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Checkout my works 
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1984</BioYear>
          Born in Osaka (大阪), Japan.
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Completed the Master&lsquo;s Program in the Graduate School of
          Information Science at Nara Institute of Science and Technology
          (奈良先端科学技術大学院大学情報科学研究科修士課程)
        </BioSection>
        <BioSection>
          <BioYear>2010</BioYear>
          Worked at Yahoo! Japan (ヤフー株式会社入社)
        </BioSection>
        <BioSection>
          <BioYear>2012 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @craftzdog (日本語)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
        </List>

 

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
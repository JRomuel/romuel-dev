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
import Layout from '../components/layouts/indexLayout'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { SiNextdotjs, SiReact, SiLaravel, SiBootstrap, SiChakraui, SiNodedotjs, SiSass, SiUpwork, SiFiverr, SiShopify, SiYahoo } from 'react-icons/si'
import { MdOutlineWavingHand } from 'react-icons/md'
import { griditem } from '../components/grid-item'
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
      
            <Button rightIcon={<MdOutlineWavingHand />} as="a" href="mailto:johnromuelmendoza@yahoo.com" textDecoration="none" colorScheme="purple">
              Say Hello
            </Button>
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
          <Tooltip hasArrow label='Shopify' fontSize='sm'>
            <span><Icon as={SiShopify} w={6} h={6} /></span>
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
        <Heading as="h3" display={'Flex'} gap={2} variant="section-title">
          <Text fontWeight={'normal'} fontSize={'lg'} color={useColorModeValue('purple.500', 'purple.200')}>02. </Text>Bio
        </Heading>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Works as a part-time freelancer
        </BioSection>
        <BioSection>
          <BioYear>2018 to present</BioYear>
          Work as full-time Web developer at Esco Philippines Inc.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at Yazaki Philippines as Designer
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Completed the Bachelor of Science in Computer Engineering
        </BioSection>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Manila, Philippines.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" display={'Flex'} gap={2} variant="section-title">
        <Text fontWeight={'normal'} fontSize={'lg'} color={useColorModeValue('purple.500', 'purple.200')}>03. </Text>On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/JRomuel" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @JRomuel
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/john-romuel-mendoza-95093114a/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @John Romuel Mendoza
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/jrmendoza_09/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @jrmendoza_09
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.upwork.com/freelancers/~0189c8fbe157c392a7" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={SiUpwork} />}
              >
                @John Romuel M.
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.fiverr.com/jrmendoza182" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={SiFiverr} />}
              >
                @jrmendoza
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:johnromuelmendoza@yahoo.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<Icon as={SiYahoo} />}
              >
                johnromuelmendoza@yahoo.com
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
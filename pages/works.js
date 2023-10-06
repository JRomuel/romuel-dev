import { Container, Heading, SimpleGrid, Divider, Flex, Tooltip, Icon } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { SiNextdotjs, SiReact, SiLaravel, SiBootstrap, SiChakraui, SiNodedotjs, SiSass, SiUpwork, SiFiverr, SiShopify, SiYahoo, SiMysql, SiJavascript, SiTailwindcss } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

import thumbEscolifeSciences from '../public/images/works/escolifesciencesThumb2.jpg'
import thumbEscoMedical from '../public/images/works/esco-medical-thumb.jpg'
import thumbEscoPharma from '../public/images/works/esco-pharma-thumb.jpg'
import thumbMyPortfolio from '../public/images/works/my-portfolio-thumb.jpg'
import mechlabsThumb from '../public/images/works/mechlabs-thumb.jpg'
import smartSpaceThumb from '../public/images/works/smart-space.jpg'
import alienArmadaThumb from '../public/images/works/Alien-Armada.jpg'
import earthTechThumb from '../public/images/works/earthTech.jpg'
import hearingTrackerThumb from '../public/images/works/hearing-tracker.jpg'
import oneNaturalwayThumb from '../public/images/works/oneNaturalway.jpg'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h2" fontSize={20} mb={8}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>

        <Section>
          <WorkGridItem title="1 Natural Way App" thumbnail={oneNaturalwayThumb}>
            Web Development
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Laravel' fontSize='sm'>
              <span><Icon as={SiLaravel} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Tailwind' fontSize='sm'>
              <span><Icon as={SiTailwindcss} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='SASS' fontSize='sm'>
              <span><Icon as={SiSass} w={4} h={4} /></span>
            </Tooltip>
        
          </Flex>
        </Section>

        <Section>
          <WorkGridItem link="https://www.hearingtracker.com/" title="Hearing Tracker App" thumbnail={hearingTrackerThumb}>
            Figma Design Conversion
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Next.js' fontSize='sm'>
              <span><Icon as={SiNextdotjs} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Bootstrap' fontSize='sm'>
              <span><Icon as={SiBootstrap} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='SASS' fontSize='sm'>
              <span><Icon as={SiSass} w={4} h={4} /></span>
            </Tooltip>
        
          </Flex>
        </Section>
      <Section>
          <WorkGridItem link="https://earthtech.app/" title="Earthtech Website" thumbnail={earthTechThumb}>
            Web Development
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Laravel' fontSize='sm'>
              <span><Icon as={SiLaravel} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Bootstrap' fontSize='sm'>
              <span><Icon as={SiBootstrap} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='SASS' fontSize='sm'>
              <span><Icon as={SiSass} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Mysql' fontSize='sm'>
              <span><Icon as={GrMysql} w={4} h={4} /></span>
            </Tooltip>
        
          </Flex>
        </Section>
        <Section>
          <WorkGridItem link="https://www.escolifesciences.com/" title="Escolifesciences Website" thumbnail={thumbEscolifeSciences}>
            Web Development
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Laravel' fontSize='sm'>
              <span><Icon as={SiLaravel} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Bootstrap' fontSize='sm'>
              <span><Icon as={SiBootstrap} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='SASS' fontSize='sm'>
              <span><Icon as={SiSass} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Mysql' fontSize='sm'>
              <span><Icon as={GrMysql} w={4} h={4} /></span>
            </Tooltip>
        
          </Flex>
        </Section>
        <Section>
          <WorkGridItem
            link="https://www.esco-medical.com/"
            title="Esco Medical Website"
            thumbnail={thumbEscoMedical}
          >
            CMS development
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Laravel' fontSize='sm'>
              <span><Icon as={SiLaravel} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Bootstrap' fontSize='sm'>
              <span><Icon as={SiBootstrap} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='SASS' fontSize='sm'>
              <span><Icon as={SiSass} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Mysql' fontSize='sm'>
              <span><Icon as={GrMysql} w={4} h={4} /></span>
            </Tooltip>
          </Flex>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            link="https://www.escopharma.com/"
            title="Esco Pharma Website"
            thumbnail={thumbEscoPharma}
          >
            CMS development
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Laravel' fontSize='sm'>
              <span><Icon as={SiLaravel} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Bootstrap' fontSize='sm'>
              <span><Icon as={SiBootstrap} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='SASS' fontSize='sm'>
              <span><Icon as={SiSass} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='Mysql' fontSize='sm'>
              <span><Icon as={GrMysql} w={4} h={4} /></span>
            </Tooltip>
          </Flex>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem link="https://jrmendoza.vercel.app/" thumbnail={thumbMyPortfolio} title="Portfolio Website">
            Personal React Project
          </WorkGridItem>
          <Flex gap={4} justifyContent="center" flexWrap="wrap">
            <Tooltip hasArrow label='Next.js' fontSize='sm'>
              <span><Icon as={SiNextdotjs} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='React' fontSize='sm'>
              <span><Icon as={SiReact} w={4} h={4} /></span>
            </Tooltip>
          
            <Tooltip hasArrow label='ChakraUi' fontSize='sm'>
              <span><Icon as={SiChakraui} w={4} h={4} /></span>
            </Tooltip>
          
        
          </Flex>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Web Design Conversion
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            link="https://mechlabs.ai/"
            thumbnail={mechlabsThumb}
            title="Mechlabs"
          >
            Figma to HTML,CSS
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Bootstrap' fontSize='sm'>
              <span><Icon as={SiBootstrap} w={4} h={4} /></span>
            </Tooltip>
          </Flex>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem link="https://smart-space.vercel.app/" thumbnail={smartSpaceThumb} title="Smart Space">
            Figma to React
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
          <Tooltip hasArrow label='Next.js' fontSize='sm'>
              <span><Icon as={SiNextdotjs} w={4} h={4} /></span>
            </Tooltip>
            <Tooltip hasArrow label='React' fontSize='sm'>
              <span><Icon as={SiReact} w={4} h={4} /></span>
            </Tooltip>
          
            <Tooltip hasArrow label='ChakraUi' fontSize='sm'>
              <span><Icon as={SiChakraui} w={4} h={4} /></span>
            </Tooltip>
          </Flex>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem link="https://jromuel.github.io/Alien-Armada/" thumbnail={alienArmadaThumb} title="Alien-Armada">
            Pure javascript shooting game
          </WorkGridItem>
          <Flex gap={4} flexWrap="wrap" justifyContent="center">
            <Tooltip hasArrow label='Javascript' fontSize='sm'>
              <span><Icon as={SiJavascript} w={4} h={4} /></span>
            </Tooltip>
        
          </Flex>
        </Section>

      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
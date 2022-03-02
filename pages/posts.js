import { Container, Heading, SimpleGrid, Icon } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { FaSmileWink } from 'react-icons/fa'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container mb={20}>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <p>Coming Soon <Icon as={FaSmileWink} w={4} h={4} /></p>

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
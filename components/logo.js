import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/images/logo-new-2.0.svg`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={footPrintImg} width={30} height={30} alt="logo" />
      
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo

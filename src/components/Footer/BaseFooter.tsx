import Link from 'next/link'
import { SocialIcons } from '@components/Nav/SocialBar'
import { routes } from '@lib/config/routes'
import logoImg from '@public/images/logos/kofatoken.png'
import Image from 'next/image'
import { Container } from '@components/UI/Container'
import tw, { styled } from 'twin.macro'
import { config } from '@lib/config/config'
import { ReactElement } from 'react'

const StyledContainer = styled(Container)`
  li {
    ${tw`hover:text-yellow-400`}
  }
`

export const KofaFooterLogo = ({ ...props }) => {
  return (
    <div tw="w-16 h-16 lg:w-10 lg:h-10 relative flex items-center" {...props}>
      <Image src={logoImg} alt="Kofa Logo" />
    </div>
  )
}

interface FooterProps {
  logoComponent?: ReactElement
}

export const BaseFooter = ({ logoComponent, ...props }: FooterProps) => {
  return (
    <StyledContainer
      tw="mt-auto text-sm lg:text-base relative flex justify-between items-center lg:items-end"
      {...props}
    >
      <footer tw="space-y-7 text-coolGray-300 relative w-full lg:w-1/2">
        {/* <KofaFooterLogo tw="lg:hidden absolute top-[-100px]" /> */}
        <nav tw="sm:flex items-center">
          {logoComponent || (
            <Link href={routes.home}>
              <a tw="mr-10 my-auto cursor-pointer">
                <KofaFooterLogo tw="lg:flex items-center" />
              </a>
            </Link>
          )}

          <ul tw="flex justify-start space-x-10 items-end">
            {/* {onClickLogo ? (
              <button
                type="button"
                onClick={onClickLogo}
                tw="my-auto cursor-pointer"
              >
                <KofaFooterLogo tw="hidden invisible lg:flex items-center lg:visible" />
              </button>
            ) : (
              <Link href={routes.home}>
                <a tw="my-auto cursor-pointer">
                  <KofaFooterLogo tw="hidden invisible lg:flex items-center lg:visible" />
                </a>
              </Link>
            )} */}

            <div className="space-y-3 lg:space-y-0">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.whitepaper_pdf}
                >
                  Whitepaper
                </a>
              </li>
            </div>

            <div className="space-y-3 lg:space-y-0">
              {/* <li>
                <Link href={routes.blog}>{t`shared.blog`}</Link>
              </li> */}
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={config.blockchain.contractUrl}
                >
                  Contract
                </a>
              </li>
            </div>
          </ul>
        </nav>

        <div tw="text-left">
          <p>
            Copyright KOFA Token Based on BSC Network © 2021. All rights
            reserved.
          </p>
          <p>
            All other copyrights and trademarks are the property of their
            respective owners.
          </p>
        </div>
      </footer>

      <div tw="hidden lg:flex w-1/2 justify-end text-coolGray-300 z-10 space-x-6 lg:text-4xl">
        <SocialIcons tw="hover:text-cyan-400" />
      </div>
    </StyledContainer>
  )
}

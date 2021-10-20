import { NavSpacer } from '@components/Nav/NavSpacer'
import { Container } from '@components/UI/Container'
import { SquareFrame } from '@components/UI/Frames/SquareFrame'
import { Title } from '@components/UI/Title'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import tw, { styled, theme } from 'twin.macro'
import bgImg from '@public/images/tokenomics_background.webp'
import tokenDistributionImg from '@public/images/token_distribution.png'
import { Fragment } from 'react'

const StyledBackground = styled(Image)`
  ${tw`absolute z-index[-1] bg-contain bg-center bg-no-repeat w-full h-full opacity-[.15]`}
  mix-blend-mode: color-dodge;
  filter: brightness(50%);
`

const tokenStructureItems = [
  {
    label: 'FOR SALE:',
    description: '200B KOFA',
  },
  {
    label: 'HARD CAP:',
    description: '$1.5M',
  },
  {
    label: 'TOKEN:',
    description: 'KOFA',
  },
  {
    label: 'EXCHANGE RATE:',
    description: '1 BNB = 50,000,000 KOFA',
  },
  {
    label: 'PROTOCOL:',
    description: 'BEP20 (BSC)',
  },
]

export const Tokenomics = () => {
  const { t } = useTranslation('home')

  return (
    <>
      <StyledBackground
        src={bgImg}
        tw="bg-top lg:bg-center"
        layout="fill"
        objectFit="contain"
      />
      <NavSpacer tw="hidden lg:block" />

      <Container tw="mt-10 lg:mt-0 mx-auto flex flex-col max-h-full flex-1">
        <div tw="text-center mt-10">
          <Title>{t`tokenomics.title`}</Title>
          <p tw="text-coolGray-300 mt-6 max-w-3xl mx-auto">{t`tokenomics.description`}</p>
        </div>

        <div tw="relative grid-auto-rows[100%] block gap-0 lg:grid lg:gap-10 grid-flow-col grid-cols-[2.5fr 1.5fr] lg:space-x-10 max-h-full flex-1 overflow-hidden pt-10">
          <div tw="overflow-hidden lg:pt-10">
            {/* <Accordion tw="lg:absolute lg:top-0" items={tokenomics} /> */}
            <SquareFrame
              tw="width[100%] lg:mt-0 mx-auto max-w-2xl"
              shadowColor="cyan"
              bgColor={theme`colors.gray.800`}
            >
              <div tw="p-5 grid grid-cols-2 font-mono text-xl font-bold gap-y-3">
                {tokenStructureItems.map((item) => (
                  <Fragment key={item.label}>
                    <div tw="text-cyan-400">{item.label}</div>
                    <div>{item.description}</div>
                  </Fragment>
                ))}
              </div>
            </SquareFrame>
          </div>

          <div tw="mt-20 lg:mt-0 lg:pt-10">
            <SquareFrame
              tw="width[100%] mt-10 lg:mt-0 mx-auto max-w-sm"
              shadowColor="cyan"
              bgColor={theme`colors.gray.800`}
            >
              <div tw="py-4 mx-auto px-4 w-full space-y-4 font-bold text-lg">
                <div>
                  <div tw="text-green-400">50% Public Sale</div>
                  <div tw="text-purple-500">20% Development and Marketing</div>
                  <div tw="text-yellow-400">15% Reserved Funding</div>
                  <div tw="text-cyan-400">15% Reserved Funding</div>
                  <div tw="text-red-400">5% &quot;Bounty&quot; Campaign</div>
                </div>
                <div tw="pt-5 flex items-center justify-center">
                  <Image src={tokenDistributionImg} alt="Token Distribution" />
                </div>
              </div>
            </SquareFrame>
          </div>
        </div>
      </Container>
    </>
  )
}

/* eslint-disable @next/next/no-img-element */
import { Accordion } from '@components/Accordion/Accordion'
import { NavSpacer } from '@components/Nav/NavSpacer'
import { Container } from '@components/UI/Container'
import { Title } from '@components/UI/Title'

const featureList = [
  {
    title: 'Blockchain Strategy',
    description:
      'More than simply build awareness – it’s about cutting through a crowded and hype-driven market with bold campaigns that differentiate quickly.',
  },
  {
    title: 'Tokens and Smart Contracts',
    description:
      'Provide confidence to organizations around the usage of and interaction with blockchain-based applications and smart contracts.',
  },
  {
    title: 'ICO Marketing',
    description:
      'Accelerates growth of start-up companies by offering tools and services that grants exposure to a targeted audience and help generate sales.',
  },
  {
    title: 'Marketing and Promotion Services',
    description:
      'The first version of the KOFA allows business startups to launch and market or promote their services to the required or targeted audience using crowdfunding and ICO campaigns.',
  },
  {
    title: 'Global Payment',
    description:
      'Technology promises to facilitate fast, secure, low-cost international payment processing services through the use of encrypted distributed ledgers that provide trusted real-time verification of transactions.',
  },
]

export const Features = () => {
  return (
    <>
      <NavSpacer tw="hidden lg:block" />

      <div tw="block lg:hidden mt-20 relative w-full h-96">
        <img
          src="/images/platform_bg.png"
          alt="Platform Features"
          tw="w-full h-full absolute object-contain transform ml-4 scale-150"
        />
      </div>

      <Container tw="mx-auto relative flex-1">
        <div tw="text-center mt-10">
          <Title>Platform Features</Title>
          <p tw="text-coolGray-300 mt-6 max-w-3xl mx-auto whitespace-pre-line">
            Our clients – both corporate and private ones – will access all the
            services they need from a single platform. Blockchain technology
            gives us the chance to make your finances grow faster and give
            better returns.
          </p>
        </div>

        <div
          tw="hidden lg:block"
          style={{
            marginRight: -100,
            marginLeft: 100,
          }}
        >
          <img
            src="/images/platform_bg.png"
            alt="Platform Features"
            tw="absolute top-0 transform left-1/2 -translate-x-full z-index[-1] max-h-full xl:max-h-[110%]"
          />
        </div>

        <div tw="block lg:grid gap-10 grid-flow-col grid-cols-[1.5fr 2fr] lg:space-x-10 mt-10">
          <div tw="relative block" />
          <div tw="mt-10">
            <Accordion tw="lg:absolute" items={featureList} />
          </div>
        </div>
      </Container>
    </>
  )
}

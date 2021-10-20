import { NavSpacer } from '@components/Nav/NavSpacer'
import { Button } from '@components/UI/Button'
import { Container } from '@components/UI/Container'
import { Title } from '@components/UI/Title'
import tw, { styled, theme } from 'twin.macro'

import { down } from 'styled-breakpoints'
import { config } from '@lib/config/config'
import { BaseFooter, KofaFooterLogo } from '@components/Footer/BaseFooter'
import { useTimeLeft } from '@lib/hooks/useTimeLeft'
import { routes } from '@lib/config/routes'
import Link from 'next/link'

const StyledBackgroundShape = styled.div`
  ${down('md')} {
    padding-bottom: 75%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 75%);
  }
`

const StyledGeometricBackground = styled.div`
  clip-path: polygon(
    80% 0%,
    100% 0%,
    100% 100%,
    0% 100%,
    0% 70%,
    43% 45%,
    43% 20%
  );

  background: url('/images/bg_landing.png');

  ${tw`bg-right-bottom bg-no-repeat bg-cover absolute w-1/2 right-0 bottom-0 top-0 opacity-40`}
`

interface CountdownItem {
  color: string
  title: string
  date: Date
}

const CountdownItem = ({ date, color, title, ...props }: CountdownItem) => {
  const { TimeComponent, isLive } = useTimeLeft(date)
  // TODOPRESALE:

  return !isLive ? (
    <div
      tw="font-mono letter-spacing[3px] uppercase font-bold space-y-2"
      {...props}
    >
      <p style={{ color }}>{title}</p>
      <TimeComponent />
    </div>
  ) : null
}

const StyledMobileBackgroundBottom = styled.div`
  background: url('/images/bg_landing.png');

  ${tw`opacity-20 lg:hidden absolute bg-right-bottom bottom-0 w-full h-1/2 bg-cover`}
`

interface HomeFooterProps {
  goToStart: () => void
}

export const HomeFooter = ({ goToStart }: HomeFooterProps) => {
  return (
    <>
      <NavSpacer />
      {/* <StyledMobileBackgroundTop /> */}
      <StyledMobileBackgroundBottom />

      <StyledBackgroundShape tw="bg-gray-900">
        <Container tw="h-full flex flex-col justify-center relative">
          <Title tw="mt-32 lg:mt-20 text-left">
            This is just the beginning
          </Title>
          <div tw="flex flex-col items-start lg:flex-row space-y-8 lg:space-y-0 lg:space-x-20 mt-12">
            <CountdownItem
              color={theme`colors.emerald.400`}
              title="ICO ends in"
              date={config.presale_date}
              tw="text-xl lg:min-w-[200px] xl:min-w-[330px] lg:text-xl xl:text-2xl 2xl:text-4xl text-left"
            />
          </div>
          <div tw="flex flex-row items-center justify-start space-y-0 space-x-6 sm:space-x-10 mt-12">
            <Button
              tw="w-full sm:w-auto sm:flex-1 lg:flex-none"
              size="lg"
              targetBlank
              href={config.social.telegram}
              bgColor={theme`colors.cyan.400`}
            >
              Telegram
            </Button>
            <Button
              tw="w-full sm:w-auto sm:flex-1 lg:flex-none"
              size="lg"
              href={config.buy_on.buy_now}
            >
              Buy Now
            </Button>
          </div>

          <p tw="text-right md:text-left mt-8 lg:mt-12">
            {'Contact us '}
            <a href={`mailto:${config.email.info}`}>
              <span tw="text-cyan-400">{config.email.info}</span>
            </a>{' '}
            or{' '}
            <button
              type="button"
              onClick={goToStart}
              tw="underline hidden lg:inline-block"
            >
              go back
            </button>
            <div tw="inline-block lg:hidden">
              <Link href={routes.home} passHref>
                <a tw="underline">go back</a>
              </Link>
            </div>
          </p>
        </Container>
      </StyledBackgroundShape>

      <div>
        <Container tw="relative">
          <button type="button" onClick={goToStart} tw="cursor-pointer">
            <KofaFooterLogo tw="lg:hidden absolute top-[-100px]" />
          </button>
        </Container>
      </div>

      <BaseFooter
        tw="pb-20"
        logoComponent={
          <button
            type="button"
            onClick={goToStart}
            tw="hidden lg:block mr-10 my-auto cursor-pointer"
          >
            <KofaFooterLogo tw="flex items-center lg:visible" />
          </button>
        }
      />

      <StyledGeometricBackground tw="hidden lg:block" />
    </>
  )
}

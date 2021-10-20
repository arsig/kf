import { memo, RefObject, useEffect, useRef } from 'react'
import { theme } from 'twin.macro'
import { gsap } from 'gsap'
import { Container } from '@components/UI/Container'
import { StageItem } from './StageItem'
import { useAppSelector } from '@lib/redux/hooks'
import { squareClipPath } from '@components/UI/Frames/SquareFrame'
import {
  clipPathV1,
  clipPathV3,
  clipPathV4,
} from '@components/UI/Frames/MiniFrames'
import {
  selectAnimationSpeed,
  selectFooterSection,
  selectNavPosition,
  selectStage1Section,
  selectStage2Section,
  selectStage3Section,
} from '@lib/redux/slices/navSlice'
import { LeftArrow, RightArrow } from '@components/UI/Arrow'

const navClipPaths = [clipPathV1, clipPathV3, clipPathV4]

export interface RoadmapNavItemsProps {
  navigate: (index: number) => void
  stageRefs: RefObject<HTMLDivElement>[]
}

const colors = [
  {
    light: theme`colors.blueGray.300`,
    dark: theme`colors.blueGray.300`,
  },
  {
    light: theme`colors.cyan.400`,
    dark: theme`colors.cyan.800`,
  },
  {
    light: theme`colors.purple.400`,
    dark: theme`colors.purple.800`,
  },
  {
    light: theme`colors.red.500`,
    dark: theme`colors.red.800`,
  },
  {
    light: theme`colors.blueGray.300`,
    dark: theme`colors.blueGray.300`,
  },
]

export const stageItems = {
  stage1: {
    title: 'Stage 1',
    name: 'Galaxy',
    subtitle: 'Foundation',
    description:
      'First crucial token and technology foundations and planning development. Building a community and getting people involved.',
    list: [
      'Token Creation',
      'Website Launch',
      'Presale Launch',
      'Whitepaper Launch',
      'Pancakeswap Launch',
      'YouTube Marketing',
      'Road to Binance',
      'CoinMarketCap Listing',
      'CoinGecko Listing',
      'Collaboration with influencers',
    ],
  },
  stage2: {
    title: 'Stage 2',
    name: 'Pendulum',
    subtitle: 'Growth',
    description:
      'The second phase will implement various stages of testing the platform, products utilized by the ecosystem, and assertive marketing.',
    list: [
      'First Third Party Audit',
      'Bitmart Listing',
      'Hotbit Listing',
      'Dex Exchange Launch',
      'ICO LaunchPad',
      'Sub-Project Launch & Airdrop',
      'Profit and Fee Distribution Binance Listing',
    ],
  },
  stage3: {
    title: 'Stage 3',
    name: 'Dimension',
    subtitle: 'Full Decentralization',
    description: 'The third phase will see complete autonomy of the platform.',
    unlocking_in: 'Unlocking in\nQ3 2022\n',
  },
}

export const RoadmapNavItems = memo(
  ({ navigate, stageRefs }: RoadmapNavItemsProps) => {
    const arrowRefs = useRef<(HTMLButtonElement | null)[]>([])

    const animationSpeed = useAppSelector(selectAnimationSpeed)
    const stage1Section = useAppSelector(selectStage1Section)
    const stage2Section = useAppSelector(selectStage2Section)
    const stage3Section = useAppSelector(selectStage3Section)
    const footerSection = useAppSelector(selectFooterSection)
    const navPosition = useAppSelector(selectNavPosition)

    const shouldMorph = navPosition === 'roadmap' || navPosition === 'footer'

    useEffect(() => {
      // Entering Roadmap
      if (shouldMorph) {
        stageRefs.forEach((navItem, index) => {
          navItem.current &&
            gsap.to(navItem.current, {
              ease: 'power2.inOut',
              delay: animationSpeed * 0.85,
              duration: animationSpeed * 0.3,
              height: 80,
            })

          navItem.current &&
            gsap.to(navItem.current, {
              ease: 'linear',
              clipPath: navClipPaths[index],
              delay: animationSpeed,
              duration: animationSpeed * 0.1,
            })
        })

        arrowRefs.current.forEach((arrowItem) => {
          arrowItem &&
            gsap.to(arrowItem, {
              autoAlpha: 1,
              ease: 'power2.inOut',
              delay: animationSpeed * 0.85,
              duration: animationSpeed,
            })
        })
      } else {
        stageRefs.forEach((navItem) => {
          navItem.current &&
            gsap.to(navItem.current, {
              ease: 'power2.inOut',
              delay: animationSpeed * 0.85,
              duration: animationSpeed * 0.3,
              height: 'auto',
            })
          navItem.current &&
            gsap.to(navItem.current, {
              ease: 'linear',
              clipPath: squareClipPath,
              delay: animationSpeed * 0.85,
              duration: animationSpeed * 0.1,
            })
        })

        arrowRefs.current.forEach((arrowItem) => {
          arrowItem &&
            gsap.to(arrowItem, {
              autoAlpha: 0,
              ease: 'power2.inOut',
              duration: animationSpeed,
            })
        })
      }
    }, [
      navPosition,
      animationSpeed,
      stageRefs,
      footerSection.isActive,
      shouldMorph,
    ])

    const activeStageIndex = (() => {
      if (stage1Section.isActive) return 1
      if (stage2Section.isActive) return 2
      if (stage3Section.isActive) return 3
      return null
    })()

    const prevColors = {
      light: colors[(activeStageIndex || 1) - 1].light,
      dark: colors[(activeStageIndex || 1) - 1].dark,
    }
    const nextColors = {
      light: colors[(activeStageIndex || -1) + 1].light,
      dark: colors[(activeStageIndex || -1) + 1].dark,
    }

    const arrowNavigate = (moveForward: boolean) => {
      if (activeStageIndex && moveForward) return navigate(activeStageIndex + 1)
      if (activeStageIndex && !moveForward)
        return navigate(activeStageIndex - 1)
    }

    return (
      <Container tw="mx-auto mt-auto">
        <div tw="flex items-center flex-1 justify-center">
          {/* Left arrows */}

          <LeftArrow
            onClick={() => arrowNavigate(false)}
            refFn={(ref) => arrowRefs.current.push(ref)}
            tw="absolute left-10 flex items-center space-x-0 mr-auto mb-4"
            lightColor={prevColors.light}
            darkColor={prevColors.dark}
          />

          <StageItem
            innerRef={stageRefs[0]}
            item={stageItems.stage1}
            imagePath="/images/stage1_iso.jpg"
            number={1}
            titleColor={theme`colors.blue.300`}
            bgColor={theme`colors.blue.300`}
            navigate={navigate}
            isActive={stage1Section.isActive}
          />
          <StageItem
            innerRef={stageRefs[1]}
            item={stageItems.stage2}
            imagePath="/images/stage2_iso.jpg"
            number={2}
            titleColor={theme`colors.purple.400`}
            bgColor={theme`colors.purple.400`}
            navigate={navigate}
            isActive={stage2Section.isActive}
          />
          <StageItem
            innerRef={stageRefs[2]}
            item={stageItems.stage3}
            imagePath="/images/stage3_iso.jpg"
            number={3}
            navigate={navigate}
            titleColor={theme`colors.red.600`}
            bgColor={theme`colors.red.600`}
            isActive={stage3Section.isActive}
            isLocked
          />

          {/* Right arrow */}
          <RightArrow
            onClick={() => arrowNavigate(true)}
            refFn={(ref) => arrowRefs.current.push(ref)}
            tw="absolute right-10 flex items-center space-x-0 ml-auto mb-4"
            lightColor={nextColors.light}
            darkColor={nextColors.dark}
          />
        </div>
      </Container>
    )
  }
)

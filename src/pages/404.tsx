import { Nav } from '@components/Nav'
import { FullScreen } from '@components/UI/FullScreen'
import { Title } from '@components/UI/Title'
import { routes } from '@lib/config/routes'
import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <>
      <Nav />

      <FullScreen>
        <div tw="m-auto">
          <Title>Error 404</Title>
          <p tw="mt-2 mb-5 uppercase font-mono font-bold letter-spacing[2px]">
            Not found
          </p>
          <Link href={routes.home} passHref>
            <a tw="text-cyan-400 font-medium underline">
              Go back to the home page
            </a>
          </Link>
        </div>
      </FullScreen>
    </>
  )
}

export default NotFoundPage

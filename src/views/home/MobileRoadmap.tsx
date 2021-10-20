import React from 'react'
import { Title } from '@components/UI/Title'
import { Container } from '@components/UI/Container'

export const MobileRoadmap = ({ ...props }) => {
  return (
    <>
      <Container tw="text-center lg:hidden" {...props}>
        <Title>Kofa Roadmap</Title>
        <p tw="text-coolGray-300 mt-6 max-w-3xl mx-auto whitespace-pre-line">
          The ultimate goal of KOFA is to be the all-in-one solution and offer a
          wide array of services from market to finance.
        </p>
      </Container>
    </>
  )
}

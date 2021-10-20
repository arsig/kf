/* eslint-disable @next/next/no-img-element */

export const Logo = () => {
  return (
    <div tw="flex space-x-4 items-center">
      <div tw="w-12 h-12">
        <img
          src="/images/logos/kofatoken.png"
          width={50}
          height={50}
          alt="Logo"
        />
      </div>
    </div>
  )
}

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'

import { Button } from 'component'
import { COLOR_NAME } from 'enum'

const NAVBAR_LINKS = [
  { href: 'components', title: 'Components', id: 'components' },
  { href: 'ui', title: 'UI', id: 'ui' },
  { href: 'about-us', title: 'About Us', id: 'about-us' }
]

const VideoBackground = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        id='background-player'
        className={clsx('min-w-full min-h-full', 'fixed object-fill')}>
        <source src='videos/background-video.mp4' type='video/mp4' />
      </video>
      <div className={clsx('w-full h-full', 'flex justify-center fixed', 'px-12 py-6')}>
        <div className={clsx('w-full', 'flex flex-col')}>
          <nav className={clsx('flex items-center justify-between')}>
            <div className={clsx('flex-1', 'flex gap-2 justify-start')}>
              <Image src='/images/logo_48.png' width={24} height={24} alt='Logo' />
              <h2 className={clsx('text-cyan100 font-semibold')}>Code Constellation</h2>
            </div>
            <ul className={clsx('flex-2', 'flex gap-4 justify-end items-center')}>
              {NAVBAR_LINKS.map(({ id, href, title }) => (
                <Link key={id} id={`link-${id}`} href={href}>
                  <Button color={COLOR_NAME.CYAN} backgroundType='none' className='w-fit !p-0'>
                    {title}
                  </Button>
                </Link>
              ))}
              <input
                className={clsx(
                  'shadow appearance-none border-2 border-cyan500 rounded bg-cyan100',
                  'py-1 px-2',
                  'text-gray900 leading-tight text-lg',
                  'focus:outline-none focus:shadow-outline focus:bg-cyan200'
                )}
                placeholder='Search'
              />
            </ul>
          </nav>
          <div className={clsx('flex min-h-screen flex-col items-center justify-center gap-4')}>
            <p className={clsx('text-6xl font-bold', 'text-cyan300')}>Code Constellation</p>
            <p className={clsx('text-3xl font-semibold', 'text-gray300')}>By Fahad Hussain</p>
            <Button color={COLOR_NAME.CYAN} backgroundType='filled'>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoBackground

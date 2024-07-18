import React from 'react'

import clsx from 'clsx'

export default function Home() {
  return (
    <main className={clsx('flex min-h-screen flex-col items-center justify-center gap-4')}>
      <p className={clsx('text-6xl font-bold', 'text-gray900')}>Code Constellation</p>
      <p className={clsx('text-3xl font-semibold', 'text-gray600')}>By Fahad Hussain</p>
      <button
        className={clsx(
          'bg-cyan500 text-white200',
          'py-2 px-4 rounded-lg',
          'text-lg font-semibold'
        )}>
        Get Started
      </button>
    </main>
  )
}

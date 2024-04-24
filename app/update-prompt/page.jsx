'use client'
import { Suspense } from 'react'
import UpdatePrompt from './UpdatePrompt'
import Loading from './loading'

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <UpdatePrompt />
    </Suspense>
  )
}
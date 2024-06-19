import React from 'react'
import { Suspense } from 'react'

import EventBanner from '@/components/feature/recommendations/EventBanner'
import LastSale from '@/components/feature/recommendations/LastSale'
// import LastSale from '@/components/feature/recommendations/LastSale'
import WeekendSale from '@/components/feature/recommendations/WeekendSale'

export const dynamic = 'force-dynamic'

export default function RecommendationsPage() {
  return (
    <div className="flex flex-col">
      <EventBanner />
      <div className="flex flex-col gap-14 px-5 py-7">
        <Suspense fallback={<p>Loading feed...</p>}>
          <LastSale />
        </Suspense>
        <Suspense fallback={<p>Loading feed...</p>}>
          <WeekendSale />
        </Suspense>
        <div className="border-2">home🏠</div>
      </div>
    </div>
  )
}

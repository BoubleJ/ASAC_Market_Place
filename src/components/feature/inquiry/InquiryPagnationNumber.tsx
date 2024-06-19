import React from 'react'

import { ChevronLeft } from '@/components/icons'
import { ChevronRight } from '@/components/icons'

export default function InquiryPagnationNumber({
  total,
  limit,
  page,
  setPage,
}: {
  total: number
  limit: number
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}) {
  const numPages = Math.ceil(total / limit)

  return (
    <div className="pt-6">
      <nav className="m-16 flex items-center justify-center gap-4">
        <button className="" onClick={() => setPage(page - 1)} disabled={page === 1}>
          <ChevronLeft className=" fill-transparent" width={'1.5rem'} height={'1.5rem'} />
        </button>
        {Array.from({ length: numPages }, (_, i) => (
          <button
          
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? 'page' : undefined}
          >
            {i + 1}
          </button>
        ))}
        <button  onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <ChevronRight className=" fill-transparent" width={'1.5rem'} height={'1.5rem'} />
        </button>
      </nav>
    </div>
  )
}

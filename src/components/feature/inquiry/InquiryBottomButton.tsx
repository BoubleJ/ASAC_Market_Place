import Link from 'next/link'
import React from 'react'

import { basePath } from '@/api/util/instance'
import { Button } from '@/components/ui/button'

export default function InquiryBottomButton() {
  return (
    <div className="fixed bottom-20">
      <Button
        variant={'secondary'}
        className="w-36 border-2 border-gray-100 rounded-lg h-12 ml-9 mr-2.5  text-button-sm "
      >
        카카오톡 문의
      </Button>
      <Button variant={'primary'} className="w-36 border-none rounded-lg h-12 mr-9 ml-2.5  text-button-sm  text-white">
        <Link href={`${basePath}/add-inquiry`}>1:1 문의</Link>
      </Button>
    </div>
  )
}

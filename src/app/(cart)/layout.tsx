import Script from 'next/script'

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="mx-auto flex h-[100dvh] max-w-[1024px] flex-col items-center divide-y-8 divide-grayscale-50 bg-white text-grayscale-700">
        {children}
      </main>
      <Script src="https://cdn.iamport.kr/v1/iamport.js" />
    </>
  )
}

export default layout

import { poppins } from '@/utils/fonts'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className={`${poppins.variable} font-poppins`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

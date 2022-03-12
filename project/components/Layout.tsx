import { HomeIcon, CashIcon } from '@heroicons/react/outline'
import { ReactNode, VFC } from 'react'
import { HeaderItem } from './HeaderItem'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  children: ReactNode
  title: string
}
export const Layout: VFC<Props> = ({
  children,
  title = 'Welcome to Nextjs',
}) => {
  return (
    <>
      {/* <div className="bg-no-repeat bg-center bg-guku-image md:bg-auto sm:bg-cover flex flex-col items-center text-sm font-mono h-800"> */}

      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <header>
          <div>
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="CASH" Icon={CashIcon} />
          </div>
          {/* <nav className="w-screen">
            <div className="flex items-center h-14 pl-40">
              <div className="flex space-x-4">
                <Link href="/">
                  <a
                    data-testid="home-nav"
                    className="duration-1000 hover:rotate-360 text-3xl px-3 py-2"
                  >
                    Home
                  </a>
                </Link>
                <Link href="/expenses">
                  <a
                    data-testid="home-nav"
                    className="duration-1000 hover:rotate-360 text-3xl px-3 py-2"
                  >
                    Expenses
                  </a>
                </Link>
              </div>
            </div>
          </nav> */}
        </header>
      </div>

      <div className="bg-no-repeat bg-center bg-guku-image md:bg-auto sm:bg-cover flex flex-col items-center text-sm font-mono h-800"></div>
      {/* <main className="flex flex-1 flex-col justify-center items-center w-screen"> */}
      <main>{children}</main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by noir
        </a>
      </footer>
    </>
  )
}

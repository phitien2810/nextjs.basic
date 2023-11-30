import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { Button } from './Button'
import { Icon } from './Icon'

export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Learn how to build a personal website using Next.js" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                />
                <link href="./fontawesome/css/all.min.css" rel="stylesheet" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
            />
            <header className="sticky top-0 left-0 w-full bg-white h-[67px] m-0 p-4 flex items-center">
                <img src="/images/profile.jpg" className="h-[24px]" />
                <div className="flex-1" />
                <Button title="Login" className="mx-4 uppercase" />
                <Icon icon="fa-solid fa-bars" onClick />
            </header>

            <main>
                {children}
                {children}
                {children}
                {children}
                {children}
                {children}
                {children}
            </main>

            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </>
    )
}

import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="px-4 bg-gray-50 mx-auto md:w-[960px] flex flex-col-reverse md:flex-row md:items-center jutify-center gap-4">
                <div className="px-4 flex flex-col jutify-center group">
                    <div className="group-hover:text-red-500 text-[36px] text-center">Part#1:We are building the</div>
                    <div className="text-[36px] text-cyan-800 text-center">Future of Finance</div>
                    <div className="text-[13px] text-gray-400 text-center">
                        Bridging the gap between DeFi and TradFi via the adoption of regulation and technology.
                    </div>
                    <svg
                        className="hover_red w-8 h-8"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_464_5170)">
                            <path
                                d="M6.6665 16H25.3332"
                                stroke="#03B2B8"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 21.3333L25.3333 16"
                                stroke="#03B2B8"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M20 10.6666L25.3333 16"
                                stroke="#03B2B8"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_464_5170">
                                <rect width="32" height="32" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="px-4 flex flex-col jutify-center bg-gray-200">
                    <div className="text-[36px] text-center">Part#2</div>
                    <div className="text-[36px] text-cyan-800 text-center">Future of Finance</div>
                    <div className="text-[13px] text-gray-400 text-center">
                        Bridging the gap between DeFi and TradFi via the adoption of regulation and technology.
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

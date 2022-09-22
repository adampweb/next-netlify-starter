import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
    return (
        <div className="container">
            <Head>
                <title>About us</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="About us" />
                <p className="description">
                    Lorem ipsum dolor sit amet
                </p>
            </main>

            <Footer />
        </div>
    )
}
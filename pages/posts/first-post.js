import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
    <Head>
      <title>First Page</title>
    </Head>
    <h1>First page</h1>
    <h2>
      <Link href="/" >
        <a>return home</a>
      </Link>
    </h2>
    </Layout>
  )
}
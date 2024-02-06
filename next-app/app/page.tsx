// import Image from 'next/image'
import variables from './variables.module.scss'
import Layout from './components/layout'


export default function Home() {
  return (
    <main>
      <Layout>
        <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
      </Layout>
    </main>
  )
}

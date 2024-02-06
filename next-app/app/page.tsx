// import Image from 'next/image'
import variables from './variables.module.scss'
import Layout from './components/layout'

import Container from 'react-bootstrap/Container'


export default function Home() {
  return (
    <main>
      <Layout>
        <Container>
          <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
        </Container>
      </Layout>
    </main>
  )
}

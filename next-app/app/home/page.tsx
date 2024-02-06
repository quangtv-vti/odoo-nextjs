import Container from 'react-bootstrap/Container';

import Layout from '../components/layout';

const Home = () => {
    return (
        <Layout>
            <Container>
                <h1>Welcome to the Home Page</h1>
                <div className='pt-3'>
                    this is a sample homepage
                </div>
            </Container>
        </Layout>
    )
}


export default Home;
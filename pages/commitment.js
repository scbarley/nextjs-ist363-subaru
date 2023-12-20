import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';


const commitmentPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">
                Our Commitiment 
            </Heading>
            <Paragraph>
                green earth            
            </Paragraph>
        </Container>
    </Layout>
}
export default commitmentPage;
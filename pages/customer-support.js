import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';


const customerSupportPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">
                Support?
            </Heading>
            <Paragraph>
                boo hoo 
            </Paragraph>
        </Container>
    </Layout>
}
export default customerSupportPage;
import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';


const ownersPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">
                Owners
            </Heading>
            <Paragraph>
                Simon
            </Paragraph>
        </Container>
    </Layout>
}
export default ownersPage;
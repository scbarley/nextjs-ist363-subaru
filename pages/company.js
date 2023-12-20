import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';


const companyPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">
                our comapny
            </Heading>
            <Paragraph>
                subaru sizzle
            </Paragraph>
        </Container>
    </Layout>
}
export default companyPage;
import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';


const contactPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">
                Hit us up
            </Heading>
            <Paragraph>
                You may use credit or debit, cash a check, and cash if youre baller.
            </Paragraph>
        </Container>
    </Layout>
}
export default contactPage;
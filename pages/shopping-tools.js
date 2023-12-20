import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';


const shoppingToolsPage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">
                Shopping Tools
            </Heading>
            <Paragraph>
                You may use credit or debit, cash a check, and cash if youre baller.
            </Paragraph>
        </Container>
    </Layout>
}
export default shoppingToolsPage;
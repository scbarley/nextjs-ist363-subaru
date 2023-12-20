import Container from '../components/Container';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';


const buildPricePage = () => {
    return <Layout>
        <Container>
            <Heading level={1} textAlign="center">
                Build and price
            </Heading>
            <Paragraph>
                Looking to buy a subaru or car or SUV? Customize and save today
            </Paragraph>
        </Container>
    </Layout>
}
export default buildPricePage;
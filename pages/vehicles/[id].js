import Layout from '../../components/Layout';
import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';

//WATERFALL
//1. get static paths
export async function getStaticPaths() {
    const vehicles = getAllVehicleSlugs();``
    const paths = vehicles.map((vehicle) => {
        const { slug } = vehicle.node;
        return {
            params: {
                id: slug
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
//2. get static props
export async function getStaticProps ({ params }) {
    const vehicleData = getVehicleBySlug(params.id);

    return {
        props: {
            vehicleData
        }
    }
};
// 3. page component
const SingleVehiclePage = ({ vehicleData }) => {
    const { model, price } = vehicleData;
    return <Layout>
        <h1>{model}</h1>
        <h2>${price}</h2>
    </Layout>
};
export default SingleVehiclePage;
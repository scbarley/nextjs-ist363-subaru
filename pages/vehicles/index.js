import Container from '../../components/Container';
import FilterBar from '../../components/FilterBar';
import Grid from '../../components/Grid';
import Layout from '../../components/Layout';
import { useState } from 'react';


import { getAllVehicles, getVehicleTypes } from '../../lib/api';

export async function getStaticProps() {
    const vehicles = await getAllVehicles();
    const vehicleTypes = await getVehicleTypes();

    //add "all" to vehicle Types
    vehicleTypes.unshift({
        "node": {
            "name": "All",
            "slug": "all"
        }
    });

    return {
        props: {
            vehicles,
            vehicleTypes
        }
    }
}

const VehiclesPage = ({ vehicles, vehicleTypes })  => {
    //state variable, setter function
    const [activeVehicleType, setActiveVehicleType] = useState('all');

    // filter vehicles by activeVehicletype
    const filteredVehicles = activeVehicleType !== 'all' ? 
        vehicles.filter((vehicle) => {
            const { vehicleTypes } = vehicle.node;
            const vehicleTypeSlugs = vehicleTypes.edges.map((vehicleType) => {
                return vehicleType.node.slug;
            });
        return vehicleTypeSlugs.includes(activeVehicleType);
    }) 
    : 
    vehicles;


    return <Layout>

        <h1>Vehicles</h1>
        <Container>
            
            <FilterBar 
                items={vehicleTypes} 
                activeItem={activeVehicleType}
                setActiveItem={setActiveVehicleType}
            />

            <Grid 
                items={filteredVehicles} 
            />
            
        </Container>
    </Layout>
};
export default VehiclesPage;
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import noresults from '../assets/images/noresults.jpeg';

import { fetchApi, baseUrl } from '../utils/fetchApi';


const Search = (properties ) => {
    const[searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <Box>
            <Flex cursor="pointer" 
            bg="gray.100"
            borderBottom="1px"
            borderColor="gray.200"
            p="2"
            fontWeight="bold"
            justifyContent="center"
            alignItems="center" 
            onClick={() => setSearchFilters((prevFilters) => !prevFilters)}>
                
                <Text> Search properties</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter}></Icon>
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSixe="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {properties.map ((property) => <Property property={property} key={property.id} /> )}
            </Flex>
            {properties.length === 0 && (
                <Flex justifyContent="center" alignItems="center" flexDirection="column" marginBottom="5" marginTop="5">
                    <Image alt="Home Alone" src={noresults}></Image>
                    <Text fontSize="2xl" marginTop="3">...Uh oh. Please refine your search parameters and try again.  </Text>
                </Flex>
            )}
        </Box>
    )
}

export default Search;

export async function getServerSideProps(query) {
    const purpose = query.purpose || "For Sale";
    const city = query.city || "city"
    const postal_code = query.postal_code || "Zip code"
    const radius = query.radius || "Radius";
    const age_min = query.age_min || "Minimum age of home"
    const age_max = query.age_max || "Maximum age of home"
    const sqft_min = query.sqft_min || "Minimum square footage"
    const sqft_max = query.sqft_max || "Maximum square footage"
    const baths_min = query.baths_min || "Mimimum number of bathrooms"
    const baths_max = query.baths_max || "Maximum number of bathrooms"
    const price_min = query.price_min || "Minimum price"
    const price_max = query.price_max || "Maximum price"
    const lot_sqft_min = query.lot_sqft_min || "Minimum lot size "
    const lot_sqft_max = query.lot_sqft_max || "Maximum lot size"
    const features = query.features || "Additional features. (pool, etc.)";

    const data = await fetchApi(`${baseUrl}/properties/list-for-sale?state_code=TX&purpose=${purpose}&city=${city}&postal_code=${postal_code}&radius=${radius}&age_min=${age_min} &age_max=${age_max}&sqft_min=${sqft_min}&sqft_max=${sqft_max}&baths_min=${baths_min}&baths_max=${baths_max}&price_min=${price_min}&price_max=${price_max}&lot_sqft_min=${lot_sqft_min}&lot_sqft_max=${lot_sqft_max}&features=${features}`)



    return {
        props: {
            properties: data?.hits
        }
    }
    }
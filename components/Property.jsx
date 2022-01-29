import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar, Img } from '@chakra-ui/react';
import { FaBed, FaBath,} from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { GiFootprint } from 'react-icons/gi'
import millify from 'millify';

import haHouse from '../assets/images/haHouse.jpeg'

// const houseUrl = property.photo

const Property = ({property: { address, photo, price, beds, baths, prop_status, property_id, sqft }}) => (
    <Link href={`/property/${property_id}`} passhref>
        <Flex flexwrap= "wrap" w="420px" p="5" paddingTop="2" justifyContent="flex-start" cursor="pointer">
            <Box>
                <hr />
                {/* <Image src={defaultImage} height={260} width={400} alt="houseimage" ></Image> */}
                <img src={photo} alt={haHouse} height="260" width="500"></img>
                <Text fontSize="16" fontWeight="bold" >{address}</Text>
            <Box w="full">
                <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                    <Flex alignItems="center">
                        <Box color="green.400">{prop_status && <GoVerified />}
                        <Text fontWeight="bold" fontSize="lg">{price}</Text>
                        
                        </Box>
                    </Flex>
                    <Box>
                        {/* <Avatar size="sm" src={}></Avatar> */}
                    </Box>
                </Flex>
                <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                    <FaBed /> {beds} <br />
                    <FaBath /> {baths}
                    <GiFootprint /> {sqft}
                </Flex>
            </Box>
            
            </Box>
        </Flex>
    </Link>
)

export default Property
import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath} from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({property: { address, photo, price, beds, baths, prop_status, property_id}}) => (
    <Link href={`/property/${property_id}`} passhref >
        {address}
    </Link>
)

export default Property
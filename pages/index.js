import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property'
import { baseUrl, fetchApi } from '../utils/fetchApi'

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text> 
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) {
  console.log(propertiesForSale, propertiesForRent)
  return (
    <Box>
      <Banner 
        purpose= "BUY A HOME" 
        title1= "Find, Buy, and Own Your"
        title2="Dream Home"
        desc1="Explore Homes"
        desc2="And More"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/EV6jRKJD2UVGDqvHDyV96XTHmqY=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/NXJYC2ST7ZAVLPVARFAONDU6IU.jpg"
      />


        <Flex flexWrap="wrap">
          {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>

      <Banner 
        purpose= "RENT A HOME" 
        title1= "Rental Homes For"
        title2="Everyone"
        desc1="Explore Apartments, Homes"
        desc2="And More"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://ap.rdcpix.com/c81265ffee49528f4e0e1a454e9c4748l-m504515002xd-w640_h480_q80.jpg"
      />

          {/* {propertiesForRent.property.map((property) => <Property property={property} key={property.id} />)} */}
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list-for-sale?city=Corinth&state_code=TX&purpose=for-sale`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list-for-rent?city=Corinth&state_code=TX&purpose=for-rent`)

  return {
    props: {
      propertiesForSale: propertyForSale,
      propertiesForRent: propertyForRent
    }
  }
}

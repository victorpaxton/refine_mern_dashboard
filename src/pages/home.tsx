import { useList } from '@pankod/refine-core';
import { Typography, Box, Stack } from '@pankod/refine-mui';

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from '../components';

const home = () => {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />
        <PieChart
          title="Properties for Rent"
          value={546}
          series={[60, 40]}
          colors={['#fd8539', '#e4e8ef']}
        />
        <PieChart
          title="Total Customer"
          value={5732}
          series={[500, 600]}
          colors={['#2ed480', '#e4e8ef']}
        />
        <PieChart
          title="Total City"
          value={90}
          series={[500, 600]}
          colors={['#fe6d8e', '#e4e8ef']}
        />
      </Box>

      <Stack
        mt="25px"
        width="100%"
        gap={4}
        direction={{ xs: 'column', lg: 'row' }}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default home;

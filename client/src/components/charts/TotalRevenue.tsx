import React from 'react';

import ReactApexChart from 'react-apexcharts';
import { ArrowCircleDownRounded } from '@mui/icons-material';

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';
import { Box, Stack } from '@mui/system';
import { Typography } from '@pankod/refine-mui';

const TotalRevenue = () => {
  return (
    <Box
    p ={4}
    flex={1}
    display="flex"
    flexDirection="column"
    id = "chart"
    borderRadius="15px"
    bgcolor={'#fcfcfc'}
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d" >
        Total Revenue 
      </Typography>
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="#11142d">$236,535</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleDownRounded sx={{
            fontSize: 25,
            color: '#475be8',
              }} />
              <Stack>
              <Typography fontSize={15} fontWeight={600} color="#475be8">-2.5%</Typography>
              <Typography fontSize={12} fontWeight={600} color="#808191">Than last Month</Typography>
              </Stack>
        </Stack>
      </Stack>

      <ReactApexChart
      series={TotalRevenueSeries}
      type="bar"
      height={310}
      options={TotalRevenueOptions}
      />
    </Box>
  )
}

export default TotalRevenue
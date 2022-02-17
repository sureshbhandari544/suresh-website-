import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import K from '../../assest/computer.jpg';
import Container from '@mui/material/Container';
import Cards from '../cards/Cards';
import './Home.css';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
   <Container className='words'>
 <Box >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
        <Item><img className="office" src={K} height={"200px"} width={"260px"} /></Item>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Item className='words'>The grid system is implemented with the Grid component:

It uses CSS's Flexible Box module for high flexibility.
There are two types of layout: containers and items.
Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
Items have padding to create the spacing between individual items.
There are five grid breakpoints: xs, sm, md, lg, and xl.
Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by
 the component when the viewport width satisfies the breakpoint constraints.<br></br>Fluid grids
Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically.

Basic grid
Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component.
</Item>
        </Grid>
      
      </Grid>
    </Box>
<Cards />
</Container>
  );
}

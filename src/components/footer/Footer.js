import React from 'react'
import Container from '@mui/material/Container';
import { ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import './Footer.css';

const Footer = () => {
  return (
    <div>
<Container fluid>
<Box className='footer' sm={12} sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)' }}>
  <ListItem >Home</ListItem >
  <ListItem >Btn</ListItem >
  <ListItem>Header</ListItem > 
<ListItem >Home</ListItem >
  <ListItem >Btn</ListItem >
  <ListItem>Header</ListItem >
</Box>
</Container>
</div>
  )
}

export default Footer;
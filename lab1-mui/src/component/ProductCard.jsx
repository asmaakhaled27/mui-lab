import React from 'react'


import { Box, Button, Divider, Paper, Rating, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
const ProductCard = () => {
  return (
    <Box container sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }} >
    <Typography variant="h3" component="h3">
 ProductCard
</Typography>
<Paper elevation={3} size="small"  sx={{ mt: 8, p: 4 }}>
<img src="/src/assets/product.jpg" alt="Product Image" style={{ width: '444px', height: 'auto' }} />
<Typography variant="h5" component="h5">
 Elegant bag
</Typography>
<Rating name="size-large" defaultValue={4} size="large" />
<Button variant='contained' color='success'  sx={{ mt: 1 , width: '100%' , borderRadius: '16px' }}>
    In Stock
    </Button>
<Typography variant="body1" component="p">
  $49.99
</Typography>
<Divider sx={{ mt: 2, mb: 2 }} />
<Button variant="contained" color="primary" fullWidth> Add to Cart</Button>
</Paper>
</Box>
  )
}

export default ProductCard;

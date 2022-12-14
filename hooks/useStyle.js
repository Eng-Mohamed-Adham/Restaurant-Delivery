

//Cards
import {
    Stack,
    Grid,
    IconButton,
    
    
    } from '@mui/material'
    
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Typography from '@mui/material/Typography';
    import { Button, CardActionArea, CardActions } from '@mui/material';
    
    
    import AddIcon from '@mui/icons-material/Add';
    import RemoveIcon from '@mui/icons-material/Remove';
    import EuroIcon from '@mui/icons-material/Euro';
    import ButtonGroup from '@mui/material/ButtonGroup';

    //redux elments
    import {useDispatch,useSelector} from 'react-redux'



    import {
        useAppDispatch,
        useAppSelector
    }from '../store/apphooks';


import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';







    import {useEffect} from 'react'

    //Actions Of fetchOffers
import {incrementDessert,decrementDessert} from '../store/fetchdatadessert' 

//AddOrder Action for orderSlice
import { addorder } from '../store/orderslice';


function useStyle(getData,selectData,increment,decrement) {


            //Dispatch Fetch Data from API 
            const dispatchel = useAppDispatch()

            const  dipatchev= useDispatch()
            //Get Data From Fetch Data Offers
             const {
                 data,
                 pending,
                 error,
             } = useAppSelector(selectData)
     
             //orders
             const dispatchOrder = useDispatch()
       
     
     
             useEffect(()=> {
                 dispatchel(getData())
                 
             },[])
     
     
     
         
             //Dipatch Add Order To OrderSlice
             const handelOrder =(post ) => {
                 dispatchOrder(addorder(post))
             }
        
             

  return (
    
    <Grid 
    container
    rowSpacing='4'
    columnSpacing='xs:2,sm:4,md:4'
    direction='row'
    justifyContent='center'
    alignItems='center'
    gap='20px'
    item xs={2} sm={4} md={4}
    spacing='3'
    my={4}
    sx={{
        marginTop:'50px'
    }}

    >

       

        { pending | error ?
                <Grid
                container
                rowSpacing='4'
                columnSpacing='xs:2,sm:4,md:4'
                direction='row'
                justifyContent='center'
                alignItems='center'
                gap='20px'
                item xs={2} sm={4} md={4}
                spacing='3'
                my={4}
                sx={{
                    marginTop:'50px'
                }}
                 >
                    <Card sx={{ maxWidth: 345,height:'350px', }} >
                        <Box  sx={{ width: 210, marginRight: 0.5, my: 5 }}>

                            <Skeleton  variant="rectangular" width={210} height={118} />

                        </Box>
                    </Card>
                    <Card sx={{ maxWidth: 345,height:'350px', }} >
                        <Box  sx={{ width: 210, marginRight: 0.5, my: 5 }}>

                            <Skeleton  variant="rectangular" width={210} height={118} />

                        </Box>
                    </Card>
                    <Card sx={{ maxWidth: 345,height:'350px', }} >
                        <Box  sx={{ width: 210, marginRight: 0.5, my: 5 }}>

                            <Skeleton  variant="rectangular" width={210} height={118} />

                        </Box>
                    </Card>
                </Grid>
                  


            : data.map((post,id) => (
                <Card sx={{ maxWidth: 345,height:'350px', }} key={id} >
                  
                
                    <CardMedia
                        component="img"
                        height="140"
                        image={post.imgPath}
                        alt={post.label}
                    />
                      <Typography gutterBottom variant="h6" component="p" color='error' sx={{fontWeight:'700',maxWidth:'345px'}}>
                            {post.label}
                    </Typography>
                    <CardActionArea>

                    
                    <Typography variant='h5' sx={{fontSize:'20px',fontWeight:'600'}}>{post.price * post.count}Euro</Typography>
                    

                    <CardContent>
                        <Typography gutterBottom sx={{fontSize:'13px'}} component="p">
                            {post.info}
                        </Typography>
                    
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="large"  color="error"  variant="contained" onClick={() => handelOrder(post)}  >
                        Order
                    </Button>
                <ButtonGroup color = 'error'  variant="contained" onClick={() => dipatchev(increment(id))}>

                    <IconButton color = 'error'  > 
                            <AddIcon sx={{marginLeft:'5px',marginRight:'5px', }} />
                            
                    </IconButton>
                    </ButtonGroup>

                    <ButtonGroup color='error'  variant ="contained" onClick={() => dipatchev(decrement(id))} >

                    <IconButton  color='error'   >
                            <RemoveIcon sx={{marginLeft:'0px',marginRight:'5px', }} />
                            
                    </IconButton>
                    </ButtonGroup>

                    
                        
                    </CardActions>
            </Card>
            ))
            

        } 


    
    </Grid>

  )
}

export default useStyle

import {  Box, Button, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized:React.FC = () => {
    const navigate = useNavigate()
    const toVideos = () => {
        navigate("/videos")
    }
    const toProducts = () => {
        navigate("/products")
    }

    return (
        <Box>
            <h1>Un autherized user</h1>
            <Button onClick={()=>{navigate("/login")}}>Login</Button>
            <Stack spacing={1} width={"180px"}>
            <Button variant="contained" onClick={() => toVideos()}>
              Videos
            </Button>
            <Button variant="contained" onClick={() => toProducts()}>
              Products
            </Button>
            </Stack>

        </Box>
    );
};

export default Unauthorized;
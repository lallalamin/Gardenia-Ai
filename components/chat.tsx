'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useChat } from 'ai/react';
import React, { useState, useRef } from "react";

import {
  Box,
  Stack,
  Typography,
  Button,
  Modal,
  TextField,
} from "@mui/material";

import NavBar from "../components/NavBar"

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });


  return (
    <div>
    <NavBar></NavBar>
    <Box
    sx={{
      backgroundImage: 'url("green-leaves-back.png")',
      backgroundSize: '500px',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top right",
      bgcolor: "#E4F2EA",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      overflow: "scroll",
    }}
    >
      <Typography variant='h2' fontWeight={'500'} display={'inline'} textAlign={'center'}  sx={{
    background: 'linear-gradient(90deg, #97D3CD, #4CAF50)', // Light green gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>
        Gardenia Plant Buddy
      </Typography>
      <Stack width={"500px"} height={"700px"} bgcolor={'white'} border={'20px shadow black'} borderRadius={'50px'} overflow={'auto'} spacing={2} textAlign={'center'} padding={"50px"} paddingTop={"20px"}>
        {messages.map(message => (
            <div key={message.id}>
            <Box sx={{borderRadius:'25px', backgroundImage: 'url("lime-wall-test.jpg")', backgroundRepeat:'no-repeat', border:'5px', padding: '20px'}}>
            {message.role === 'user' ? 'User: ' : 'AI: '}
            {message.content}
            </Box>
          </div>

        ))}
      </Stack>

      <form onSubmit={handleSubmit}>
        <TextField name="prompt" placeholder='Type prompt here...' value={input}  onChange={handleInputChange} sx={{bgcolor: 'white', marginBottom:'10px', minHeight: '20px'}}/>
        <Button type='submit' variant="contained" sx={{bgcolor: '#4CAF50', marginLeft:'20px','&:hover': {backgroundColor: 'lime', color: 'black'}}}>
          Submit
        </Button>
      </form>
      </Box>
      </div>
    
  );
}
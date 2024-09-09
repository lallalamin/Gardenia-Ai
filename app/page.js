"use client"
import Image from "next/image";
import { AppBar, Container, Toolbar, Typography, Button, Box, Grid, Card, CardActions, CardContent, Divider } from "@mui/material"
//import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PlaceIcon from '@mui/icons-material/Place';
import StarBorderIcon from '@mui/icons-material/StarBorder';


export default function Home() {
  return (
  <main> 
    <NavBar/>
      <Head>
        <title>BrainCards</title>
        <meta name="description" content="Create flashcard from your text"></meta>
      </Head>
      <div id='header' style={{ height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#2D5652' }}>
        <Box sx={{textAlign: 'center', backgroundColor: 'white', height: '70vh', paddingTop: '50px', borderRadius: '20px', padding: '70px 20px'}}>
          <div className="welcome-bg">
            <Typography className="welcome-title" variant="h3" component="h1" gutterBottom>
              Grow with Confidence
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Your Smart Garden Guide for Healthier, Happier Plants.
            </Typography>
          </div>
          <Button className="button-white" variant="contained" color="primary" sx={{ mt: 2, mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#e2e2e2',}, }} href="/generate">
            Get Started
          </Button>
          <Button className="button-blue" variant="outlined" color="primary" sx={{ mt: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#1565C0',}, }}>
            Learn More
          </Button>
        </Box>
        <div>
          <img 
              src="\plant.png" 
              width="500px" 
              style={{ padding: '0 50px 50px 0' }} 
            />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', margin:'250px' }}>
        <Container style={{ display: 'flex' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img 
              src="\chat.png" 
              width="600px" 
              style={{ padding: '0 50px 50px 0' }} 
            />
          </div>
          <div>
            <Typography sx={{ fontWeight: 600 }} variant="h4" component="h2" gutterBottom>
              Talk with your personal assistant
            </Typography>
            <Typography sx={{ fontSize: '18px', color: '#616060', marginBottom: '65px' }}>
              Unlock powerful features designed to boost your learning! From customizable flashcards 
              and spaced repetition to rich media integration and progress tracking, our tools are 
              built to help you study smarter and achieve more.
            </Typography>
          </div>
        </Container>
      </div>

      <Container className="feature-box" id="About">
        <Box sx={{my: 6}}>
          <Typography  sx={{ fontWeight: 600 }} variant="h4" component="h2" gutterBottom>Features</Typography>
          <Typography sx={{ fontSize: '18px', color: '#616060', marginBottom: '65px'}}>
                {' '}
                Unlock powerful features designed to boost your learning! From customizable flashcards 
                and spaced repetition to rich media integration and progress tracking, our tools are 
                built to help you study smarter and achieve more.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <AutoFixHighIcon></AutoFixHighIcon>
              <Typography variant="h6" sx={{ fontWeight: 750 }}>Easy Text Input</Typography>
              <Typography variant="h6" sx={{ fontSize: '18px', color: '#616060'  }}>
                {' '}
                Simply input your text and let our software do the rest. 
                Creating flashcards has never be easier
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <PsychologyIcon></PsychologyIcon>
              <Typography variant="h6" sx={{ fontWeight: 750 }}>Smart Flashcards</Typography>
              <Typography variant="h6" sx={{ fontSize: '18px', color: '#616060'  }}>
                {' '}
                Our AI intelligently break down your text into concise
                flashcards, great for studying
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <PlaceIcon></PlaceIcon>
              <Typography variant="h6" sx={{ fontWeight: 750 }}>Accessible Anywhere</Typography>
              <Typography variant="h6" sx={{ fontSize: '18px', color: '#616060'  }}>
                {' '}
                Access your flashcards from any device, at any time.
                Study on the go with ease.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Box sx={{ my: 6, textAlign: 'center'}}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }} id="Pricing" gutterBottom>
        Pricing
      </Typography>
      <Typography variant="h6" component="h2" sx={{ marginBottom: '30px' }}>
        Choose the plan that fits your study needs!
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{maxWidth: '800px', margin: '0 auto'}}>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              width: '100%',
              height: 350,
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Typography variant="h6" gutterBottom>
                Basic
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                Free
              </Typography>
              <Typography variant="body2" component="div" sx={{ color: 'grey.600' }}>
                / month
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Access basic flashcard features
              </Typography>
              <Typography variant="body1">• Limited storage</Typography>
            </div>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#FFCDD2',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#FFABAB',
                },
              }}
            >
              GET START
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              width: '100%',
              height: 350,
              p: 3,
              border: '1px solid',
              borderColor: 'grey.300',
              borderRadius: 2,
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <Typography variant="h6" gutterBottom>
                Pro
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                $5
              </Typography>
              <Typography variant="body2" component="div" sx={{ color: 'grey.600' }}>
                / month
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" sx={{ mb: 1 }}>
                • Unlimited storage
              </Typography>
              <Typography variant="body1">• Unlimited flashcard</Typography>
              <Typography variant="body1">• Priority support</Typography>
            </div>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                fontSize: '12px',
                backgroundColor: '#1E88E5',
                color: '#FFF',
                '&:hover': {
                  backgroundColor: '#1565C0',
                },
              }}
            >
              <StarBorderIcon></StarBorderIcon>
              UPGRADE TO PRO
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    </main>
    );
}

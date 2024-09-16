"use client"
import Image from "next/image";
import { AppBar, Container, Toolbar, Typography, Button, Box, Grid, Card, CardActions, CardContent, Divider } from "@mui/material"
//import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Head from "next/head";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PlaceIcon from '@mui/icons-material/Place';
import StarBorderIcon from '@mui/icons-material/StarBorder';


export default function Home() {
  return (
  <main> 
    <NavBar></NavBar>
      <Head>
        <title>GardeniaAi</title>
        <meta name="description" content="Create flashcard from your text"></meta>
      </Head>
      <div id='header' style={{ height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#2D5652' }}>
        <Box sx={{textAlign: 'center', backgroundColor: 'white', height: '70vh', paddingTop: '50px', borderRadius: '20px', padding: '70px 20px'}}>
          <div className="welcome-bg">
            <Typography className="welcome-title" variant="h3" component="h1" gutterBottom>
              Grow with <Typography className="welcome-title" variant="h3" component="span" sx={{
    background: 'linear-gradient(90deg, #97D3CD, #4CAF50)', // Light green gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}>Confidence
            </Typography>
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Your Smart Garden Guide for Healthier, Happier Plants.
            </Typography>
          </div>

          <Button className="button-white" variant="contained" color="primary" sx={{ mt: 2, mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#e2e2e2',}, }} href="/inventory">
            Get Started
          </Button>
          <Button className="button-blue" variant="outlined" color="primary" sx={{ mt: 2, backgroundColor: '#2D5652', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#1565C0',}, }}>
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
            Unlock powerful capabilities to manage your garden hands-free! With voice 
            recognition, interact with your assistant to identify plants, diagnose issues, 
            and receive tailored care advice effortlessly.
            </Typography>
          </div>
        </Container>
      </div>

      <Container className="feature-box" id="About">
        <Box sx={{my: 6}}>
          <Typography  sx={{ fontWeight: 600 }} variant="h4" component="h2" gutterBottom>Features</Typography>
          <Typography sx={{ fontSize: '18px', color: '#616060', marginBottom: '65px'}}>
                {' '}
                Unlock powerful tools designed to simplify your gardening! From plant identification and issue 
                diagnosis to tracking care routines, our assistant helps both beginners and experts manage their 
                gardens with ease.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <AutoFixHighIcon></AutoFixHighIcon>
              <Typography variant="h6" sx={{ fontWeight: 750 }}>Real-Time Plant Identification</Typography>
              <Typography variant="h6" sx={{ fontSize: '18px', color: '#616060'  }}>
                {' '}
                Simply describe the plant or take a photo, and your assistant will 
                provide instant identification and recommendations.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <PsychologyIcon></PsychologyIcon>
              <Typography variant="h6" sx={{ fontWeight: 750 }}>Hands-Free Problem Solving</Typography>
              <Typography variant="h6" sx={{ fontSize: '18px', color: '#616060'  }}>
                {' '}
                Voice-activated diagnostics make it easy to check for pests, diseases, 
                or watering issues without lifting a finger.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <PlaceIcon></PlaceIcon>
              <Typography variant="h6" sx={{ fontWeight: 750 }}>Personalized Care Updates</Typography>
              <Typography variant="h6" sx={{ fontSize: '18px', color: '#616060'  }}>
                {' '}
                Ask your assistant about your plant care schedule, and receive real-time 
                updates on watering, fertilizing, or pruning tasks.
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
        Choose the plan that fits your garden needs!
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{maxWidth: '800px', margin: '0 auto'}}>
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              width: '100%',
              height: 450,
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
                • Access basic inventory and plant advising features
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>• Plant identification and care suggestions</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>• 10 Plants in inventory</Typography>
            </div>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#96D3CC',
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
        <Grid item xs={12} sm={6} md={6}>
          <Box
            sx={{
              width: '100%',
              height: 450,
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

              <Typography variant="body1" sx={{ mb: 1 }}>• Detailed state-of-the-art plant growth guidance, tips, and advising</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>• Manage unlimited plants</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>• Advanced diagnostics for plant issues</Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>• Priority support</Typography>
            </div>
            <Button
              variant="contained"
              sx={{
                mt: 2,
                fontSize: '12px',
                backgroundColor: '#2D5652',
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

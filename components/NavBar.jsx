import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function CustomAppBar() {
    return (
        <AppBar position="static" className="nav-bar" sx={{ backgroundColor:'#2D5652'}}>
            <Toolbar className="tool-bar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="\logo.png" width="50px"></img>
                    <Typography className="logo-title" component="a" href="/" variant="h6" sx={{  textDecoration: 'none', color: 'white', paddingLeft: '10px'}}>
                        GardeniaAI
                    </Typography>
                </div>
                <div>
                    <Button color="inherit" href="#Pricing" className="nav-item" sx={{ color:'white'}}>Pricing</Button>
                    <Button color="inherit" href="#About" className="nav-item" sx={{ color:'white'}}>About</Button>
                    <Button color="inherit" href="/resources" className="nav-item" sx={{ color:'white'}}>Community</Button>
                    <Button color="inherit" href="/contact" className="nav-item" sx={{ color:'white'}}>Contact</Button>    
                </div>
                <div>
                    <SignedOut>
                        <Button color="inherit" href="/sign-up" className="button-white" sx={{ mr: 2, backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#e2e2e2',}, }}>Sign Up</Button>
                        <Button color="inherit" href="/sign-in" className="button-blue" sx={{ mr: 2, backgroundColor: '#2E46CD', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#1565C0',}, }}>Login</Button>
                    </SignedOut>
                    <SignedIn>
                    <Button color="inherit" href="/inventory"  sx={{ mr: 2, border:'1px solid black', backgroundColor: 'white', color: 'black', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#e2e2e2',}, }}>Inventory</Button>
                        <Button color="inherit" href="/chatbot" sx={{ mr: 2, background: 'linear-gradient(45deg, #4CAF50, #81C784)', color: 'white', fontWeight: 600, borderRadius: '10px', padding: '5px 15px 5px 15px', marginLeft: '10px','&:hover': {backgroundColor: '#1565C0',}, }}>Growth Buddy</Button>
                        <UserButton />
                    </SignedIn>
                </div>
                
            </Toolbar>
        </AppBar>
    );
}
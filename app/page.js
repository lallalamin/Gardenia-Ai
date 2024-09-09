"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/NavBar"
import { Box, Typography, Stack, Button, TextField, Grid, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete as DeleteIcon } from '@mui/icons-material';
import { firestore } from "/firebase";
import { collection, deleteDoc, doc, getDocs, query, setDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  gap: 3,
  flexDirection: 'column',
};

export default function Home() {
  const [inventory, setinventory] = useState([]);
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      await setDoc(docRef, { quantity: quantity + 1});
    } else {
      await setDoc(docRef, { quantity: 1});
    }
    await updateInventory();
  };

  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { quantity } = docSnap.data();
      if (quantity === 1) {
        await deleteDoc(docRef);
      } else {
        await setDoc(docRef, { quantity: quantity - 1 });
      }
    }
    await updateInventory();
  };

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, "inventory"));
    const docs = await getDocs(snapshot);
    const pantryList = [];
    docs.forEach((doc) => {
      pantryList.push({ name: doc.id, quantity: doc.data().quantity});
    });
    setinventory(pantryList);
  };

  const filteredPantry = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    updateInventory();
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Box>
        <Box width="100vw" height="100vh" display="flex" justifyContent="center" alignItems="center" gap={2} flexDirection="column">
          <Typography variant="h5"  textAlign="center" fontWeight="bold">
            Enter your plant baby
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
            <TextField
              id="outline-basic"
              label="Add plant"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            
            <Button variant="contained" onClick={() => { addItem(itemName); setItemName(''); handleClose(); }} sx={{ backgroundColor: '#96D3CC' }}>
              Add
            </Button>
          </Box>
          <Box >
            <Box width="800px" height="80px" bgcolor="#96D3CC" display="flex" justifyContent="center" alignItems="center" sx={{borderRadius: "20px"}}>
              <Typography variant="h6" color="#ffffff" textAlign="center" fontWeight="bold">
                Your Plant Inventory
              </Typography>
            </Box>
            <Box display="flex" justifyContent="flex-end" mt={2} mb={1}>
              <TextField
                label="Search for plant"
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ marginRight: 2 }} // Adjust margin as needed
              />
            </Box>
            <Stack width="800px" height="300px" spacing={2} overflow="auto">
              <Grid item xs={12} md={6}>
                <List dense>
                  {filteredPantry.map(({ name, quantity }) => (
                    <ListItem key={name} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", background: "#E5F2E9", marginBottom: "5px", borderRadius: "10px"}}>
                      <ListItemText
                        primary={<Typography variant="body1" sx={{ color: '#333' }}>{name.charAt(0).toUpperCase() + name.slice(1)}</Typography>}
                        secondary={`Quantity: ${quantity}`}
                      />
                      <IconButton edge="end" aria-label="delete" onClick={() => removeItem(name)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

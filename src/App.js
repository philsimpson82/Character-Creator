import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import CreationForm from './components/CreationForm';

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Button
        variant='outlined'
        startIcon={<AddIcon />}
        onClick={handleOpen}
        sx={{ m: 1}}
      >
        Create Character
      </Button>
      <Divider />
      {/*Character list component goes here
         Character detail component and route goes here */}
      <CreationForm openModal={open} closeModal={handleClose} />
    </div>
  );
}

export default App;

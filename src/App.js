import { Button, Divider } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
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
      <CreationForm openModal={open} closeModal={handleClose} />
    </div>
  );
}

export default App;

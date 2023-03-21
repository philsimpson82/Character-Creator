import { useState } from 'react';
//import { Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Modal, TextField, Button, Box, Container, MenuItem, FormControl} from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import { LEVELS, RACES, CLASSES, GENDER } from '../app/shared/CHARACTEROPTIONS';
import { positions } from '@mui/system';

const CreationForm = () => {
    const charLevels = LEVELS;
    const charRaces = RACES;
    const charClasses = CLASSES;
    const charGender = GENDER;

    return (
        <>
            <Formik>
                <Box
                    component='form'
                    noValidate
                    autoComplete='off'
                >
                        <TextField 
                            required
                            id='outlined-required'
                            label='Character Name'
                            sx={{ m: 1, width: '50ch' }}
                        />
                        <TextField 
                            required
                            id='outlined-select-required'
                            select
                            label='Level'
                            defaultValue='1'
                            helperText='Starting Level'
                            sx={{ m: 1, width: '10ch' }}
                        >
                            {charLevels.map((level) => (
                                <MenuItem key={level.value} value={level.value}>
                                    {level.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField 
                            required
                            id='outlined-select-required'
                            select
                            label='Race'
                            defaultValue='Select'
                            sx={{ m: 1, width: '25ch' }}
                        >
                            {charRaces.map((race) => (
                                <MenuItem key={race.label} value={race.label}>
                                    {race.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField 
                            required
                            id='outlined-select-required'
                            select
                            label='Gender'
                            defaultValue='Select'
                            sx={{ m: 1, width: '25ch' }}
                        >
                            {charGender.map((gender) => (
                                <MenuItem key={gender.label} value={gender.label}>
                                    {gender.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField 
                            required
                            id='outlined-select-required'
                            select
                            label='Class'
                            defaultValue='Select'
                            sx={{ m: 1, width: '25ch' }}
                        >
                            {charClasses.map((charClass) => (
                                <MenuItem key={charClass.label} value={charClass.label}>
                                    {charClass.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    <TextField
                        required
                        fullWidth
                        id='outlined-multiline-static'
                        label='Background'
                        multiline
                        rows={5}
                        defaultValue='Write your background story.'
                        sx={{ m: 1 }}
                    />
                    <TextField />
                    <TextField />
                    <TextField />
                    <TextField />
                    <TextField />
                    <TextField />
                    <TextField />
                </Box>
            </Formik>
        </>
    );
}

export default CreationForm;
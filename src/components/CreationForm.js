import { useState } from 'react';
//import { Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Modal, TextField, Button, Box, Container, MenuItem, FormControl, FormGroup} from '@mui/material';
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
                    <FormGroup row>
                        <TextField 
                            required
                            id='outlined-required'
                            label='Character Name'
                            defaultValue='Enter Name'
                            sx={{ m: 1, width: '30ch' }}
                        />
                        <TextField 
                            required
                            id='outlined-select-required'
                            select
                            label='Level'
                            defaultValue='1'
                            sx={{ m: 1, width: '8ch', justifyContent: 'flex-end' }}
                        >
                            {charLevels.map((level) => (
                                <MenuItem key={level.value} value={level.value}>
                                    {level.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormGroup>
                    <FormGroup row>
                        <TextField 
                            required
                            id='outlined-select-required'
                            select
                            label='Race'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
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
                            label='Class'
                            defaultValue='Select'
                            sx={{ m: 1, width: '14ch' }}
                        >
                            {charClasses.map((charClass) => (
                                <MenuItem key={charClass.label} value={charClass.label}>
                                    {charClass.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField 
                            required
                            id='outlined-select-required'
                            select
                            label='Gender'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
                        >
                            {charGender.map((gender) => (
                                <MenuItem key={gender.label} value={gender.label}>
                                    {gender.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormGroup>
                    <FormGroup row>
                        <TextField
                            required
                            id='outlined-select-required'
                            select
                            label='Strength'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
                        >
                        </TextField>
                        <TextField
                            required
                            id='outlined-select-required'
                            select
                            label='Dexterity'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
                        >
                        </TextField>
                        <TextField
                            required
                            id='outlined-select-required'
                            select
                            label='Constitution'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
                        >
                        </TextField>
                        <TextField
                            required
                            id='outlined-select-required'
                            select
                            label='Intelligence'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
                        >
                        </TextField>
                        <TextField
                            required
                            id='outlined-select-required'
                            select
                            label='Wisdom'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
                        >
                        </TextField>
                        <TextField
                            required
                            id='outlined-select-required'
                            select
                            label='Charisma'
                            defaultValue='Select'
                            sx={{ m: 1, width: '12ch' }}
                        >
                        </TextField>
                    </FormGroup>
                    <TextField
                        required
                        id='outlined-multiline-static'
                        label='Background'
                        multiline
                        rows={5}
                        defaultValue='Write your background story.'
                        sx={{ m: 1, display: 'flex' }}
                    />
                    <TextField 
                        required
                        id='outlined-required'
                        label='Player Name'
                        defaultValue='Enter Name'
                        sx={{ m: 1, width: '30ch', justifyContent: 'center'}}
                    />
                </Box>
            </Formik>
        </>
    );
}

export default CreationForm;
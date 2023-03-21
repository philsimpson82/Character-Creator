import { useState } from 'react';
//import { Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Modal, TextField, Button, Box, Container, MenuItem} from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import { LEVELS, RACES, CLASSES, GENDER } from '../app/shared/CHARACTEROPTIONS';

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
                    />
                    <TextField 
                        required
                        id='outlined-select-required'
                        select
                        label='Level'
                        defaultValue='1'
                        helperText='Select Starting Level'
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
                    >
                         {charClasses.map((charClass) => (
                            <MenuItem key={charClass.label} value={charClass.label}>
                                {charClass.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField />
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
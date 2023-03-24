import { useState } from 'react';
//import { Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Modal, TextField, Button, Box, Container, MenuItem, FormControl, FormGroup} from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';
import { LEVELS, RACES, CLASSES, GENDER, STRENGTH, DEXTERITY, CONSTITUTION, INTELLIGENCE, WISDOM, CHARISMA } from '../app/shared/CHARACTEROPTIONS';
import { positions } from '@mui/system';

const CreationForm = (props) => {
    const charLevels = LEVELS;
    const charRaces = RACES;
    const charClasses = CLASSES;
    const charGender = GENDER;
    const charSTR = STRENGTH;
    const charDEX = DEXTERITY;
    const charCON = CONSTITUTION;
    const charINT = INTELLIGENCE;
    const charWIS = WISDOM;
    const charCHAR = CHARISMA;

    return (
        <>
            <Modal
                open={props.openModal}
                onClose={props.closeModal}
            >
                <Formik>
                    <Box
                        component='form'
                        noValidate
                        autoComplete='off'
                        sx={{ 
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <FormGroup 
                            row
                            sx={{ justifyContent: 'space-between'}}
                        >
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
                        <FormGroup 
                            row
                        >
                            <TextField 
                                required
                                id='outlined-select-required'
                                select
                                label='Race'
                                defaultValue='Select'
                                sx={{ m: 1, width: '14ch' }}
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
                                sx={{ m: 1, width: '14ch' }}
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
                                {charSTR.map((strength) => (
                                    <MenuItem key={strength.label} value={strength.label}>
                                        {strength.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id='outlined-select-required'
                                select
                                label='Dexterity'
                                defaultValue='Select'
                                sx={{ m: 1, width: '12ch' }}
                            >
                                {charDEX.map((dexterity) => (
                                    <MenuItem key={dexterity.label} value={dexterity.label}>
                                        {dexterity.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id='outlined-select-required'
                                select
                                label='Constitution'
                                defaultValue='Select'
                                sx={{ m: 1, width: '12ch' }}
                            >
                                {charCON.map((constitution) => (
                                    <MenuItem key={constitution.label} value={constitution.label}>
                                        {constitution.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id='outlined-select-required'
                                select
                                label='Intelligence'
                                defaultValue='Select'
                                sx={{ m: 1, width: '12ch' }}
                            >
                                {charINT.map((intelligence) => (
                                    <MenuItem key={intelligence.label} value={intelligence.label}>
                                        {intelligence.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id='outlined-select-required'
                                select
                                label='Wisdom'
                                defaultValue='Select'
                                sx={{ m: 1, width: '12ch' }}
                            >
                                {charWIS.map((wisdom) => (
                                    <MenuItem key={wisdom.label} value={wisdom.label}>
                                        {wisdom.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required
                                id='outlined-select-required'
                                select
                                label='Charisma'
                                defaultValue='Select'
                                sx={{ m: 1, width: '12ch' }}
                            >
                                {charCHAR.map((charisma) => (
                                    <MenuItem key={charisma.label} value={charisma.label}>
                                        {charisma.label}
                                    </MenuItem>
                                ))}
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
            </Modal>
        </>
    );
}

export default CreationForm;
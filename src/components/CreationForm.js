import { useState } from 'react';
//import { Modal, ModalHeader, ModalBody, FormGroup } from 'reactstrap';
import { Modal, TextField, Button, Box, Container} from '@mui/material';
import { Formik, Form, ErrorMessage } from 'formik';

const CreationForm = () => {
    return (
        <>
            <Formik>
                <Box>
                    <TextField />
                    <TextField />
                    <TextField />
                    <TextField />
                    <TextField />
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
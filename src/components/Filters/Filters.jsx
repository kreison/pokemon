import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Generations from '../Generations/Generations';

const Filters = () => {
    
    return (
        <div>
            <Accordion >
                <AccordionSummary
                >
                    <Typography>Поколение</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Generations />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Физические</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel control={ <Checkbox /> } label="Физический" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Специальные</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <FormGroup>
                        <FormControlLabel control={ <Checkbox /> } label="Специальный" />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default Filters;
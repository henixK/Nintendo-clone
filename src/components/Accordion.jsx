// Accordion.js
import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { ArrowDown } from "@acme/icons"; // Importa l'icona ArrowDown dal tuo pacchetto di icone
import { styled } from '@mui/material/styles';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowDown />} // Utilizza l'icona ArrowDown importata
        aria-controls="panel1a-content"
        id="panel1a-header"
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'white',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomAccordion({ title, children, panel, handleChange, expanded }) {


    return (
        <Accordion
            expanded={expanded}
            onChange={handleChange}
            className="m-0 shadow-none"
        >
            <AccordionSummary
                aria-controls="panel1a-content"
                id={panel}
                className=""
            >
                <h3 className="py-1 font-bold text-base text-[#484848] px-3">{title}</h3>
            </AccordionSummary>
            <AccordionDetails className="w-full h-[150px] bg-slate-300 bg-opacity-50 flex flex-col gap-2 m-0 border-y">
                {children}
            </AccordionDetails>
        </Accordion>
    );
}

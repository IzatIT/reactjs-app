import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface ErrorSnackbarProps {
    errorMessage: string | null;
}

export function ErrorSnackbar({ errorMessage }: ErrorSnackbarProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (errorMessage) {
            setOpen(true);
        }
    }, [errorMessage]);

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {errorMessage}
            </Alert>
        </Snackbar>
    );
}

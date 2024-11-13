import { alpha, Theme, Components } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { black, brand } from '../themePrimitives';

export const inputsCustomizations: Components<Theme> = {
    MuiButtonBase: {},
    MuiButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                boxShadow: 'none',
                borderRadius: theme.shape.borderRadius,
                textTransform: 'none',
                padding: "8px",
                variants: [
                    {
                        props: {
                            color: 'primary',
                            variant: 'contained',
                        },
                        style: {
                            background: brand[900],
                        },
                    },
                ],
            }),
        },
    },
    MuiIconButton: {},
    MuiToggleButtonGroup: {},
    MuiToggleButton: {},
    MuiCheckbox: {},
    MuiInputBase: {
        styleOverrides: {
            root: {
                border: 'none',
            },
            input: {
                '&::placeholder': {
                    opacity: 1,
                    color: black[700],
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            input: {
                padding: '8px 12px',
                fontSize: '0.875rem',
            },
            root: ({ theme }) => ({
                color: theme.palette.text.primary,
                borderRadius: 8,
                backgroundColor: theme.palette.background.paper,
                boxShadow: `0px 0px 4px ${alpha(black[500], 0.3)}`,
                transition: 'box-shadow 120ms ease-in',
                '&:hover': {
                    boxShadow: `0px 0px 6px ${alpha(black[500], 0.5)}`,
                },
                [`&.${outlinedInputClasses.focused}`]: {
                    boxShadow: `0px 0px 6px ${alpha(brand[500], 0.5)}`,
                },
            }),
            notchedOutline: {
                border: 'none',
            },
        },
    },
    MuiInputAdornment: {
        styleOverrides: {
            root: {
                marginRight: '4px',
            },
        },
    },
    MuiFormLabel: {
        styleOverrides: {
            root: ({ theme }) => ({
                typography: theme.typography.caption,
                color: black[500],
                marginTop: "-7px"
            }),
        },
    },
};

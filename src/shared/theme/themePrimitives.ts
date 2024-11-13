import { createTheme, alpha, PaletteMode, Shadows } from '@mui/material/styles';

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
        highlighted: true;
    }
}
declare module '@mui/material/styles/createPalette' {
    interface ColorRange {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }

    interface PaletteColor extends ColorRange { }

    interface Palette {
        baseShadow: string;
    }
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export const brand = {
    50: 'hsl(229, 60%, 95%)',
    100: 'hsl(229, 60%, 90%)',
    200: 'hsl(229, 60%, 80%)',
    300: 'hsl(229, 60%, 70%)',
    400: 'hsl(229, 60%, 60%)',
    500: 'hsl(229, 60%, 52%)',
    600: 'hsl(229, 60%, 45%)',
    700: 'hsl(229, 60%, 38%)',
    800: 'hsl(229, 60%, 30%)',
    900: 'hsl(229, 60%, 20%)'
};

export const black = {
    50: 'hsl(220, 15%, 95%)',
    100: 'hsl(220, 15%, 90%)',
    200: 'hsl(220, 10%, 80%)',
    300: 'hsl(220, 10%, 70%)',
    400: 'hsl(220, 10%, 50%)',
    500: 'hsl(220, 10%, 35%)',
    600: 'hsl(220, 15%, 25%)',
    700: 'hsl(220, 20%, 15%)',
    800: 'hsl(220, 30%, 8%)',
    900: 'hsl(220, 100%, 3%)'
};
export const darkBlue = {
    50: 'hsl(228, 20%, 95%)',
    100: 'hsl(228, 20%, 90%)',
    200: 'hsl(228, 15%, 80%)',
    300: 'hsl(228, 15%, 70%)',
    400: 'hsl(228, 15%, 50%)',
    500: 'hsl(228, 100%, 6%)',
    600: 'hsl(228, 80%, 12%)',
    700: 'hsl(228, 70%, 18%)',
    800: 'hsl(228, 60%, 24%)',
    900: 'hsl(228, 50%, 30%)'
};

export const lightBlue = {
    50: 'hsl(229, 100%, 95%)',
    100: 'hsl(229, 90%, 85%)',
    200: 'hsl(229, 80%, 75%)',
    300: 'hsl(229, 70%, 65%)',
    400: 'hsl(229, 60%, 55%)',
    500: 'hsl(229, 100%, 60%)', // Base color
    600: 'hsl(229, 100%, 50%)',
    700: 'hsl(229, 100%, 40%)',
    800: 'hsl(229, 100%, 30%)',
    900: 'hsl(229, 100%, 20%)'
};


export const green = {
    50: 'hsl(115.29, 100.00%, 98%)',
    100: 'hsl(115.29, 100.00%, 94%)',
    200: 'hsl(115.29, 100.00%, 87%)',
    300: 'hsl(115.29, 100.00%, 77%)',
    400: 'hsl(115.29, 100.00%, 67%)',
    500: 'hsl(115.29, 100.00%, 52%)',
    600: 'hsl(115.29, 100.00%, 42%)',
    700: 'hsl(115.29, 100.00%, 32%)',
    800: 'hsl(115.29, 100.00%, 22%)',
    900: 'hsl(115.29, 100.00%, 12%)',
};

export const orange = {
    50: 'hsl(35, 92%, 95%)',
    100: 'hsl(35, 92%, 90%)',
    200: 'hsl(35, 92%, 80%)',
    300: 'hsl(35, 92%, 65%)',
    400: 'hsl(35, 92%, 50%)',
    500: 'hsl(35, 92%, 45%)',
    600: 'hsl(35, 92%, 35%)',
    700: 'hsl(35, 92%, 25%)',
    800: 'hsl(35, 92%, 16%)',
    900: 'hsl(35, 92%, 10%)'
};

export const red = {
    50: 'hsl(0, 100%, 97%)',
    100: 'hsl(0, 92%, 90%)',
    200: 'hsl(0, 94%, 80%)',
    300: 'hsl(0, 90%, 65%)',
    400: 'hsl(0, 90%, 40%)',
    500: 'hsl(0, 90%, 30%)',
    600: 'hsl(0, 91%, 25%)',
    700: 'hsl(0, 94%, 18%)',
    800: 'hsl(0, 95%, 12%)',
    900: 'hsl(0, 93%, 6%)',
};

export const purple = {
    50: 'hsl(265, 100%, 95%)',
    100: 'hsl(265, 90%, 85%)',
    200: 'hsl(265, 85%, 75%)',
    300: 'hsl(265, 80%, 65%)',
    400: 'hsl(265, 80%, 58%)',
    500: 'hsl(265, 82%, 53%)',
    600: 'hsl(265, 80%, 45%)',
    700: 'hsl(265, 80%, 38%)',
    800: 'hsl(265, 80%, 30%)',
    900: 'hsl(265, 80%, 25%)'
};

export const chartColors = [
    {
        bg: '#3454FF1A',
        border: '#3454FF'
    },
    {
        bg: '#14FF001A',
        border: '#14FF00'
    },
    {
        bg: '#CF38391A',
        border: '#CF3839'
    },
    {
        bg: '#7323EC1A',
        border: '#7323EC'
    },
    {
        bg: '#F79F171A',
        border: '#F79F17'
    },
    {
        bg: '#3454FF1A',
        border: '#3454FF'
    },
    {
        bg: '#14FF001A',
        border: '#14FF00'
    },
    {
        bg: '#CF38391A',
        border: '#CF3839'
    },
    {
        bg: '#7323EC1A',
        border: '#7323EC'
    },
    {
        bg: '#F79F171A',
        border: '#F79F17'
    },
    {
        bg: '#3454FF1A',
        border: '#3454FF'
    },
    {
        bg: '#14FF001A',
        border: '#14FF00'
    },
    {
        bg: '#CF38391A',
        border: '#CF3839'
    },
    {
        bg: '#7323EC1A',
        border: '#7323EC'
    },
    {
        bg: '#F79F171A',
        border: '#F79F17'
    },
    {
        bg: '#3454FF1A',
        border: '#3454FF'
    },
    {
        bg: '#14FF001A',
        border: '#14FF00'
    },
    {
        bg: '#CF38391A',
        border: '#CF3839'
    },
    {
        bg: '#7323EC1A',
        border: '#7323EC'
    },
    {
        bg: '#F79F171A',
        border: '#F79F17'
    },
];


export const getDesignTokens = (mode: PaletteMode) => {
    customShadows[1] = 'box-shadow(0,0,12,0,#0009441A)'

    return {
        palette: {
            mode,
            primary: {
                light: brand[200],
                main: brand[400],
                dark: brand[700],
                contrastText: brand[50],
                ...(mode === 'dark' && {
                    contrastText: brand[50],
                    light: brand[300],
                    main: brand[400],
                    dark: brand[700],
                }),
            },
            info: {
                light: brand[100],
                main: brand[300],
                dark: brand[600],
                contrastText: black[50],
                ...(mode === 'dark' && {
                    contrastText: brand[300],
                    light: brand[500],
                    main: brand[700],
                    dark: brand[900],
                }),
            },
            warning: {
                light: orange[300],
                main: orange[400],
                dark: orange[800],
                ...(mode === 'dark' && {
                    light: orange[400],
                    main: orange[500],
                    dark: orange[700],
                }),
            },
            error: {
                light: red[300],
                main: red[400],
                dark: red[800],
                ...(mode === 'dark' && {
                    light: red[400],
                    main: red[500],
                    dark: red[700],
                }),
            },
            success: {
                light: green[300],
                main: green[400],
                dark: green[800],
                ...(mode === 'dark' && {
                    light: green[400],
                    main: green[500],
                    dark: green[700],
                }),
            },
            grey: {
                ...black,
            },
            divider: mode === 'dark' ? alpha(black[700], 0.6) : alpha(black[300], 0.4),
            background: {
                default: 'hsl(0, 0%, 99%)',
                paper: 'hsl(220, 35%, 97%)',
                ...(mode === 'dark' && { default: black[900], paper: 'hsl(220, 30%, 7%)' }),
            },
            text: {
                primary: black[800],
                secondary: black[600],
                warning: orange[400],
                ...(mode === 'dark' && { primary: 'hsl(0, 0%, 100%)', secondary: black[400] }),
            },
            action: {
                hover: alpha(black[200], 0.2),
                selected: `${alpha(black[200], 0.3)}`,
                ...(mode === 'dark' && {
                    hover: alpha(black[600], 0.2),
                    selected: alpha(black[600], 0.3),
                }),
            },
        },
        typography: {
            fontFamily: ["Mulish", "sans-serif"],
            h1: {
                fontSize: defaultTheme.typography.pxToRem(48),
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: -0.5,
            },
            h2: {
                fontSize: defaultTheme.typography.pxToRem(36),
                fontWeight: 600,
                lineHeight: 1.2,
            },
            h3: {
                fontSize: defaultTheme.typography.pxToRem(30),
                lineHeight: 1.2,
            },
            h4: {
                fontSize: defaultTheme.typography.pxToRem(24),
                fontWeight: 600,
                lineHeight: 1.5,
            },
            h5: {
                fontSize: defaultTheme.typography.pxToRem(16),
                fontWeight: 900,
                lineHeight: "16px"
            },
            h6: {
                fontSize: defaultTheme.typography.pxToRem(18),
                fontWeight: 600,
            },
            subtitle1: {
                fontSize: defaultTheme.typography.pxToRem(16),
                fontWeight: 400,
                lineHeight: 1
            },
            subtitle2: {
                fontSize: defaultTheme.typography.pxToRem(16),
                fontWeight: 900,
            },
            body1: {
                fontSize: defaultTheme.typography.pxToRem(14),
            },
            body2: {
                fontSize: defaultTheme.typography.pxToRem(14),
                fontWeight: 400,
            },
            caption: {
                fontSize: defaultTheme.typography.pxToRem(12),
                fontWeight: 400,
            },
        },
        shape: {
            borderRadius: 8,
        },
        shadows: customShadows,
    };
};

export const colorSchemes = {
    light: {
        palette: {
            primary: {
                light: brand[200],
                main: brand[400],
                dark: brand[700],
                contrastText: brand[50],
            },
            info: {
                light: brand[100],
                main: brand[300],
                dark: brand[600],
                contrastText: darkBlue[50],
            },
            warning: {
                light: orange[300],
                main: orange[400],
                dark: orange[800],
            },
            error: {
                light: red[300],
                main: red[400],
                dark: red[800],
            },
            success: {
                light: green[300],
                main: green[400],
                dark: green[800],
            },
            grey: {
                ...black,
            },
            divider: alpha(darkBlue[300], 0.4),
            background: {
                default: 'hsl(0, 0%, 99%)',
                paper: 'hsl(220, 35%, 97%)',
            },
            text: {
                primary: darkBlue[500],
                secondary: darkBlue[500],
                warning: orange[400],
            },
            action: {
                hover: alpha(black[200], 0.2),
                selected: `${alpha(black[200], 0.3)}`,
            },
            baseShadow:
                'box-shadow(0,0,12,0,#0009441A)',
        },
    },
};

export const typography = {
    fontFamily: ['"Mulish", "sans-serif"'].join(','),
    h1: {
        fontSize: defaultTheme.typography.pxToRem(48),
        fontWeight: 600,
        lineHeight: 1.2,
        letterSpacing: -0.5,
    },
    h2: {
        fontSize: defaultTheme.typography.pxToRem(36),
        fontWeight: 600,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: defaultTheme.typography.pxToRem(30),
        lineHeight: 1.2,
    },
    h4: {
        fontSize: defaultTheme.typography.pxToRem(24),
        fontWeight: 600,
        lineHeight: 1.5,
    },
    h5: {
        fontSize: defaultTheme.typography.pxToRem(20),
        fontWeight: 600,
    },
    h6: {
        fontSize: defaultTheme.typography.pxToRem(18),
        fontWeight: 600,
    },
    subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
    },
    subtitle2: {
        fontSize: defaultTheme.typography.pxToRem(16),
        fontWeight: 700,
    },
    body1: {
        fontSize: defaultTheme.typography.pxToRem(14),
    },
    body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        fontWeight: 400,
    },
    caption: {
        fontSize: defaultTheme.typography.pxToRem(12),
        fontWeight: 400,
    },
};

export const shape = {
    borderRadius: 8,
};

// @ts-ignore
const defaultShadows: Shadows = [
    'none',
    ...defaultTheme.shadows.slice(2),
];
export const shadows = defaultShadows;
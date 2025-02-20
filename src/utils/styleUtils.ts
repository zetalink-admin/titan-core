export type PaddingSize = 'small' | 'base' | 'large';
export type ThemeColor = 'white' | 'light' | 'dark';

interface PaddingOptions {
    padding?: PaddingSize;
    paddingTop?: PaddingSize;
    paddingBottom?: PaddingSize;
}

export const getPaddingClass = ({ padding, paddingTop, paddingBottom }: PaddingOptions): string => {
    if (padding) return `py-${padding}`;
    
    const classes = [];
    if (paddingTop) classes.push(`pt-${paddingTop}`);
    if (paddingBottom) classes.push(`pb-${paddingBottom}`);
    return classes.join(' ');
};

export const getBackgroundColor = (background: ThemeColor = 'white'): string => {
    const bgColors = {
        white: 'bg-background',
        light: 'bg-background-light',
        dark: 'bg-background-dark'
    };
    return bgColors[background];
};

export const getTextColor = (background: ThemeColor = 'white'): string => {
    const textColors = {
        white: 'text-body-base',
        light: 'text-body-light',
        dark: 'text-body-dark'
    };
    return textColors[background];
};

export const getHeadlineColor = (background: ThemeColor = 'white'): string => {
    const headlineColors = {
        white: 'text-headline',
        light: 'text-headline-light',
        dark: 'text-headline-dark'
    };
    return headlineColors[background];
};

export const getEyebrowColor = (background: ThemeColor = 'white'): string => {
    const eyebrowColors = {
        white: 'text-eyebrow',
        light: 'text-eyebrow-light',
        dark: 'text-eyebrow-dark'
    };
    return eyebrowColors[background];
}; 
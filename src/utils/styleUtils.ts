export type PaddingSize = 'small' | 'base' | 'large';
export type ThemeColor = 'white' | 'alt' | 'dark';

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
        white: 'bg-white',
        alt: 'bg-background-alt',
        dark: 'bg-background-dark'
    };
    return bgColors[background];
};

export const getTextColor = (background: ThemeColor = 'white'): string => {
    const textColors = {
        white: 'text-body-base',
        alt: 'text-body-base',
        dark: 'text-body-light'
    };
    return textColors[background];
};

export const getHeadlineColor = (background: ThemeColor = 'white'): string => {
    const headlineColors = {
        white: 'text-headline',
        alt: 'text-headline',
        dark: 'text-headline-light'
    };
    return headlineColors[background];
};

export const getEyebrowColor = (background: ThemeColor = 'white'): string => {
    const eyebrowColors = {
        white: 'text-accent',
        alt: 'text-accent',
        dark: 'text-accent'
    };
    return eyebrowColors[background];
}; 
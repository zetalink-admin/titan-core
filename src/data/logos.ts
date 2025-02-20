export interface Logo {
    src: string;
    alt: string;
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists - you'll need to replace with actual logo imports
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: '/logos/logoipsum-333.svg',
                alt: 'Logo 1',
            },
            {
                src: '/logos/logoipsum-335.svg',
                alt: 'Logo 2',
            },
            {
                src: '/logos/logoipsum-344.svg',
                alt: 'Logo 3',
            },
            {
                src: '/logos/logoipsum-347.svg',
                alt: 'Logo 4',
            },
            {
                src: '/logos/logoipsum-352.svg',
                alt: 'Logo 5',
            }
        ]
    }
};

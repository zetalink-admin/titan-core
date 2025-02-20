export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    title?: string;
    description?: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        title: 'Frequently Asked Questions',
        description: 'Find answers to common questions about our platform and services.',
        faqs: [
            {
                question: 'What is Titan Core?',
                answer: 'Titan Core is a modern, high-performance Astro theme designed for developer portfolios and documentation sites. It provides a robust foundation for building fast, responsive websites with ease.'
            },
            {
                question: 'Is Titan Core open source?',
                answer: 'Yes, Titan Core is open source and available under the MIT license. You can use it for both personal and commercial projects.'
            },
            {
                question: 'How do I get started?',
                answer: 'Getting started is easy! Simply clone the repository, install the dependencies, and follow our comprehensive documentation to begin building your site.'
            },
            {
                question: 'Do you offer support?',
                answer: 'Yes, we offer support through our Discord community and GitHub issues. Our team and community members are always happy to help.'
            }
        ]
    }
};

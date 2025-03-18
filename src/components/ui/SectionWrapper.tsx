import React from 'react';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '' }) => {
    return (
        <section className={`min-h-screen py-20 md:py-16 flex items-center ${className}`}>
            <div className="container mx-auto px-4">
                {children}
            </div>
        </section>
    );
};
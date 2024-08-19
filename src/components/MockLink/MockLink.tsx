import React from 'react';

export interface MockLinkProps {
    children: React.ReactNode;
    to: string;
}

const MockLink: React.FC<MockLinkProps> = ({ to, children }) => {
    return <a href={to}>{children}</a>;
};

export default MockLink;

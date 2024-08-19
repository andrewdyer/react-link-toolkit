import React from 'react';
import LinkContext from '../LinkContext';

interface LinkProviderProps {
    children: React.ReactNode;
    LinkComponent: React.ComponentType<any>;
}

const LinkProvider: React.FC<LinkProviderProps> = ({ children, LinkComponent }) => {
    return <LinkContext.Provider value={{ LinkComponent }}>{children}</LinkContext.Provider>;
};

export default LinkProvider;

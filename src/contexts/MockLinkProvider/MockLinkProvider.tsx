import React from 'react';
import { MockLink } from '../../components';
import LinkContext from '../LinkContext';

export interface MockLinkProviderProps {
    children: React.ReactNode;
}

const MockLinkProvider: React.FC<MockLinkProviderProps> = ({ children }) => {
    return (
        <LinkContext.Provider value={{ LinkComponent: MockLink }}>{children}</LinkContext.Provider>
    );
};

export default MockLinkProvider;

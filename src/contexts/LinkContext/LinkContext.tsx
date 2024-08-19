import React from 'react';

export interface LinkContextProps {
    LinkComponent: React.ComponentType<any>;
}

const LinkContext = React.createContext<LinkContextProps | undefined>(undefined);

export default LinkContext;

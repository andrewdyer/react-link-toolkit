import React from 'react';
import { LinkContext } from '../../contexts';

const useLink = () => {
    const context = React.useContext(LinkContext);

    if (!context) {
        throw new Error('useLink must be used within a LinkProvider');
    }

    return context.LinkComponent;
};

export default useLink;

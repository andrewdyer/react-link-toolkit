import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkProvider from './LinkProvider';
import LinkContext from '../LinkContext';

interface DummyLinkProps {
    children: React.ReactNode;
    to: string;
}

const DummyLink: React.FC<DummyLinkProps> = ({ to, children }) => <a href={to}>{children}</a>;

interface TestComponentProps {}

const TestComponent: React.FC<TestComponentProps> = () => {
    const context = React.useContext(LinkContext);

    if (!context) {
        throw new Error('useLink must be used within a LinkProvider');
    }

    const { LinkComponent } = context;

    return <LinkComponent to="/home">Home</LinkComponent>;
};

describe('LinkProvider', () => {
    test('provides the LinkComponent to its children', () => {
        render(
            <LinkProvider LinkComponent={DummyLink}>
                <TestComponent />
            </LinkProvider>
        );

        const linkElement = screen.getByText('Home');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/home');
    });

    test('throws an error when useLink is used outside of LinkProvider', () => {
        const originalConsoleError = console.error;
        console.error = jest.fn();

        expect(() => render(<TestComponent />)).toThrow(
            'useLink must be used within a LinkProvider'
        );

        console.error = originalConsoleError;
    });
});

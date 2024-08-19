import React from 'react';
import { render, screen } from '@testing-library/react';
import LinkContext from './LinkContext';

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

describe('LinkContext', () => {
    test('provides the LinkComponent via the context', () => {
        render(
            <LinkContext.Provider value={{ LinkComponent: DummyLink }}>
                <TestComponent />
            </LinkContext.Provider>
        );

        const linkElement = screen.getByText('Home');

        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/home');
    });

    test('throws an error when useLink is used outside of LinkProvider', () => {
        const originalConsoleError = console.error;
        console.error = jest.fn(); // Suppress the expected error from showing in the test output

        expect(() => render(<TestComponent />)).toThrow(
            'useLink must be used within a LinkProvider'
        );

        console.error = originalConsoleError;
    });
});

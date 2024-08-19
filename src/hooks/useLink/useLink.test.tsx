import React from 'react';
import { renderHook } from '@testing-library/react';
import { LinkProvider } from '../../contexts';
import useLink from './useLink';

interface DummyLinkProps {
    children: React.ReactNode;
    to: string;
}

const DummyLink: React.FC<DummyLinkProps> = ({ to, children }) => <a href={to}>{children}</a>;

describe('useLink', () => {
    test('retrieves the LinkComponent from context', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => (
            <LinkProvider LinkComponent={DummyLink}>{children}</LinkProvider>
        );

        const { result } = renderHook(() => useLink(), { wrapper });

        expect(result.current).toBe(DummyLink);
    });

    test('throws an error if used outside of LinkProvider', () => {
        let error;
        const originalConsoleError = console.error;

        console.error = jest.fn();

        try {
            renderHook(() => useLink());
        } catch (e) {
            error = e;
        }

        expect(error).toEqual(new Error('useLink must be used within a LinkProvider'));

        console.error = originalConsoleError;
    });
});

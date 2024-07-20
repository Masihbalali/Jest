// vitest.setup.ts
import { expect } from 'vitest';
import '@testing-library/jest-dom';

// Extend expect with jest-dom matchers
expect.extend({
    toBeInTheDocument: require('@testing-library/jest-dom/matchers').toBeInTheDocument,
    toHaveClass: require('@testing-library/jest-dom/matchers').toHaveClass,
});

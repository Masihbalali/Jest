// ButtonComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonComponent from './ButtonComponent';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

describe('ButtonComponent', () => {
    it('renders with default properties', () => {
        render(<ButtonComponent text="Default Button" />);
        const button = screen.getByText('Default Button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('text-black text-[18px] bg-white rounded-[10px] w-[302px] h-[55px]');
    });

    // it('renders with custom properties', () => {
    //     const customProps = {
    //         text: 'Custom Button',
    //         textColor: 'red',
    //         textSize: '20px',
    //         backgroundColor: 'blue',
    //         borderRadius: '20px',
    //         width: '200px',
    //         height: '60px',
    //         category: 'custom',
    //     };
    //     render(<ButtonComponent {...customProps} />);
    //     const button = screen.getByText('Custom Button');
    //     expect(button).toBeInTheDocument();
    //     expect(button).toHaveStyle({
    //         color: 'red',
    //         fontSize: '20px',
    //         backgroundColor: 'blue',
    //         borderRadius: '20px',
    //         width: '200px',
    //         height: '60px',
    //     });
    // });

    it('renders with predefined category styles', () => {
        render(<ButtonComponent text="Success Button" category="success" />);
        const button = screen.getByText('Success Button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('text-white text-[18px] bg-[#3FC04B] rounded-[10px] w-[155px] h-[50px]');
    });

    it('triggers onClick event', () => {
        const handleClick = vi.fn();
        render(<ButtonComponent text="Click Me" onClick={handleClick} />);
        const button = screen.getByText('Click Me');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

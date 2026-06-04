import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from './DarkModeToggle';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('DarkModeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders correctly and defaults to dark theme if no local storage', () => {
    render(<DarkModeToggle />);
    const btn = screen.getByRole('button', { name: /toggle dark mode/i });
    expect(btn).toBeInTheDocument();
    
    // Check if data-theme was set
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('toggles theme to light when clicked', () => {
    render(<DarkModeToggle />);
    const btn = screen.getByRole('button', { name: /toggle dark mode/i });
    
    fireEvent.click(btn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('reads initial theme from localStorage', () => {
    localStorage.setItem('theme', 'light');
    render(<DarkModeToggle />);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });
});

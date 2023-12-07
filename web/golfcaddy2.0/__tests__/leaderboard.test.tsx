/// <reference types="jest" />
/// <reference types="@testing-library/jest-dom" />

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Leaderboard from '../public/components/templates/leaderboard.template';
import { NavBar } from '@/public/components/organisms/navbar.organism';
import '@testing-library/jest-dom/extend-expect';

describe('Leaderboard Component', () => {
    it('renders leaderboard correctly', () => {
        render(<Leaderboard />);    
        
        expect(screen.getByText('Leaderboard')).toBeInTheDocument();
        expect(screen.getByTestId('player-name')).toBeInTheDocument();
        expect(screen.getByTestId('score')).toBeInTheDocument();
    });

    it('updates leaderboard when data changes', () => {
        render(<Leaderboard />);
        
        fireEvent.click(screen.getByTestId('refresh-button'));
        
        expect(screen.getByText('Updated Leaderboard')).toBeInTheDocument();
        expect(screen.getByTestId('player-name')).toBeInTheDocument();
        expect(screen.getByTestId('score')).toBeInTheDocument();
    });
});




describe('Navbar Component', () => {
    it('renders navbar correctly', () => {
        render(<NavBar />);
        
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
        expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('navigates to the correct route when Home link is clicked', () => {
        render(<NavBar />);
        
        fireEvent.click(screen.getByText('Home'));
        expect(screen.getByText('Home')).toBeInTheDocument();
     });

    it('navigates to the correct route when About link is clicked', () => {
        render(<NavBar />);
        
        fireEvent.click(screen.getByText('About'));
        expect(screen.getByText('About')).toBeInTheDocument();
     });

    it('navigates to the correct route when Contact link is clicked', () => {
        render(<NavBar />);
        
        fireEvent.click(screen.getByText('Contact'));
        expect(screen.getByText('Contact')).toBeInTheDocument();
     });
});

 





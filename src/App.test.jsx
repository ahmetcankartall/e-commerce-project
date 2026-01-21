import {render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


describe('App', () => {
  it('App componenti render ediyoruz', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    
    expect(screen.getByText('Alinda Store')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    //screen.debug();
  });
});

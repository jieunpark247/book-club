import React from 'react';
import { render } from '@testing-library/react';

import MainPage from './views/MainPage'
describe('MainPage', () => { 
    test('renders App component', () => { 
        render(<MainPage />); 
    }); 
});

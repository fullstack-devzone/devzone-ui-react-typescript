import React from 'react';
import { render, screen } from '@testing-library/react';
import Link from './Link';
import { LinkModel} from "../../models/LinkModels";
import { MemoryRouter } from 'react-router-dom';

test('Renders Link', () => {
    const link : LinkModel= {id: 1, title: 'sivalabs', url: 'https://sivalabs.in', tags: ['java', 'spring']};

    render(<MemoryRouter><Link  {...link}/></MemoryRouter>);
    const linkElement = screen.getByText(/sivalabs/i);
    expect(linkElement).toBeInTheDocument();
});

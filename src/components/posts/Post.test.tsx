import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from './Post';
import { PostModel} from "../../models/PostModels";
import { MemoryRouter } from 'react-router-dom';

test('Renders Post', () => {
    const post : PostModel= {id: 1, title: 'sivalabs', url: 'https://sivalabs.in', content: 'sivalabs blog'};

    render(<MemoryRouter><Post  {...post}/></MemoryRouter>);
    const textElements = screen.getAllByText(/sivalabs/i);
    expect(textElements.length).toBeGreaterThan(0)
});

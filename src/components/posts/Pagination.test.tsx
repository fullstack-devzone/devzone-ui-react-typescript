import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import {PostsModel, PostsPaginationModel} from "../../models/PostModels";
import {MemoryRouter} from "react-router-dom";

test('Renders Pagination', () => {
    const postsModel: PostsModel = {
        data: [],
        hasNext: false,
        hasPrevious: false,
        isLast: true,
        isFirst: true,
        pageNumber: 1,
        totalPages: 2,
        totalElements: 50
    }
    const paginationModel : PostsPaginationModel= { page:1, posts:postsModel, query: ''};

    render(<MemoryRouter><Pagination  {...paginationModel}/></MemoryRouter>);
    const firstLinkElement = screen.getByText(/First/i);
    expect(firstLinkElement).toBeInTheDocument();
});

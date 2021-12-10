import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';
import {LinksModel, LinksPaginationModel} from "../../models/LinkModels";
import {MemoryRouter} from "react-router-dom";

test('Renders Pagination', () => {
    const linksModel: LinksModel = {
        data: [],
        hasNext: false,
        hasPrevious: false,
        isLast: true,
        isFirst: true,
        pageNumber: 1,
        totalPages: 2,
        totalElements: 50
    }
    const paginationModel : LinksPaginationModel= { page:1, links:linksModel, tag: '', query: ''};

    render(<MemoryRouter><Pagination  {...paginationModel}/></MemoryRouter>);
    const firstLinkElement = screen.getByText(/First/i);
    expect(firstLinkElement).toBeInTheDocument();
});


export interface LinkModel {
    id: number,
    title: string,
    url: string,
    tags: string[]
}

export interface LinksModel {
    data: LinkModel[],
    totalElements: number,
    pageNumber: number,
    totalPages: number,
    isFirst: boolean,
    isLast: boolean,
    hasNext: boolean,
    hasPrevious: boolean;
}

export interface LinksPaginationModel {
    tag?: string
    query?: string
    page?: number
    links: LinksModel
}
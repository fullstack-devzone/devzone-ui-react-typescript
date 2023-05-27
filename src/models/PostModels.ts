
export interface PostModel {
    id: number,
    title: string,
    url: string,
    content: string
}

export interface PostsModel {
    data: PostModel[],
    totalElements: number,
    pageNumber: number,
    totalPages: number,
    isFirst: boolean,
    isLast: boolean,
    hasNext: boolean,
    hasPrevious: boolean;
}

export interface PostsPaginationModel {
    query?: string
    page?: number
    posts: PostsModel
}
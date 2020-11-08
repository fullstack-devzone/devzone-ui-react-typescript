
export interface PostModel {
    id: number,
    title: string,
    url: string,
    tags: string[],
    description: string
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
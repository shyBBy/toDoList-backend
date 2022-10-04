export interface TaskUpdateInterface {
    status: string;
    editedAt: Date | string;
    priority: string;
}

export interface TaskInterface extends TaskUpdateInterface {
    id: string;
    title: string;
    createdAt: Date | string;
    createdByUserId: string;
    expiration: Date | string;
}

export type GetOneTaskResponse = TaskInterface;
export type GetListOfTaskResponse = GetOneTaskResponse[];

export interface GetPaginatedListOfTaskResponse {
    tasks: GetListOfTaskResponse;
    pagesCount: number;
    resultsCount: number;
}
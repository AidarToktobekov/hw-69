export interface Show{
    name: string;
    id: string;
}

export interface ShowById{
    name: string;
    url: string;
    language: string;
    genres: string[];
    runtime: number;
    premiered: string;
    image: string;
    summary: string;
}
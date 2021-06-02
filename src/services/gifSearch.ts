import { api } from './api'

export const search_Gif = (searchInput: string) => {
    const response = api(`&q=${searchInput}`);
    return response
}
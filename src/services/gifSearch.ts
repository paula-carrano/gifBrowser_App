import { Gif } from './type';
import { api } from './api';

export const search_Gif = async (searchInput: string) => {
    const response = await api(`&q=${searchInput}`);
    let result: Gif[] = [];
    const apiResult = response.data.data as any[];

    apiResult.forEach((r) => {
        const {
            id,
            title,
            images: {
                downsized_medium: { url: gifUrl },
            },
        } = r;

        result = [
            ...result,
            {
                title: title,
                id: id,
                embed_url: gifUrl,
            },
        ];
    });

    return result;
};
import { ArticApi } from '../utils/axiosConfig';
import { QueryKey, UseQueryOptions, useQuery } from 'react-query';

const QUERY_NAME = 'Artworks';
const QUERY_NAME_ID = 'Artworks_ID';
const QUERY_NAME_SEARCH = 'Artworks_SEARCH';

type searchParams = {
  q?: string;
  page?: number;
  limit?: number;
  fields?: string;
};

type Params = {
  ids?: string;
  page?: number;
  fields?: string;
  limit?: number;
};

// GET BY ID
export const getArtwork = async (id: string, queryParams?: Params): Promise<IArtwork> => {
  const response = await ArticApi.get(`/artworks/${id}`, {
    params: queryParams,
  });

  return response.data;
};

export const useGetArtwork = (id: string, queryParams?: Params, options?: UseQueryOptions<IArtwork>) =>
  useQuery([QUERY_NAME_ID, id] as QueryKey, () => getArtwork(id, queryParams), { ...options });

// GET ALL
export const getArtworks = async (queryParams?: Params): Promise<IArtwork[]> => {
  const response = await ArticApi.get('/artworks?', { params: queryParams });
  return response.data;
};

export const useGetArtworks = (queryParams?: Params, options?: UseQueryOptions<IArtwork[]>, dependencies?: QueryKey) =>
  useQuery([QUERY_NAME, dependencies] as QueryKey, () => getArtworks(queryParams), options);

// SEARCH
export const searchArtworks = async (queryParams?: searchParams): Promise<IArtwork[]> => {
  const response = await ArticApi.get(`/artworks/search?`, {
    params: queryParams,
  });

  return response.data;
};

export const useSearch = (queryParams: searchParams, options?: UseQueryOptions<IArtwork[]>) =>
  useQuery([QUERY_NAME_SEARCH] as QueryKey, () => searchArtworks(queryParams), options);

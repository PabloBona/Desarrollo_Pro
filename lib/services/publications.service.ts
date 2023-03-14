import useSWR from 'swr';
import instance from '../helpers/axios.helper.';
import { PublicationsResponse } from '../interfaces/publications.interface';

function usePublications(params?: string) {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    `/publications${params ? `?${params}` : ''}`
  );
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

function createPublication(data: any) {
  return instance.post(`/publications`, data);
}
export { usePublications, createPublication };

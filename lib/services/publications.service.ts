import useSWR from 'swr';
import instance from '../helpers/axios.helper.';
import { fetcher } from '../helpers/fetcher.helper';

function usePublications(params?: string) {
  const { data, error, isLoading, mutate } = useSWR(
    `/publications${params ? `?${params}` : ''}`,
    fetcher,
    {
      shouldRetryOnError: false,
    }
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

function createPublication(data: any) {
  return instance.post(`/publications`, data);
}
export { usePublications, createPublication };

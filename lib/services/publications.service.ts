import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR(`/publications`, fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublications };

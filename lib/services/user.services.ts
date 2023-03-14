import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function useUserMe() {
  const { data, error, isLoading, mutate } = useSWR(
    '/users/user-info',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useUserMe };

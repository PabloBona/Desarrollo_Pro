import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

const model = '/users';

function useUserMe() {
  const { data, error, isLoading } = useSWR(`${model}/user-info`, fetcher, {
    shouldRetryOnError: false,
    revalidateOnFocus: false,
  });
  return {
    data,
    error,
    isLoading,
  };
}

export { useUserMe };

import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { PublicationResponse } from '../interfaces/publications.interface';

const baseURL = 'http://68.183.49.192:8001/api/v1';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<PublicationResponse>(
    `${baseURL}/publications`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublications };

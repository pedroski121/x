import useSWR, { KeyedMutator } from 'swr';
import { AxiosResponse } from 'axios';
import { useAuth } from '@clerk/nextjs';  
import { axiosInstance } from '@utils/axiosInstance';

interface SWRResponse<T> {
  data: T | undefined;
  mutate: KeyedMutator<T>;
  error: any;
  isLoading: boolean;
}

export const useFetchSWR = <T = any>(url: string): SWRResponse<T> => {
  const { getToken } = useAuth();

  const fetchData = async (url: string): Promise<T> => {
    const token = await getToken();  
    const response: AxiosResponse<T> = await axiosInstance.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  };

  // Use SWR to fetch the data
  const { data, mutate, error, isValidating } = useSWR<T>(url, fetchData, {
    refreshInterval: 100000,  // Adjust refresh interval
  });

  return {
    data,
    mutate,
    error,
    isLoading: !data && !error && isValidating,  // Check if it's still loading
  };
};

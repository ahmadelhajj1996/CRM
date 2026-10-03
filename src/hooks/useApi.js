import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import notify from '../utils/toastr'  
 
import {
  fetchData,
  createData,
  updateData,
  deleteData,
  patchData
} from "../services/general";


export const useGet = (key, url, options = {}) => {
  return useQuery({
    queryKey: key,
    queryFn: () =>
      fetchData(url, {
        ...options.config,
      }),
    retry: 4,
    refetchOnWindowFocus: true,
    
    keepPreviousData : false,
    ...options,
  });
};

export const usePost = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ url, data, config }) => createData(url, data, config),
    ...options,
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};

export const usePut = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ url, data, config }) => updateData(url, data, config),
    ...options,
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      if (options.updateQuery) {
        queryClient.setQueryData({ queryKey: options.updateQuery }, (old) => ({
          ...old,
          ...data,
        }));
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};

export const usePatch = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ url, data, config }) => patchData(url, data, config),
    ...options,
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      if (options.updateQuery) {
        queryClient.setQueryData({ queryKey: options.updateQuery }, (old) => ({
          ...old,
          ...data,
        }));
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
  });
};

export const useDeleteMutation = (options = {}) => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ url, config }) => deleteData(url, config),
    ...options,
    onSuccess: (data, variables, context) => {
      if (options.invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: options.invalidateQueries });
      }
      if (options.removeFromQuery) {
        queryClient.setQueryData({ queryKey: options.removeFromQuery }, (old) =>
          old.filter((item) => item.id !== variables.id)
        );
      }
      if (options.onSuccess) {
        options.onSuccess(data, variables, context);
      }
    },
    onError: () => {
      notify("الرجاء حذف العناصر الفرعية اولا ثم اعادة المحاولة ", "error");
    },
  });
};

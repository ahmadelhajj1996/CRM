import { useMemo } from "react";
import { useGet } from "./useApi";

export const useCategories = (parent_id = null, options = {}) => {
  const queryKey = useMemo(
    () => ["categories", parent_id ?? null],
    [parent_id],
  );
  return useGet(queryKey, "categories", {
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    placeholderData: [],
    select: (response) => response?.data || [],
    ...options,
  });
};
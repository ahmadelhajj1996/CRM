import { useGet } from "../useApi";

export default function useHome() {
  const { data = {}, isFetched } = useGet(["dashboard"], "dashboard", {
    enabled: true,
    refetchOnMount: true,
    select: (response) => response?.data,
  });

  return {
    data,
    isFetched,
  };
}

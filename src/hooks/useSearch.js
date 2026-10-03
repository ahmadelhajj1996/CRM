import { useMemo, useState } from "react";

const normalize = (text) =>
  String(text)
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();

const getValue = (obj, path) =>
  path.split(".").reduce((acc, key) => acc?.[key], obj);

export default function useSearch(data = [], searchFields = []) {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    const normalizedSearch = normalize(search);

    if (!normalizedSearch) return data;

    return data.filter((item) =>
      searchFields.some((field) => {
        const value = getValue(item, field);

        if (value === null || value === undefined) return false;

        return normalize(value).includes(normalizedSearch);
      })
    );
  }, [data, search, searchFields]);

  return {
    search,
    setSearch,
    filteredData,
  };
}
import { useState, useEffect, useMemo } from "react";

export default function useFilter(initialItems = [], filterConfig = {}) {
  const {
    filterKey: defaultFilterKey = "all",
    filterOptions = [],
    filterProperty = "",
    storageKey = "filter-preference",
  } = filterConfig;

  const getInitialFilter = () => {
    try {
      const savedFilter = localStorage.getItem(storageKey);
      return savedFilter ? savedFilter : defaultFilterKey;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return defaultFilterKey;
    }
  };

  const [currentFilter, setCurrentFilter] = useState(getInitialFilter);

  const filteredItems = useMemo(() => {
    if (!currentFilter || currentFilter.toLowerCase() === "all") {
      return initialItems;
    }
    return initialItems.filter(
      (item) =>
        String(item[filterProperty]).toLowerCase() ===
        String(currentFilter).toLowerCase(),
    );
  }, [currentFilter, initialItems, filterProperty]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, currentFilter);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [currentFilter, storageKey]);

  const handleFilterChange = (value) => {
    setCurrentFilter(value);
  };

  const resetFilter = () => {
    setCurrentFilter(defaultFilterKey);
  };

  return {
    filterKey: currentFilter,
    filteredItems,
    handleFilterChange,
    filterOptions,
    resetFilter,
  };
}

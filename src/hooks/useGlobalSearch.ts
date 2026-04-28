import { useState, useMemo } from "react";
import { beats } from "@/data/mock/beats";
import { normalizeString } from "@/utils/normalizeString";

export const useGlobalSearch = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query) return [];

    return beats.filter((beat) =>
      normalizeString(beat.title).includes(normalizeString(query)),
    );
  }, [query]);

  return {
    query,
    setQuery,
    results,
  };
};

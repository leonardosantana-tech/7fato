// (Busca e Filtros de Beats) //
"use client";

import { useState, useMemo } from "react";
import { beats } from "@/data/mock/beats";
import { normalizeString } from "@/utils/normalizeString";

export const useBeatSearch = () => {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("all");

  const filtered = useMemo(() => {
    return beats.filter((beat) => {
      const titleMatches = normalizeString(beat.title).includes(
        normalizeString(query),
      );
      const genreMatches = genre === "all" || beat.genre === genre;
      return titleMatches && genreMatches;
    });
  }, [query, genre]);

  return { query, setQuery, genre, setGenre, beats: filtered };
};

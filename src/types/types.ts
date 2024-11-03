import React, { ReactNode } from 'react';

export interface Movie {
  id: number;
  path: string;
  name: string;
  year: string;
  imdb: number;
  category: string;
  summary?: string;
  isTvSeries?: boolean;
}

export interface MovieContextProps {
  movies: Movie[];
  searchResult: Movie[];
  searchMovies: (query: string) => void;
  getMovies: () => void;
  resetMovies: () => void;
  isSearching: boolean;
  error: string | null;
}

export interface DropdownOption {
  label: string;
  value: string | null;
}

export interface RouteProps {
  children: ReactNode;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}
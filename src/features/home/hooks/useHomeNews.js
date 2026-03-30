import { useQuery } from '@tanstack/react-query';
import { fetchAllNews, fetchNewsByCategory, fetchCNBCNews } from '../../../services/newsService';

export function useHomeNews() {
  const allNewsQuery = useQuery({
    queryKey: ['news', 'all'],
    queryFn: fetchAllNews,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  const cnbcNewsQuery = useQuery({
    queryKey: ['news', 'cnbc'],
    queryFn: fetchCNBCNews,
    staleTime: 5 * 60 * 1000,
  });

  return {
    allNews: allNewsQuery.data || [],
    cnbcNews: cnbcNewsQuery.data || [],
    isLoading: allNewsQuery.isLoading,
    isError: allNewsQuery.isError,
    error: allNewsQuery.error,
  };
}

export function useCategoryNewsPreview(category) {
  return useQuery({
    queryKey: ['news', 'category', category],
    queryFn: () => fetchNewsByCategory(category),
    staleTime: 5 * 60 * 1000,
    enabled: !!category,
  });
}

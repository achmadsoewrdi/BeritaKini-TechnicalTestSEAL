import { useQuery } from '@tanstack/react-query';
import { fetchNewsByCategory, fetchAllNews } from '../../../services/newsService';

export function useCategoryNews(category) {
  return useQuery({
    queryKey: ['news', 'category', category],
    queryFn: () => {
      if (category === 'terbaru') {
        return fetchAllNews();
      }
      return fetchNewsByCategory(category);
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!category,
  });
}

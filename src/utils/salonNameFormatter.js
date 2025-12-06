/**
 * Convert route parameter to salon name
 * e.g., "beauty-plaza" -> "Beauty Plaza"
 */
export const formatSalonName = (routeName) => {
  if (!routeName) return '';

  return routeName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

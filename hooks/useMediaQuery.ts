import { useState, useEffect } from 'react';

/**
 * Custom hook for handling responsive media queries
 * @param query The media query to match
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create media query list
    const media = window.matchMedia(query);
    
    // Set initial value
    setMatches(media.matches);
    
    // Define callback for media query changes
    const listener = () => setMatches(media.matches);
    
    // Add event listener
    media.addEventListener('change', listener);
    
    // Clean up on unmount
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
} 
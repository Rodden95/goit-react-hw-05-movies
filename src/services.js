const API_KEY = 'e317b5c00a59f0da2362fe12bbff30f9';
const BASE_URL = 'https://api.themoviedb.org';

export function fetchKeyWord(keyword) {
  return fetch(`${BASE_URL}/3/search/movie?api_key=${API_KEY}&page=1&query=${keyword}`).then(res => res.json())
}
export function fetchId(id) {
  return fetch(`${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&external_source=imdb_id`).then(res => res.json())
}
export function fetchCredits(id) {
  return fetch(`${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}`).then(res => res.json())
}
export function fetchReviews(id) {
  return fetch(`${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(res => res.json())
}
export function fetchTrend() {
  return fetch(`${BASE_URL}/3/trending/all/day?api_key=${API_KEY}`).then(res => res.json())
}

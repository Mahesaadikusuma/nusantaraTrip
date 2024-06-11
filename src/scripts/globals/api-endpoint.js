import CONFIG from "./config";

const API_ENDPOINT = {
  destinations: `${CONFIG.BASE_URL}/destinations`,
  fasilitas: `${CONFIG.BASE_URL}/fasilitas`,
  DESTINATION_DETAIL: (slug) => `${CONFIG.BASE_URL}/destinations/${slug}`,
  REVEIW_DESTINATION: `${CONFIG.BASE_URL}/user-rate-destination`,

  ARTICLE: `${CONFIG.BASE_URL}/article-destination`,
  ARTICLE_DETAIL: (slug) => `${CONFIG.BASE_URL}/article-destination/${slug}`,

  EVENT_DESTINATIONS: (slug) => `${CONFIG.BASE_URL}/event-destination/${slug}`,
};

export default API_ENDPOINT;

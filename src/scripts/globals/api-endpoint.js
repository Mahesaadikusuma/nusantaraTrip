import CONFIG from "./config";

const API_ENDPOINT = {
  destinations: `${CONFIG.BASE_URL}/destinations`,
  fasilitas: `${CONFIG.BASE_URL}/fasilitas`,
  DESTINATIONS_DETAIL: (id) => `${CONFIG.BASE_URL}/destinations/${id}`,
};

export default API_ENDPOINT;

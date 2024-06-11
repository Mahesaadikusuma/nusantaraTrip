import API_ENDPOINT from "../globals/api-endpoint";

const axios = require("axios");

class NusantaraDB {
  static async NusantaraDestinations() {
    // const response = await fetch(API_ENDPOINT.destinations);
    // const responseJson = await response.json();
    // console.log(responseJson.data);
    // return responseJson.data.destinations;
    try {
      const response = await axios.get(API_ENDPOINT.destinations);
      return response.data.data.destinations;
    } catch (error) {
      console.error(error);
    }
  }

  static async NusantaraDetail(slug) {
    // const response = await fetch(API_ENDPOINT.DESTINATIONS_DETAIL(id));
    // const responseJson = await response.json();
    // console.log(responseJson.result);
    // return responseJson.result;
    try {
      const response = await axios.get(API_ENDPOINT.DESTINATION_DETAIL(slug));
      return response.data.result;
    } catch (error) {
      console.error(error);
    }
  }

  static async ReviewDestinations(data) {
    try {
      const response = await axios.post(
        API_ENDPOINT.REVEIW_DESTINATION,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async Article() {
    try {
      const response = await axios.get(API_ENDPOINT.ARTICLE);

      return response.data.data.ArticleDestination;
    } catch (error) {
      console.log(error);
    }
  }

  static async ArticleDetail(slug) {
    try {
      const response = await axios.get(API_ENDPOINT.ARTICLE_DETAIL(slug));
      return response.data.result;
    } catch (error) {
      console.error(error);
    }
  }

  static async EventDestinations(slug) {
    try {
      const response = await axios.get(API_ENDPOINT.EVENT_DESTINATIONS(slug));
      return response.data.result;
    } catch (error) {
      console.log(error);
    }
  }

  static async fasilitas() {
    const response = await fetch(API_ENDPOINT.fasilitas);
    const responseJson = await response.json();
    console.log(responseJson.data);
    return responseJson.data.fasilitas;
  }
}

export default NusantaraDB;

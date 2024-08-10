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
      if (!response.status) {
        throw new Error("Network response not ok");
        console.log("Network response not ok");
      } else {
        console.log("Network response ok");
      }
      console.log(response);
      return response.data.result;
    } catch (error) {
      console.error(error);
    }
    // ini haruss return dulu
    // return fetch(API_ENDPOINT.destinations)
    //   .then((response) => {
    //     if (response.ok) {
    //       // throw new Error("Network response was not ok");
    //       console.log("Network response was ok");
    //     }
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     return data.result;
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with the fetch operation:", error);
    //   });
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
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      const response = await axios.post(
        API_ENDPOINT.REVEIW_DESTINATION,
        // JSON.stringify(data),
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // const response = await axios.post(
      //   API_ENDPOINT.REVEIW_DESTINATION,
      //   option
      // );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  static async Article() {
    try {
      const response = await axios.get(API_ENDPOINT.ARTICLE);
      console.log(response);
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
      // console.log(response);
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

import API_ENDPOINT from "../globals/api-endpoint";
import CONFIG from "../globals/config";

class NusantaraDB {
  static async NusantaraDestinations() {
    const response = await fetch(API_ENDPOINT.destinations);
    const responseJson = await response.json();
    console.log(responseJson.data);
    // return responseJson.data.destinations.map((destination) => ({
    //   ...destination,
    //   thumbnail: `${CONFIG.BASE_URL.replace("/api", "")}/${
    //     destination.thubmnail
    //   }`, // Memperbaiki URL thumbnail
    // }));
    return responseJson.data.destinations;
  }

  static async fasilitas() {
    const response = await fetch(API_ENDPOINT.fasilitas);
    const responseJson = await response.json();
    console.log(responseJson.data);
    return responseJson.data.fasilitas;
  }

  static async NusantaraDetail(id) {
    const response = await fetch(API_ENDPOINT.DESTINATIONS_DETAIL(id));
    const responseJson = await response.json();
    console.log(responseJson.result);
    return responseJson.result;
  }
}

export default NusantaraDB;

import axios from "axios";
export class MeteoAPI {
  static async fetchWeatherByCoords(coords) {
    try {
    return (
      await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      )
    ).data;
  }catch (error){
    throw error;
  }
  }

  static async fetchCityByCoords(coords) {
    const {
      address: { city, village, town },
    } = (
      await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coords.lat}&lon=${coords.lng}&accept-language=en`
      )
    ).data;
    return city || village || town;
  }

  static async fetchCoordsByCity(city) {
    try {
      const { latitude: lat, longitude: lng } = (
        await axios.get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
        )
      ).data.results[0];

      return { lat, lng };
    } catch (err) {
      throw "Invalid city name";
    }
  }

  static async fetchPostList() {
    try {
      const  postList  = (
        await axios.get("https://jsonplaceholder.typicode.com/posts")
      ).data;
      return postList;
    } catch (err) {
      throw "Error fetching data";
    }
  }

  static async fetchPrivateNewsListData() {
    const url = "https://api.jsonbin.io/v3/b/635249d865b57a31e69d9143"; // Replace with the actual URL and Bin ID
    const masterKey = "$2b$10$YyUJiWKHl8CtW90XTkp7ru9ysDiWLhw5AsU4UTSSBgV5AUFPyxDfy"; // Replace with your actual X-Master-Key
  
    try {
      const responseData = await axios.get(url, {
        headers: {
          'X-Master-Key': masterKey,
          'Content-Type': 'application/json',
        },
      });
      return responseData.data.record;
    } catch (error) {
      throw "Error fetching data";
    }
  };
  
}

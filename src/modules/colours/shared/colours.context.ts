// Import third party dependencies
import axios from "axios";

/** Context to store, access and request colours data */
function ColoursContext() {
  // Create object to return
  return {
    // Get colours from API
    getColours: () => {
      return axios.get("https://reqres.in/api/colours").then(res => {
        return res.data.data;
      });
    }
  };
}

export default ColoursContext;

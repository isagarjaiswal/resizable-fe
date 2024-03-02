import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
// Function to add data
export async function addData(data) {
  try {
    const response = await axios.post(apiUrl + "api/add", data);
    return response.status;
  } catch (error) {
    console.error("Error adding data:", error); // Log error with clear message
  }
}

// Function to update data
export async function updateData(data) {
  try {
    const response = await axios.put(apiUrl + "api/update", data);
    console.log({ a: response.data }); // Log response data for debugging purposes
  } catch (error) {
    console.error("Error updating data:", error.response.data); // Log error with clear message and include response data
  }
}

// Function to get counts
export async function getCounts() {
  try {
    const response = await axios.get(apiUrl + "api/count");
    console.log(response.data); // Log counts from the server for debugging purposes
    return response.data; // Return counts from the server
  } catch (error) {
    console.error("Error getting counts:", error.response.data); // Log error with clear message and include response data
  }
}

// Function to get all data
export async function getAllData() {
  try {
    const response = await axios.get(apiUrl + "api/allEntries");
    console.log(response.data); // Log all entries from the server for debugging purposes
    return response.data; // Return all entries from the server
  } catch (error) {
    console.error("Error getting all data:", error.response.data); // Log error with clear message and include response data
  }
}

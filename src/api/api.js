import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export async function addData(data) {
  try {
    const response = await axios.post(`${apiUrl}api/add`, data);
    return response.status;
  } catch (error) {
    console.error("Error adding data:", error);
  }
}

export async function updateData(data) {
  try {
    const response = await axios.put(`${apiUrl}api/update`, data);
  } catch (error) {
    console.error("Error updating data:", error.response.data);
  }
}

export async function getCounts() {
  try {
    const response = await axios.get(`${apiUrl}api/count`);
    return response.data;
  } catch (error) {
    console.error("Error getting counts:", error.response.data);
  }
}

export async function getAllData() {
  try {
    const response = await axios.get(`${apiUrl}api/allEntries`);
    return response.data;
  } catch (error) {
    console.error("Error getting all data:", error.response.data);
  }
}

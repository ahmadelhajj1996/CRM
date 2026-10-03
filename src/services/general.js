import api from "../config/axios";

export const getRequest = (url, config = {}) => {
  return api.get(url, {
    ...config,
    headers: {
      ...config.headers,
      "Accept-Language": config.lang || 'en' 
    },
  });
};


export const postRequest = (url, data, config = {}) =>  api.post(url, data, config);

export const putRequest = (url, data, config = {}) =>  api.put(url, data, config);
 
export const patchRequest = (url, data, config = {}) =>  api.patch(url, data, config);

export const deleteRequest = (url, config = {}) => api.delete(url, config);



export  const fetchData   =  async (url, config = {}  ) => {
  try {
    const response = await getRequest(url, config);
    return response?.data;
  } catch (error) {
    console.error("Fetch error:", error.response.data);
    throw error; 
  }
} 



export const createData = async (url, data, config = {}) => {
  try {
    const response = await postRequest(url, data, config);
    return response?.data;
  } catch (error) {
    console.error("Create error:", error);
    throw error;
  }
};

export const updateData = async (url, data, config = {}) => {
  try {
    const response = await putRequest(url, data, config);
    return response?.data;
  } catch (error) {
    console.error("Update error:", error);
    throw error;
  }
};

 
export const patchData = async (url, data, config = {}) => {
  try {
    const response = await patchRequest(url, data, config);
    return response?.data;
  } catch (error) {
    console.error("Patch error:", error);
    throw error;
  }
};


export const deleteData = async (url, config = {}) => {
  try {
    const response = await deleteRequest(url, config);
    return response?.data;
  } catch (error) {
    console.error("Delete error:", error);
    throw error;
  }
};



export const downloadFile = async (url, config = {}) => {
  try {
    const response = await getRequest(url, {
      ...config,
      responseType: "blob",
    });

    return response.data;
  } catch (error) {
    if (error.response?.data instanceof Blob) {
      try {
        const text = await error.response.data.text();
        const parsed = JSON.parse(text);
        error.response.data = parsed;
        console.error("Server error:", parsed);
      } catch {
        // response wasn't JSON, leave as-is
        
      }
    } else {
      console.error("Download error:", error);
    }

    throw error;
  }
};    
import axios from 'axios';

export const fetchGetRequestsWithPagination = async (url, page, limit) => {
  const response = await axios.get(url, {
    params: { page: page, limit: limit },
  });
  return response.data.result;
};

export const fetchGetRequests = async (url) => {
  let response;
  let error;
  await axios
    .get(url)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      error = err.response.data.statusCode;
    });
  return { response, error };
};

export const fetchDeleteRequests = async (url) => {
  const response = await axios.delete(url);
  return response.data.data;
};

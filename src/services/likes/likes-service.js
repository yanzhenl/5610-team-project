import axios from "axios";
const LIKES_API_URL = "http://localhost:8000/api/likes";


export const findAllLikes = async () => {
    const response = await axios.get(LIKES_API_URL);
    return response.data;
};

export const findLikesByPid = async (like) => {
    const response = await axios.get(`${LIKES_API_URL}/${like.product_id}`);
    return response.data
}

export const createLike = async (like) => {
    const response = await axios.post(LIKES_API_URL, like)
    return response.data;
}

export const updateLike = async (like) => {
    const response = await axios.put(`${LIKES_API_URL}/${like._id}`, like);
    return response.data;
};


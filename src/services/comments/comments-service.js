import axios from "axios";
const COMMENTS_API_URL = "http://localhost:8000/api/comments";

export const findAllComments = async () => {
    const response = await axios.get(COMMENTS_API_URL);
    return response.data;
};

export const createComment = async (comment) => {
    const response = await axios.post(COMMENTS_API_URL, comment)
    return response.data;
}


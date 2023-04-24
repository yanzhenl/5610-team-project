import axios from "axios";

const USERS_API = "http://localhost:8000/api/users";

export const userAddWishList = async (userId, productId) => {
    const response = await axios.post(
        `${USERS_API}/${userId}/wishlist/${productId}`);
    return response.data;
};

export const findWishListByUserId = async (userId) => {
    const response = await axios.get(`${USERS_API}/${userId}/wishlist`);
    return response.data;
};
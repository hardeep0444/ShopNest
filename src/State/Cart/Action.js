import { api } from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType";

export const addItemToCart = (reqData) => async (dispatch) => {
  console.log("req data ", reqData);
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    const { data } = await api.put(`/api/cart/add`, reqData);
    console.log("add item to cart ", data);
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload: error.message,
    });
  }
};

export const getCart = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_REQUEST });
    const { data } = await api.get(`/api/cart/`);
    console.log("cart ", data);
    dispatch({
      type: GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAILURE,
      payload: error.message,
    });
  }
};

export const removeItemToCart = (cartItemId) => async (dispatch) => {
  console.log("req data ", cartItemId);
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.delete(`/api/cart_items/${cartItemId}`);
    console.log("add item to cart ", data);
    dispatch({
      type: REMOVE_CART_ITEM_SUCCESS,
      payload: cartItemId,
    });
  } catch (error) {
    dispatch({
      type: REMOVE_CART_ITEM_FAILURE,
      payload: error.message,
    });
  }
};

export const updateItemToCart = (reqData) => async (dispatch) => {
  console.log("req data ", reqData);
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(
      `/api/cart_items/${reqData.cartItemId}`,
      reqData.data
    );
    console.log("updateItemToCart post req data ", data);
    dispatch({
      type: UPDATE_CART_ITEM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CART_ITEM_FAILURE,
      payload: error.message,
    });
  }
};

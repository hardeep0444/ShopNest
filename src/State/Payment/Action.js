import { api } from "../../config/apiConfig";
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_REQUEST,
} from "./ActionType";

export const createPayment = (orderId) => async (dispatch) => {
  console.log("create payment for orderId:-  ", orderId);

  dispatch({
    type: CREATE_PAYMENT_REQUEST,
  });
  try {
    const { data } = await api.post(`/api/payments/${orderId}`, {});
    if (data.paymentLinkUrl) {
      window.location.href = data.paymentLinkUrl;
    }
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
  console.log("create payment reqData ", reqData);
  dispatch({
    type: UPDATE_PAYMENT_REQUEST,
  });
  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );

    console.log("update payment : - ", data);
  } catch (error) {
    dispatch({
      type: UPDATE_PAYMENT_REQUEST,
      payload: error.message,
    });
  }
};

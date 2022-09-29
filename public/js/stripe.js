/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";
const stripe = Stripe(
  "pk_test_51LmblRSJuVTEb9gXnP4SgXjGKYcPLtjtEuUJDCb2BUOI9wqe8PDYqgT7Gfj4SwnWIqINoTdVwSyOABVm8cnXykDc00VI6Q7UM8"
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert("error", err);
  }
};

const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewControllers"),
  getMyTours = require("../controllers/getMyTours");
const authController = require("../controllers/authControllers");
const bookingController = require("../controllers/bookingcontrollers");

router.get(
  "/",
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewController.getOverview
);

router.get("/tour/:slug", authController.isLoggedIn, viewController.getTour);
router.get("/login", authController.isLoggedIn, viewController.getLoginForm);
router.get("/me", authController.protect, viewController.getAccount);
router.get("/my-tours", authController.protect, getMyTours.getMyTours);

router.post(
  "/submit-user-data",
  authController.protect,
  viewController.updateUserData
);

module.exports = router;

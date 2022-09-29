const Tour = require("./../models/tourModels");
const Booking = require("./../models/bookingModels");
const catchAsync = require("./../utils/catchAsync");

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all booking
  const bookings = await Booking.find({ user: req.user.id });

  // 2) Find tours with the returned IDs
  const tourIDs = bookings.map((el) => el.tour);
  const tours = await Tour.find({ _id: { $in: tourIDs } });

  res.status(200).render("overview", {
    title: "My Tours",
    tours,
  });
});

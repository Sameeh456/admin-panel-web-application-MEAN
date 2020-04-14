exports.getSalesData = (req, res, next) => {
  res.status(200).json({
    data: [{ message: 'You are in Sales Page' }],
  })
}

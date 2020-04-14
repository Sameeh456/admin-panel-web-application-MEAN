exports.getProductsData = (req, res, next) => {
  res.status(200).json({
    data: [{ message: 'You are in Products Page' }],
  })
}

exports.getStoreData = (req, res, next) => {
  res.status(200).json({
    data: [{ message: 'You are in Store Page' }],
  })
}

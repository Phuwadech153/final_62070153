const express = require("express");
const User = require('../models/user')
router = express.Router();
router.get('/user', async (req, res) => {
  const user = await User.find({})
  res.json(user)
})

router.get('/user/:id', async (req, res) => {
  const { id } = req.params

  try {
    const user = await User.findById(id)
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post('/user', async (req, res) => {
  const payload = req.body
  try {
    const user = new User(payload)
    await user.save()
    res.status(201).end()
  } catch (error) {
    res.status(400).json(error)
  }
})

router.put('/user/:id', async (req, res) => {
  const payload = req.body
  const { id } = req.params

  try {
    const user = await User.findByIdAndUpdate(id, { $set: payload })
    res.json(user)
  } catch (error) {
    res.status(400).json(error)
  }
})

router.delete('/user/:id', async (req, res) => {
  const { id } = req.params

  try {
    await User.findByIdAndDelete(id)
    res.status(204).end()
  } catch (error) {
    res.status(400).json(error)
  }
})

module.exports = router
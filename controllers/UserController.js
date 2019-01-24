const { User } = require('../models')

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll()

    res.status(200).json({ users })
  } catch (err) {
    res.status(500).json({ message: 'There is an error.', err })
  }
}

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    res.status(200).json({ user })
  } catch (err) {
    res.status(500).json({ message: 'There is an error.', err })
  }
}

exports.updateUserById = async (req, res) => {
  try {
    const [isUpdated] = await User.update(req.body, {
      where: { id: req.params.id }
    })

    if (Boolean(isUpdated)) {
      const user = await User.findById(req.params.id)

      res.status(200).json({ user })
    } else {
      res.status(400).json({})
    }
  } catch (err) {
    res.status(500).json({ message: 'There is an error.', err })
  }
}

exports.deleteUserById = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } })

    res.status(200).json({})
  } catch (err) {
    res.status(500).json({ message: 'There is an error.', err })
  }
}

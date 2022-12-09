const user = require("../Model/user.model");
const bcrypt = require("bcrypt");

module.exports.createUser = async (req, res) => {
  const { name, email, password } = req.body;
  user.findOne({ email: email }, (err, User) => {
    if (User) {
      res.send({ message: "User already registored" });
    } else {
      const User = new user({ name, email, password });
      User.save();
      res.send({ message: "Successfully Registered" });
    }
  });
};

module.exports.getUser = async (req, res) => {
  const { email, password } = req.body;
  user.findOne({ email: email }, async (err, User) => {
    if (User) {
      const isMatch = await bcrypt.compare(password, User.password);
      if (isMatch) {
        res.send({ message: "Login Successfull", User: User });
      } else {
        res.send({ message: "Worng Email or Password" });
      }
    } else {
      res.send({ message: "Worng Email or Password" });
    }
  });
};

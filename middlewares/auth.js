const jwt = require("jsonwebtoken");

function isAdmin(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ error: true, message: "You Have No Access" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = jwt.decode(token);
    console.log(user.role);
    if (user.role !== 1)
      res.status(400).json({ error: true, message: "Invalid Token" });

    next();
  } catch (err) {
    console.log("ERROR");
    return res.status(400).json({ error: true, message: "Invalid Token" });
  }
}

module.exports = {
  isAdmin: isAdmin,
};

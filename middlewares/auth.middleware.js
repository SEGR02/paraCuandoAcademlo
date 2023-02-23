const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  if (token) token = token.replace("Bearer ", "");
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET_WORD,
    (err, decoded) => {
      const isAdmin = false;
      if (err) {
        res.status(400).json({
          error: "invalid token",
          message: "el token no es valido envia uno correcto",
        });
      } else if (
        decoded.email == "sebastian.gomz02@gmail.com" ||
        decoded.email == "elioian2014@gmail.com"
      ) {
        req.isAdmin = true;
        next();
      } else {
        req.token = decoded;
        next();
      }
    }
  );
};
// vamos a validar el token
// si el token es valido lo dejamos pasar a la ruta

// si no es valido respondemos anda pa sha

module.exports = authMiddleware;

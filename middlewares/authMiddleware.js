let authMiddleware = (req, res, next) => {
    if (req.session.loggedUser != undefined) {
      next();
    } else {
      res.send('Esta pagina es solo para usuarios')
    }
  }
  
  module.exports = authMiddleware;
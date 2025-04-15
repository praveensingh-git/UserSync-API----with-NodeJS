const fs = require("fs");
function logReqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now()}:${req.ip}:${req.path}:${req.method}`,
      (err) => {
        if (err) console.error("Logging failed:", err);
        
      }
    );
    next();
  };
}
module.exports={
    logReqRes,
}
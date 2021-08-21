const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BACKEND_URL": prod ? "/motion-tracker-sim-nexjts" : "",
};

/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/motion-tracker-sim-nexjts/" : "",
};

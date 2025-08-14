const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("mjs");

// mapping manual supaya Metro selalu ambil tslib dari root
config.resolver.extraNodeModules = {
  tslib: path.resolve(__dirname, "node_modules/tslib"),
};

module.exports = config;
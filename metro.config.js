const { withNativeWind: withNativeWind } = require('nativewind/metro');

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  '@gluestack-ui/themed': '@gluestack-ui/themed',
  '@gluestack-style/react': '@gluestack-style/react',
};

module.exports = withNativeWind(config, {
  input: './global.css',
});

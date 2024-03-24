/**
 *
 *
 * @template {import('next').NextConfig}
 * @param {T} config
 * @constraint
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });
    return config;
  },
});

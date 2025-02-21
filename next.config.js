const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/my-portfolio/' : '', // Replace 'my-portfolio' with your repo name
  basePath: isProd ? '/my-portfolio' : '', // Replace 'my-portfolio' with your repo name
};
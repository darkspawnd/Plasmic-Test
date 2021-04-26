
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['sn49J4xaQ8uemrquBh9tnf'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  
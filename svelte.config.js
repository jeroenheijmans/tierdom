import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      // Documentation typically wants you to include the repository
      // name in non-dev environments, because GitHub.io Pages sites
      // serve under a specific path. However, we skip that, because
      // we intend to serve the GitHub pages site with a DNS record
      // on a subdomain of our TLD anyways.
      base: '',
    },
    adapter: adapter({
      manifest: false,
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true,
    }),
  },
};

export default config;

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  base: '/docs/',
  hash: true,
  history: {
    type: 'hash',
  },
  publicPath: '/static/',
});

import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  // base: '/docs/',
  // publicPath: '/static/',
  hash: true,
  history: {
    type: 'hash',
  },
});

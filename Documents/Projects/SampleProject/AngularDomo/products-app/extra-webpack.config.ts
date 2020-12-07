import { Proxy } from '@domoinc/ryuu-proxy';
import * as manifest from './domo/manifest.json';
import * as CopyPlugin from 'copy-webpack-plugin';
const P: any = Proxy;

const proxy = new P({ manifest });

export default {
  devServer: {
    before: app => app.use(proxy.express()),
    historyApiFallback: true
  },


  // devServer: {
  //   before: (app => app.use(proxy.express()),
  //   historyApiFallback: true
  // },
  plugins: [
    new CopyPlugin({
      patterns: [{
        to: '',
        from: 'domo/**/*',
        flatten: true
      }],
    }),
  ],
};
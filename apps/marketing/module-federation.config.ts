import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'marketing',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;

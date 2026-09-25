import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const outputDirectory = resolve('dist/angular-hevy/browser');
copyFileSync(
  resolve(outputDirectory, 'index.html'),
  resolve(outputDirectory, '404.html'),
);

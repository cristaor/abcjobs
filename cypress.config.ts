import { defineConfig } from 'cypress'
import { environment } from 'src/environments/environment';
import * as registerCodeCoverageTasks from '@cypress/code-coverage/task';

export default defineConfig({
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts').default(on, config)
    },
    'baseUrl': environment.backBaseUrl
  },
  
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  },
  experimentalModifyObstructiveThirdPartyCode: true
  
})
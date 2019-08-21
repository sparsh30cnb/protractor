// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['todo-spec.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--no-sandbox']
    }
  }
  
 // directConnect: true,
 // baseUrl: 'https://testing-angular-applications.github.io',
  
 // framework: 'jasmine',
//  specs: [
//    './e2e/first-test.e2e-spec.ts'
 // ],
 // onPrepare: () => {
   // require('ts-node').register({
     // project: 'e2e'
    //});
  //},
//  useAllAngular2AppRoots: true
};

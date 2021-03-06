// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.


// This will search for files ending in .test.js and require them
// so that they are added to the webpack bundle
var context = require.context('../app/addons/warehouse/tests', true, /warehouse.edit.component[Ss]pec/);
console.log('Testing files', context.keys());
context.keys().forEach(context);
module.exports = context;

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

import app from "./initialize";
import $ from "jquery";
import _ from "lodash";
import Backbone from "backbone";
import Bootstrap from "bootstrap";
import Helpers from "./helpers";
import Utils from "./core/utils";
import FauxtonAPI from "./core/api";
import Couchdb from "./core/couchdbSession";
import "../assets/less/fauxton.less";

// Make sure we have a console.log
if (_.isUndefined(console)) {
  console = {
    log: function () {},
    trace: function () {},
    debug: function () {}
  };
}

// make sure we have location.origin
if (_.isUndefined(window.location.origin)) {
  var port = '';
  if (window.location.port) {
    port = ':' + window.location.port;
  }
  window.location.origin = window.location.protocol + '//' +
    window.location.hostname + port;
}

// Provide a global location to place configuration settings and module
// creation also mix in Backbone.Events
Object.assign(app, {
  utils: Utils,
  getParams: FauxtonAPI.utils.getParams,
  helpers: Helpers
});

FauxtonAPI.setSession(new Couchdb.Session());

// Define your master router on the application namespace and trigger all
// navigation from this instance.
FauxtonAPI.config({
  // I haven't wrapped these dispatch methods in a action
  // because I don't want to require fauxton/actions in this method.
  addHeaderLink: function (link) {
    FauxtonAPI.dispatch({
      type: 'ADD_NAVBAR_LINK',
      link: link
    });
  },

  updateHeaderLink: function (link) {
    FauxtonAPI.dispatch({
      type: 'UPDATE_NAVBAR_LINK',
      link: link
    });
  },

  removeHeaderLink: function (link) {
    FauxtonAPI.dispatch({
      type: 'REMOVE_NAVBAR_LINK',
      link: link
    });
  }
});

export default app;

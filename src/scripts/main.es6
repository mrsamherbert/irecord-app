/******************************************************************************
 * RequireJS configuration and app object construction.
 *****************************************************************************/
(function () {
  require.config({
    baseUrl: "scripts/",
    paths: {
      'app-config': '{CONFIG}', //replaced on build
      'jquery': 'libs/jquery.min',
      'jquery.mobile': 'libs/jquery.mobile.custom.min',
      'IndexedDBShim': 'libs/IndexedDBShim.min',
      'latlon': 'libs/osgridref.min',
      'latlon-ellipsoidal': 'libs/latlon-ellipsoidal.min',
      'vector3d': 'libs/vector3d.min',
      'dms': 'libs/dms.min',
      'fastclick': 'libs/fastclick.min',
      'morel': 'libs/morel',
      'underscore': 'libs/lodash.min',
      'backbone': 'libs/backbone.min',
      'marionette': 'libs/backbone.marionette.min',
      'backbone.localStorage': 'libs/backbone.localStorage-min',
      'log': 'components/common/log',
      'default_page': 'components/common/_page'
    },
    shim: {
      'latlon': {deps: ['latlon-ellipsoidal']},
      'latlon-ellipsoidal': {deps: ['vector3d', 'dms']},
      'jquery.mobile': {deps: ['config/jqm']},
      'backbone': {deps: ['jquery', 'underscore'], "exports": "Backbone"},
      'marionette': {deps: ['backbone']},
      'morel': {deps: ['IndexedDBShim']}
    },
    waitSeconds: 20
  });

  //Load the mighty app :)
  require(['app', 'config/jqm', 'components/records/router'], function (app) {
    //jquery mobile - backbone configuration should be set up by this point.
    app.start();
  });

})();

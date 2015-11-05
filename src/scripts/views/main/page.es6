/******************************************************************************
 * Welcome page view.
 *****************************************************************************/
define([
  'views/_page',
  'JST',
  'helpers/log'
], function (DefaultPage, JST, log) {
  'use strict';

  var Page = DefaultPage.extend({
    id: 'main',

    template: JST['main/page'],

    initialize: function () {
      log('views.MainPage: initialize', 'd');
      this.render();
      return this;
    },

    render: function () {
      log('views.MainPage: render', 'd');

      this.$el.html(this.template());
      $('#app').append($(this.el));
      return this;
    }
  });

  return Page;
});

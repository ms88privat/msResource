'use strict';
/*jshint esnext: true */

import msCollection from '../msCollection';

(function (window, angular){

	angular
		.module('msResource', [])
		.factory('msCollection', msCollection);

})();

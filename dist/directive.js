/*!
 * angular-scroll-panels
 * 
 * Version: 0.0.0 - 2017-04-26T10:40:19.735Z
 * License: MIT
 */


'use strict';

angular.module('angular-scroll-panels', [])
.directive('scrollContainer', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {},
    templateUrl: 'scroll-container.html',
    controller: ['$scope', function ($scope) {
      var panels = [];

      // Check if only one panel is open
      var setOnlyPanel = function() {
        var openPanels = [];
        panels.forEach(function(p) {
          p.isOpen && openPanels.push(p);
          p.isOnlyPanel = false;
        });

        if (openPanels.length === 1) {
          openPanels[0].isOnlyPanel = true;
        }
      };

      // All panels registers themselves
      this.registerPanel = function(scope) {
        panels.push(scope);
        setOnlyPanel();
      };

      // One of the panels opened or closed
      this.togglePanel = function() {
        setOnlyPanel();
      };
    }]
  };
})

.directive('scrollPanel', function () {
  return {
    require: '^^scrollContainer',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      isOpen: '=',
      width: '='
    },
    templateUrl: 'scroll-panel.html',
    link: function (scope, element, attrs, containerCtrl) {
      scope.isOnlyPanel = false;
      containerCtrl.registerPanel(scope);

      scope.$watch('isOpen', function(newValue, oldValue) {
        if (newValue !== oldValue) {
          containerCtrl.togglePanel();
        }
      });

      // Panel width can be static or dynamic
      scope.$watch('width', function(newValue, oldValue) {
        var hasWidth = angular.isNumber(newValue);
        element.css('width', hasWidth ? (newValue + 'px') : 'auto');
        element.css('flex', hasWidth ? '0 0 auto' : '3');
      });
    }
  };
})
;

angular.module('angular-scroll-panels').run(['$templateCache', function($templateCache) {$templateCache.put('scroll-container.html','<div class="scroll-container"><div class="scroll-container-inner" ng-transclude=""></div></div>');
$templateCache.put('scroll-panel.html','<div ng-show="isOpen" class="scroll-panel" ng-class="{\'scroll-panel-single\': isOnlyPanel}" ng-transclude=""><div></div></div>');}]);
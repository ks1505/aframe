var registerComponent = require('../core/component').registerComponent;
var THREE = require('../lib/three');
var utils = require('../utils/');
var bind = utils.bind;
var PolyfillControls = require('../utils').device.PolyfillControls;

// To avoid recalculation at every mouse movement tick
var PI_2 = Math.PI / 2;

/**
 * look-controls. Update entity pose, factoring mouse, touch, and WebVR API data.
 */
module.exports.Component = registerComponent('look-controls', {
  tick: function (){
    window.addEventListener('devicemotion', function(){
      var acc = event.acceleration;
      var ax=0;
      var ay=0;
      var az=0;
      ax += acc.x*9.8;
      ay += acc.y*9.8;
      az += acc.z*9.8;
      document.getElementById('camera').setAttribute('position', 'ax ay az')
    }, true);
    window.addEventListener('deviceorientation', function(evt){
      var oal=0;
      var obe=0;
      var oga=0;
      oal = evt.alpha;
      obe = evt.beta;
      oga = evt.gamma;
      document.getElementById('camera').setAttribute('rotation', 'oal obe oga') 
    }, true);  
  }
});

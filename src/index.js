"use strict";
window.ImagineaOSSWidget = (function () {
  var obj = function() {

  }

  obj.prototype.init = function (selector) {
    if (selector) {
      var element = document.body.querySelector(selector);

      if (element) {
        var wrapperParent = element.parentNode, 
          wrapper = document.createElement('div');

        wrapperParent.appendChild(wrapper);
        wrapper.appendChild(element);
        
        // add click event
        element.addEventListener("click", function () {
          var container = wrapper.querySelector('.oss-container');          
          // add oss content on first click
          if (container === null) {
            var data = { title: 'Imaginea Opensource Software Projects', content: 'Papyrus' };
            var html = Imaginea.OSS.Templates.index(data);

            container = document.createElement('div');
            container.classList.add('oss-container');
            container.innerHTML = html;
            wrapper.appendChild(container);
          } else {
            container.classList.toggle('oss-hide');
          }
        });
      }
    }
  }

  return obj;
})();

function ossClose(event) {
  var target = event.target;
  if (target) {
    var container = target.parentNode.parentNode;
    if (container) {
      container.classList.add('oss-hide');    
    }
  }
}

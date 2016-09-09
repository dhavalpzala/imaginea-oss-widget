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
            var data = getContextData(); 
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

function getContextData() {
  return { 
    projects: [{
      title: 'Papyrus',
      description: '',
      shortName: 'P',
      logoUrl: ''
    }, {
      title: 'kode beagle',
      description: '',
      shortName: 'KB',
      logoUrl: ''
    }, {
      title: 'uvCharts',
      description: '',
      shortName: 'UV',
      logoUrl: ''
    }, {
      title: 'Openstack',
      description: '',
      shortName: 'O',
      logoUrl: ''
    }, {
      title: 'Active Grid',
      description: '',
      shortName: 'AG',
      logoUrl: ''
    }]
  };
}

function ossClose(event) {
  var target = event.target;
  if (target) {
    var container = target.parentNode.parentNode;
    if (container) {
      container.classList.add('oss-hide');    
    }
  }
}

function selectTab(event) {
  var element = event.target;

  if (element && element.classList.contains('oss-tab') && !element.classList.contains('active')) {
      var activeElement = element.parentNode.querySelector('.active');
      if (activeElement) {
          activeElement.classList.remove('active');
      }
      element.classList.add('active');

      // tab content 
      var contents = element.parentNode.nextElementSibling;
      var activeTab = contents.querySelector('.active');
      var selectedIndex = 0;
      var temp = element;                  
      while((temp = temp.previousElementSibling) != null ) 
          selectedIndex++;
          
      if (activeTab) {
          activeTab.classList.remove('active');
      }
      contents.children[selectedIndex].classList.add('active');
  } 
}
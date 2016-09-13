"use strict";
var IMAGINEA_FEED_URL = 'https://blog.imaginea.com/feed/'; 

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

        getFeed();
      }
    }
  }

  return obj;
})();

function getContextData() {
  return { 
    projects: [{
      title: 'Papyrus',
      description: 'Experimental Visual Programming Environment using Angular 2, RxJS, TypeScript which allows for Direct Manipulation',
      shortName: 'P',
      logoUrl: '',
      url: 'https://hashd.github.io/papyrus'
    }, {
      title: 'kode beagle',
      description: 'KodeBeagle - Large scale code analytics and search using Apache Spark',
      shortName: 'KB',
      logoUrl: '',
      url: 'http://kodebeagle.com'

    }, {
      title: 'uvCharts',
      description: 'Simple yet powerful JavaScript Charting library built using d3.js',
      shortName: 'UV',
      logoUrl: '',
      url: 'http://imaginea.github.com/uvCharts'
    }, {
      title: 'mViewer',
      description: 'A simple web-based Administration and Management Tool for MongoDB',
      shortName: 'MV',
      logoUrl: '',
      url: 'http://www.youtube.com/watch?v=PbgNtvjc3Ug'
    }, {
      title: 'matisse',
      description: 'A shared whiteboard using HTML5 Canvas with server on socket.io and node.js',
      shortName: 'M',
      logoUrl: '',
      url: 'http://youtu.be/F4hA1A1PVxw'
    }]
  };
}

function getFeed() {
  var xhttp;
  if (window.XMLHttpRequest) {
    // code for modern browsers
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", IMAGINEA_FEED_URL, true);
  xhttp.send();
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
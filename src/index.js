"use strict";
//var IMAGINEA_FEED_URL = 'https://blog.imaginea.com/feed/';
var IMAGINEA_FEED_URL = 'imaginea-feed.xml'; 
var IMAGINEA_PROJECTS_URL = 'projects.json'; 

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
            getContextData().then(function (data) {
              var html = Imaginea.OSS.Templates.index(data);
              container = document.createElement('div');
              container.classList.add('oss-container');
              container.innerHTML = html;
              wrapper.appendChild(container);
            }, function(reason) {
              console.log(reason);
            });
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
  var context = {};
  var promise = new Promise(function (resolve, reject) {
    // get projects
    getContent(IMAGINEA_PROJECTS_URL, function (projects) {
      if (projects) {
        context.projects = JSON.parse(projects).projects;
        
        if (context.projects && context.feeds) {
          resolve(context);
        }
      } else {
        reject(new Error('Error while getting Projects'));
      }
    });

    // get feeds
    getContent(IMAGINEA_FEED_URL, function (feeds) {
      if (feeds) {
        var parser = new DOMParser(),
          feedsDOM = parser.parseFromString(feeds, "application/xml");

        context.feeds = [];
        feedsDOM.querySelectorAll('item').forEach(function (item) {
          var feed = {};
          feed.title = item.querySelector('title').innerHTML;
          feed.link = item.querySelector('link').innerHTML;
          feed.description = item.querySelector('description').innerHTML.replace("<![CDATA[", "").replace("]]>", "").replace('[&#8230;]', '...');
          context.feeds.push(feed);
        });

        if (context.projects && context.feeds) {
          resolve(context);
        }
      } else {
         reject(new Error('Error while getting Feeds'));
      }
    });
  });
  
  return promise;
}

function getContent(url, cb) {
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
      cb(this.responseText);
    } else if (this.status === 404) {
      cb(null);
    }
  };
  xhttp.open("GET", url, true);
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
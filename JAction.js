"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (parent, undefined) {
  /* 
  JAction2
  made by Erlangga
  ! DO NOT COPY PASTE IT'S ILLEGAL!
  see this project directories on github:
  https://www.github.com/pasha1110.github.io/JAction-2.0.0
  or in the web:
  https://pasha1110.github.io/JAction-2.0.0
  */

  /**
  
  @namespace JAction
  
  DOM API'S VERSION 2 FROM JACTION2
  
  */
  //PRIVATE and main Object of JAction
  var JAction = {};

  JAction.whenReady = function (functionWhenTheDOMIsLoaded) {
    // if document.readyState or the browser is finish loading
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(functionWhenTheDOMIsLoaded, 1);
    } else {
      document.addEventListener("DOMContentLoaded", functionWhenTheDOMIsLoaded);
    }
  }; // this function will select all current element (id)


  JAction.select = function (id) {
    if (_typeof(id) === "object") {
      return [id];
    } else {
      return document.querySelectorAll(id);
    }
  }; // select specific element 


  JAction.selectSpecific = function (id) {
    if (_typeof(id) === "object") {
      return [id];
    } else {
      return document.querySelector(id);
    }
  }; // object style 


  JAction.style = function (id, style) {
    // select the element
    var el = JAction.select(id) || id; // define the variable

    var i, ell, nel; // get the length of element

    ell = el.length; // do looping

    for (i = 0; i < ell; i++) {
      nel = el[i]; // get the value of object style

      for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            prop = _Object$entries$_i[0],
            val = _Object$entries$_i[1];

        // set the style
        nel.style[prop] = val;
      }
    }
  }; // style inline


  JAction.styleInline = function (id, prop, val) {
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    // get the element
    var el = JAction.select(id) || id; // define the variable

    var i, ell, nel; // get the element length

    ell = el.length; // do looping

    for (i = 0; i < ell; i++) {
      nel = el[i]; // set the style using setProperty function

      nel.style.setProperty(prop, val, priority);
    }
  }; // getting style from the element


  JAction.getStyle = function (id) {
    var el = JAction.selectSpecific(id) || id;
    return el.style;
  }; // get attribute 


  JAction.getAttr = function (id, propertyName) {
    // select the element
    var el = JAction.selectSpecific(id) || id; // if the propertyName is not a string

    if (typeof propertyName !== "string") {
      throw new Error("JActionError: type of attr name must be a string! receive", _typeof(propertyName));
    }

    return el.getAttribute(propertyName);
  }; // set attribute


  JAction.setAttr = function (id, prop, val) {
    // get the element
    var el = JAction.selectSpecific(id) || id; // if the prop is not a string 

    if (typeof prop !== "string") {
      throw new Error("JActionError: type of prop name must be a string! receive", _typeof(prop));
    }

    el.setAttribute(prop, val);
  }; // set event


  JAction.setEvent = function (id, event, fn) {
    // get the element
    var el = JAction.selectSpecific(id) || id; // if event is not a string

    if (typeof event !== "string") {
      throw new Error("JActionError: type of event must be a string! receive", _typeof(event));
    }

    el.addEventListener(event, fn);
  }; // set html


  JAction.setHTML = function (id, html) {
    // get the element
    var el = JAction.selectSpecific(id) || id; // set the element html content

    el.innerHTML = html;
  };

  JAction.setText = function (id, text) {
    var el = JAction.selectSpecific(id) || id;
    el.innerText = text;
  };

  JAction.getHTML = function (id) {
    var el = JAction.selectSpecific(id) || id;
    return el.innerHTML;
  };

  JAction.getText = function (id) {
    var el = JAction.selectSpecific(id) || id;

    if (typeof el.innerText === "undefined") {
      return el.textContent;
    } else {
      return el.innerText;
    }
  };

  JAction.appendHTML = function (id, html) {
    var el = JAction.selectSpecific(id) || id;
    el.innerHTML += html;
  };

  JAction.appendText = function (id, text) {
    var el = JAction.selectSpecific(id) || id;
    el.innerText += text;
  };

  JAction.getValue = function (id) {
    var el = JAction.selectSpecific(id) || id;
    return el.value;
  };

  JAction.hideElement = function (id) {
    JAction.styleInline(id, "display", "none");
  };

  JAction.showElement = function (id) {
    JAction.styleInline(id, "display", "block");
  };

  JAction.toggle = function (id) {
    var el = JAction.selectSpecific(id) || id;

    if (el.style.display == "none") {
      JAction.styleInline(id, "display", "block");
    } else {
      JAction.styleInline(id, "display", "none");
    }
  };

  JAction.createElement = function (el, attr, value) {
    var tn, cel, vl;
    tn = el.toUpperCase();
    cel = document.createElement(tn);

    for (var _i2 = 0, _Object$entries2 = Object.entries(attr); _i2 < _Object$entries2.length; _i2++) {
      var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          attrn = _Object$entries2$_i[0],
          attrv = _Object$entries2$_i[1];

      cel.setAttribute(attrn, attrv);
    }

    cel.innerHTML = value;
    return cel;
  };

  JAction.appendElement = function (id, nodeElement) {
    var el = JAction.selectSpecific(id) || id;
    el.appendChild(nodeElement);
  };

  JAction.setStorageItem = function (key, value) {
    localStorage.setItem(key, value);
  };

  JAction.getStorageItem = function (key) {
    var results;
    results = localStorage.getItem(key);
    return results;
  };

  JAction.removeStorageItem = function (key) {
    localStorage.removeItem(key);
  }; // ajax object 


  JAction.doAjax = function (ajax) {
    if (window.XMLHttpRequest) {
      notIE(ajax);
    } else {
      ifIE(ajax);
    }
  };

  JAction.hideAll = function (id) {
    var el, ell, i, nel;
    i = 0;
    el = JAction.select(id);
    ell = el.length;

    for (; i < ell; i++) {
      nel = el[i];
      JAction.styleInline(nel, "display", "none");
    }
  };

  JAction.showAll = function (id) {
    var el, ell, i, nel;
    i = 0;
    el = JAction.select(id);
    ell = el.length;

    for (; i < ell; i++) {
      nel = el[i];
      JAction.styleInline(nel, "display", "block");
    }
  }; //like JAction.setAttr, but this function will select all the selected html elements 


  JAction.setAttrAll = function (id, attr, value) {
    var el = JAction.select(id);
    var i, ell, nel;
    ell = el.length;

    for (i = 0; i < ell; i++) {
      nel = el[i];
      nel.setAttribute(attr, value);
    }
  }; //like JAction.setHTML, but for all selected elements


  JAction.setHTMLAll = function (id, html) {
    var el = JAction.select(id);
    var i, ell, nel;
    ell = el.length;

    for (i = 0; i < ell; i++) {
      nel = el[i];
      nel.innerHTML = html;
    }
  }; //like JAction.setText, but for all selected elements


  JAction.setTextAll = function (id, text) {
    var el = JAction.select(id);
    var i, ell, nel;
    ell = el.length;

    for (i = 0; i < ell; i++) {
      nel = el[i];
      nel.innerText = text;
    }
  };

  JAction.appendHTMLAll = function (id, html) {
    var el = JAction.select(id);
    var i, ell, nel;
    ell = el.length;

    for (i = 0; i < ell; i++) {
      nel = el[i];
      nel.innerHTML += html;
    }
  };

  JAction.appendTextAll = function (id, text) {
    var el = JAction.select(id);
    var i, ell, nel;
    ell = el.length;

    for (i = 0; i < ell; i++) {
      nel = el[i];
      nel.innerText += text;
    }
  };

  JAction.setEventAll = function (id, event, fn) {
    var i, el, ell, nel;
    el = JAction.select(id);
    ell = el.length;
    i = 0;

    for (; i < ell; i++) {
      nel = el[i];
      nel.addEventListener(event, fn);
    }
  };

  JAction.moveElement = function (id, target) {
    var el = JAction.selectSpecific(id) || id;
    var elTarget = JAction.selectSpecific(target) || id;
    elTarget.appendChild(el);
  };

  JAction.styleSpecific = function (id, prop, val) {
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    var el = JAction.selectSpecific(id) || id;
    el.style.setProperty(prop, val, priority);
  };

  JAction.cssSpecific = function (id, style) {
    var el = JAction.selectSpecific(id) || id;

    for (var _i3 = 0, _Object$entries3 = Object.entries(style); _i3 < _Object$entries3.length; _i3++) {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
          prop = _Object$entries3$_i[0],
          val = _Object$entries3$_i[1];

      el.style[prop] = val;
    }
  };

  JAction.toggleClass = function (id, classname) {
    var el = JAction.selectSpecific(id) || id;
    el.classList.toggle(classname);
  };

  JAction.toggleClassAll = function (id, classname) {
    var i, el, ell, nel;
    el = JAction.select(id);
    ell = el.length;
    i = 0;

    for (; i < ell; i++) {
      nel = el[i];
      nel.classList.toggle(classname);
    }
  };

  JAction.fadeIn = function (id) {
    var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1000";
    // let el = JAction.selectSpecific(id) || id
    JAction.styleInline(id, "transition", "".concat(dur, "ms"));
    JAction.style(id, {
      "opacity": "1"
    });
  };

  JAction.fadeOut = function (id) {
    var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "1000";
    JAction.styleInline(id, "transition", "".concat(dur, "ms"));
    JAction.style(id, {
      "opacity": "0"
    });
  };

  JAction.whenClick = function (id, fn) {
    JAction.setEvent(id, "click", fn);
  };

  JAction.whenAllClicked = function (id, fn) {
    JAction.setEventAll(id, "click", fn);
  };

  JAction.whenHover = function (id, f1, f2) {
    JAction.setEventAll(id, "mouseenter", f1);
    JAction.setEventAll(id, "mouseleave", f2);
  };

  JAction.createAttr = function (attrName, attrValue) {
    var ca, cv;
    cv = attrValue;
    ca = document.createAttribute(attrName);
    ca.value = cv;
    return ca;
  };

  JAction.removeAttr = function (id, attrName) {
    var el = JAction.selectSpecific(id) || id;
    el.removeAttribute(attrName);
  };

  JAction.setClass = function (id, className) {
    var elId = JAction.selectSpecific(id) || id;
    var createClass = JAction.createAttr("class", className);
    elId.setAttributeNode(createClass);
  };

  JAction.getClass = function (id) {
    return JAction.getAttr(id, "class");
  };

  JAction.setId = function (id, idName) {
    var elId = JAction.selectSpecific(id) || id;
    var createId = JAction.createAttr("id", idName);
    elId.setAttributeNode(createId);
  };

  JAction.getId = function (id) {
    return JAction.getAttr(id, "id");
  };

  JAction.setLink = function (id, link) {
    var elid = JAction.selectSpecific(id) || id;
    var createHref = JAction.createAttr("href", link);
    elid.setAttributeNode(createHref);
  };

  JAction.getLink = function (id) {
    return JAction.getAttr(id, "href");
  };

  JAction.toggleFade = function (id) {
    var dur = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
    var el = JAction.selectSpecific(id) || id;

    if (el.style.opacity == "0") {
      JAction.fadeIn(id, dur);
    } else {
      JAction.fadeOut(id, dur);
    }
  };

  JAction.getStyle = function (id, prop) {
    var el = JAction.selectSpecific(id) || id;

    if (typeof prop !== "string") {
      console.error("typeof prop must be a string!, received: ", _typeof(prop));
    }

    var getStyle = window.getComputedStyle(el, null).getPropertyValue(prop);
    return getStyle;
  };

  JAction.each = function (id, cb) {
    var el = JAction.select(id) || id;
    el.forEach(cb);
  };

  JAction.getElementId = function (id) {
    return document.getElementById(id);
  };

  JAction.loadJSON = function (url, cb) {
    JAction.doAjax({
      url: url,
      method: "GET",
      action: function action(data) {
        var jsonData = JSON.parse(data) || data;
        cb(jsonData);
      }
    });
  };

  JAction.displayData = function (target, data) {
    function Render(ElementTarget, data) {
      // this.renderTarget = ElementTarget
      // this.renderData = data
      var target = document.getElementById(ElementTarget);
      var html = target.innerHTML;
      return html.replace(/{{(.*?)}}/g, function (match) {
        var regex = match.split(/{{|}}/).filter(Boolean)[0].trim();
        var magic = data[regex];

        if (typeof magic === "undefined") {
          var rule = eval('`${' + regex + '}`');
          return rule;
        } else {
          var dataRepeater = target.getAttribute("data-repeat");

          if (dataRepeater) {
            var getObject = eval(dataRepeater);

            if (_typeof(getObject) !== "object") {
              console.log("Type of data must be an Object");
            }

            var i = 0;

            while (i < getObject.length) {
              var _html = "";
              _html += getObject[i][regex];
              console.log(getObject[i][regex]);
              i++;
              return _html;
            }
          } else {
            return magic;
          }
        }
      });
    }

    var renderContent = Render(target, data);
    document.getElementById(target).innerHTML = renderContent;
  };

  function notIE(ajax) {
    var xml = new XMLHttpRequest();
    var url = ajax.url;
    var method = ajax.method;

    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        ajax.action(data);
      }
    };

    xml.open(method, url, true);
    xml.send();
  }

  function ifIE(ajax) {
    var xml = new ActiveXObject("Microsoft.XMLHTTP");
    var url = ajax.url;
    var method = ajax.method;

    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        ajax.action(data);
      }
    };

    xml.open(method, url, true);
    xml.send();
  } // exporting sessions


  try {
    module.exports.jct = JAction;
  } catch (err) {
    //parent is a public Object, embedded on window Object
    //parent.jct is an ALIAS of JAction
    parent.jct = JAction; //parent.JAction is the default Object

    parent.JAction = JAction;
  }
})(window); // made by LOVE 
// ~by Erlangga

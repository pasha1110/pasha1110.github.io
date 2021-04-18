(function (parent, undefined) {
  /* 

JAction2
made by Erlangga
! DO NOT COPY PASTE IT'S ILLEGAL!

*/

  /**
  
  @namespace JAction
  
  DOM API'S VERSION 2 FROM JACTION2
  
  */
  // main object
  const JAction = {}

  JAction.whenReady = function (functionWhenTheDOMIsLoaded) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setTimeout(functionWhenTheDOMIsLoaded, 1)
    } else {
      document.addEventListener("DOMContentLoaded", functionWhenTheDOMIsLoaded)
    }
  }


  // this function will select all current element (id)
  JAction.select = function (id) {
    if (typeof id === "object") {
      return [id]
    } else {
      return document.querySelectorAll(id)
    }
  }

  // select specific element 
  JAction.selectSpecific = function (id) {
    if (typeof id === "object") {
      return [id]
    } else {
      return document.querySelector(id)
    }
  }


  // object style 
  JAction.style = function (id, style) {
    let el = JAction.select(id)
    var i, ell, nel;
    ell = el.length
    for (i = 0; i < ell; i++) {
      nel = el[i]
      for (const [prop, val] of Object.entries(style)) {
        nel.style[prop] = val
      }
    }
  }

  // style inline
  JAction.styleInline = function (id, prop, val, priority = "") {
    let el = JAction.select(id)
    var i, ell, nel;
    ell = el.length
    for (i = 0; i < ell; i++) {
      nel = el[i]
      nel.style.setProperty(prop, val, priority)
    }
  }

  JAction.getAttr = function (id, propertyName) {
    let el = JAction.selectSpecific(id)
    if (typeof propertyName !== "string") {
      throw new Error("JActionError: type of attr name must be a string!")
    }
    return el.getAttribute(propertyName)
  }


  JAction.setAttr = function (id, prop, val) {
    let el = JAction.selectSpecific(id)
    if (typeof prop !== "string") {
      throw new Error("JActionError: type of prop name must be a string!")
    }
    el.setAttribute(prop, val)
  }

  JAction.setEvent = function (id, event, fn) {
    var el = JAction.selectSpecific(id)
    if (typeof event !== "string") {
      throw new Error("JActionError: type of event must be a string!")
    }
    el.addEventListener(event, fn)
  }

  JAction.setHTML = function (id, html) {
    let el = JAction.selectSpecific(id)
    el.innerHTML = html
  }

  JAction.setText = function (id, text) {
    let el = JAction.selectSpecific(id)
    el.innerText = text
  }

  JAction.getHTML = function (id) {
    let el = JAction.selectSpecific(id)
    return el.innerHTML
  }

  JAction.getText = function (id) {
    let el = JAction.selectSpecific(id)
    if (typeof el.innerText === "undefined") {
      return el.textContent
    } else {
      return el.innerText
    }
  }

  JAction.appendHTML = function (id, html) {
    let el = JAction.selectSpecific(id)
    el.innerHTML += html
  }

  JAction.appendText = function (id, text) {
    let el = JAction.selectSpecific(id)
    el.innerText += text
  }

  JAction.getValue = function (id) {
    let el = JAction.selectSpecific(id)
    return el.value
  }

  JAction.hideElement = function (id) {
    JAction.styleInline(id, "display", "none")
  }


  JAction.showElement = function (id) {
    JAction.styleInline(id, "display", "block")
  }

  JAction.toggle = function (id) {
    let el = JAction.selectSpecific(id)
    if (el.style.display == "none") {
      JAction.styleInline(id, "display", "block")
    } else {
      JAction.styleInline(id, "display", "none")
    }
  }

  JAction.createElement = function (el, attr, value) {
    let tn, cel, vl;
    tn = el.toUpperCase()
    cel = document.createElement(tn)
    for (const [attrn, attrv] of Object.entries(attr)) {
      cel.setAttribute(attrn, attrv)
    }
    cel.innerHTML = value

    return cel
  }

  JAction.appendElement = function (id, nodeElement) {
    let el = JAction.selectSpecific(id)
    el.appendChild(nodeElement)
  }

  JAction.setStorageItem = function (key, value) {
    localStorage.setItem(key, value)
  }

  JAction.getStorageItem = function (key) {
    let results;
    results = localStorage.getItem(key)
    return results
  }


  JAction.removeStorageItem = function (key) {
    localStorage.removeItem(key)
  }


  // ajax object 
  JAction.doAjax = function (ajax) {
    if (window.XMLHttpRequest) {
      notIE(ajax)
    } else {
      ifIE(ajax)
    }
  }

  parent.jct = JAction


  function notIE(ajax) {
    let xml = new XMLHttpRequest()
    const url = ajax.url
    const method = ajax.method

    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = this.responseText
        ajax.action(data)
      }
    }

    xml.open(method, url, true)
    xml.send()
  }

  function ifIE(ajax) {
    let xml = new ActiveXObject("Microsoft.XMLHTTP")
    const url = ajax.url
    const method = ajax.method

    xml.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const data = this.responseText
        ajax.action(data)
      }
    }

    xml.open(method, url, true)
    xml.send()

  }
}(window))


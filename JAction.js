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
  const JAction = {}


  JAction.whenReady = function (functionWhenTheDOMIsLoaded) {
    // if document.readyState or the browser is finish loading
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

    // select the element
    let el = JAction.select(id)

    // define the variable
    var i, ell, nel;

    // get the length of element
    ell = el.length

    // do looping
    for (i = 0; i < ell; i++) {
      nel = el[i]

      // get the value of object style
      for (const [prop, val] of Object.entries(style)) {

        // set the style
        nel.style[prop] = val
      }
    }
  }

  // style inline
  JAction.styleInline = function (id, prop, val, priority = "") {

    // get the element
    let el = JAction.select(id)

    // define the variable
    var i, ell, nel;

    // get the element length
    ell = el.length

    // do looping
    for (i = 0; i < ell; i++) {
      nel = el[i]

      // set the style using setProperty function
      nel.style.setProperty(prop, val, priority)
    }
  }

  // getting style from the element
  JAction.getStyle = function (id) {
    let el = JAction.selectSpecific(id)
    return el.style
  }

  // get attribute 
  JAction.getAttr = function (id, propertyName) {

    // select the element
    let el = JAction.selectSpecific(id)

    // if the propertyName is not a string
    if (typeof propertyName !== "string") {
      throw new Error("JActionError: type of attr name must be a string! receive",typeof propertyName)
    }
    return el.getAttribute(propertyName)
  }


  // set attribute
  JAction.setAttr = function (id, prop, val) {

    // get the element
    let el = JAction.selectSpecific(id)

    // if the prop is not a string 
    if (typeof prop !== "string") {
      throw new Error("JActionError: type of prop name must be a string! receive",typeof prop)
    }
    el.setAttribute(prop, val)
  }

  // set event
  JAction.setEvent = function (id, event, fn) {

    // get the element
    var el = JAction.selectSpecific(id)

    // if event is not a string
    if (typeof event !== "string") {
      throw new Error("JActionError: type of event must be a string! receive",typeof event)
    }
    el.addEventListener(event, fn)
  }

  // set html
  JAction.setHTML = function (id, html) {

    // get the element
    let el = JAction.selectSpecific(id)

    // set the element html content
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


  JAction.hideAll = function (id) {
    let el, ell, i, nel;
    i = 0;
    el = JAction.select(id)
    ell = el.length;
    for (; i < ell; i++) {
      nel = el[i]
      JAction.styleInline(nel, "display", "none")
    }
  }

  JAction.showAll = function (id) {
    let el, ell, i, nel;
    i = 0;
    el = JAction.select(id)
    ell = el.length;
    for (; i < ell; i++) {
      nel = el[i]
      JAction.styleInline(nel, "display", "block")
    }
  }

  //like JAction.setAttr, but this function will select all the selected html elements 
  JAction.setAttrAll = function (id, attr, value) {
    let el = JAction.select(id)
    var i, ell, nel;
    ell = el.length
    for (i = 0; i < ell; i++) {
      nel = el[i]
      nel.setAttribute(attr, value)
    }
  }

  //like JAction.setHTML, but for all selected elements
  JAction.setHTMLAll = function (id, html) {
    let el = JAction.select(id)
    var i, ell, nel;
    ell = el.length
    for (i = 0; i < ell; i++) {
      nel = el[i]
      nel.innerHTML = html
    }
  }

  //like JAction.setText, but for all selected elements
  JAction.setTextAll = function (id, text) {
    let el = JAction.select(id)
    var i, ell, nel;
    ell = el.length
    for (i = 0; i < ell; i++) {
      nel = el[i]
      nel.innerText = text
    }
  }

  JAction.appendHTMLAll = function (id, html) {
    let el = JAction.select(id)
    var i, ell, nel;
    ell = el.length
    for (i = 0; i < ell; i++) {
      nel = el[i]
      nel.innerHTML += html
    }
  }

  JAction.appendTextAll = function (id, text) {
    let el = JAction.select(id)
    var i, ell, nel;
    ell = el.length
    for (i = 0; i < ell; i++) {
      nel = el[i]
      nel.innerText += text
    }
  }



  JAction.setEventAll = function (id, event, fn) {
    let i, el, ell, nel;
    el = JAction.select(id)
    ell = el.length
    i = 0;
    for (; i < ell; i++) {
      nel = el[i]
      nel.addEventListener(event, fn)
    }
  }

  JAction.moveElement = function (id, target) {
    const el = JAction.selectSpecific(id)
    const elTarget = JAction.selectSpecific(target)
    elTarget.appendChild(el)
  }

  JAction.styleSpecific = function (id, prop, val, priority = "") {
    let el = JAction.selectSpecific(id)
    el.style.setProperty(prop, val, priority)
  }

  JAction.cssSpecific = function (id, style) {
    let el = JAction.selectSpecific(id)
    for (const [prop, val] of Object.entries(style)) {
      el.style[prop] = val
    }
  }

  JAction.toggleClass = function (id, classname) {
    let el = JAction.selectSpecific(id)
    el.classList.toggle(classname)
  }

  JAction.toggleClassAll = function (id, classname) {
    let i, el, ell, nel;
    el = JAction.select(id)
    ell = el.length
    i = 0;
    for (; i < ell; i++) {
      nel = el[i]
      nel.classList.toggle(classname)
    }
  }

  JAction.fadeIn = function (id, dur = "1000") {
    // let el = JAction.selectSpecific(id)
    JAction.styleInline(id, "transition", `${dur}ms`)
    JAction.style(id, {
      "opacity": "1"
    })

  }

  JAction.fadeOut = function (id, dur = "1000") {
    JAction.styleInline(id, "transition", `${dur}ms`)
    JAction.style(id, {
      "opacity": "0"
    })
  }

  JAction.whenClick = function (id, fn) {
    JAction.setEvent(id, "click", fn)
  }

  JAction.whenAllClicked = function (id, fn) {
    JAction.setEventAll(id, "click", fn)
  }

  JAction.whenHover = function (id, f1, f2) {
    JAction.setEventAll(id, "mouseenter", f1)
    JAction.setEventAll(id, "mouseleave", f2)
  }
  
  JAction.createAttr = function (attrName,attrValue){
    let ca, cv;
    cv = attrValue
    ca = document.createAttribute (attrName)
    ca.value = cv

    return ca
  }
  
  JAction.removeAttr = function (id,attrName){
    let el = JAction.selectSpecific (id)
    el.removeAttribute (attrName)
  }
  
  JAction.setClass = function (id,className){
    let elId = JAction.selectSpecific (id)
    let createClass = JAction.createAttr ("class",className)
  
    elId.setAttributeNode (createClass)
  }
  
  JAction.getClass = function (id){
    return JAction.getAttr (id,"class")
  }
  
  JAction.setId = function (id,idName){
    let elId = JAction.selectSpecific (id)
    let createId = JAction.createAttr ("id",idName)
    
    elId.setAttributeNode (createId)
  }
  
  JAction.getId = function (id){
    return JAction.getAttr (id,"id")
  }
  
  JAction.setLink = function (id,link){
    let elid = JAction.selectSpecific (id)
    let createHref = JAction.createAttr ("href",link)
    
    elid.setAttributeNode (createHref)
  }
  
  JAction.getLink = function (id){
    return JAction.getAttr (id,"href")
  }

  //parent is a public Object, embedded on window Object

  //parent.jct is an ALIAS of JAction
  parent.jct = JAction

  //parent.JAction is the default Object
  parent.JAction = JAction


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

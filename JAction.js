/*
  JAction version: 1.0.0.
  author: Erlangga,
  DO NOT COPY PASTE IT'S ILLEGAL
*/
  
//main function / home of JAction

/*
  
  DOM API...
  ENJOY
  
*/
(function (root, undefined) {
    "use_strict"
    
    //JAction function
    function JAction(sel) {
      
        //check, if type of sel is a function
        if (typeof sel === "function") {
          //then check the document ready or not
            if (document.readyState === "complete" || document.readyState === "interactive") {
              
              //if ready set timeout sel, 1 ms
                setTimeout(sel, 1)
                
              //else
            } else {
              //add event to the browser when the dom content is loaded do sel
                document.addEventListener("DOMContentLoaded", sel)
            }
            
           //main block 
        } else {
          
          //main method
            const self = {
              //get element from DOM (document object model), this method will select first element from the DOM tree
                el: document.querySelector(sel),
                
                //html method, for manipulate html conetent from element
                html: function (html) {
                  
                  //if user give html code
                    if (html) {
                     //then update element html content
                        self.el.innerHTML = html
                    } 
                    // if user NOT give html code
                    else {
                     //return element html content
                        return self.el.innerHTML
                    }
                    // return self for chaining method
                    return self
                },
                
                //text method, for manipulate text from element
                text: function (text) {
                  
                  //if user give the text
                    if (text) {
                      //will update element text content
                        self.el.innerText = text
                    } else {
                      
                      //if user NOT give text
                      //return text content of the element
                        return self.el.innerText
                    }
                    
                    // return self for chaining method
                    return self
                },
                
                //appendText method, append text content for element
                appendText: function (text) {
                    self.el.innerText += text
                },
                
                //appendHTML method, append html content for element
                appendHTML: function (html) {
                    self.el.innerHTML += html
                },
                
                //event method(my favorite method)
                event: function (events, cb) {
                    self.el.addEventListener(events, cb)
                },
                
                //hover method, when you mouse hover the element, it will change
                hover: function (cb1, cb2) {
                    //using event method
                    self.event("mouseenter", cb1)
                    self.event("mouseleave", cb2)
                },
                
                //css(my favorite method), for styling element
                css: function (...css) {
                  
                  //if the css length greater than 2, return element style
                    if (css.length > 2) {
                        return self.el.style;
                    } else if (typeof css[0] === "string") {
                        this.el.style[css[0]] = css[1]
                    } else if (typeof css[0] === "object") {
                        var css = css[0]
                        for (const [key, value] of Object.entries(css)) {
                            self.el.style[key] = value
                        }
                    } else {
                        console.error(new Error("JActionError: type of css must be an object or string. Received: ", typeof css[0]))
                    }

                    return self
                },

                value: function () {
                    return self.el.value
                },

                click: function (cb) {
                    /** 
                     * @function click allow you add click event to element
                    */
                    self.event("click", cb)
                    return self
                },

                toggle: function () {
                    if (self.el.style.display === "none") {
                        self.el.style.display = "block"
                    } else {
                        self.el.style.display = "none"
                    }
                    return self
                },

                toggleClass: function (className) {
                    if (!className) {
                        return
                    } else {
                        self.el.classList.toggle(className)
                    }
                },

                setAttr: function (attr) {
                    if (attr) {
                        for (const [attribute, value] of Object.entries(attr)) {
                            self.el.setAttribute(attribute, value)
                        }
                    } else if (typeof attr !== "string") {
                        console.error(new Error("JActionError: type of attr must be an object! received: ", typeof attr))
                    }
                    return self
                },

                getAttr: function (attrName) {
                    if (attrName) {
                        return self.el.getAttribute(attrName)
                    } else {
                        console.error(new Error("JActionError: type of attr must be an string! received: ", typeof attr))
                    }

                    return self
                },
                
                hide: function (){
                  self.css ("display","none")
                  return self
                },
                
                show: function () {
                  self.css("display","block")
                  return self
                }
            }

            return self
        }
    }



    root.JAction = JAction
    root.jct = JAction


}(window))

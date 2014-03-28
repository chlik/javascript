function $ (selector, el) {
     if (!el) {el = document;}
     return el.querySelector(selector);
}

function $$ (selector, el) {
     if (!el) {el = document;}
     return Array.prototype.slice.call(el.querySelectorAll(selector));
}


// or
HTMLDocument.prototype.$ = function (selector) { // Only for HTML
    return this.querySelector(selector);
};

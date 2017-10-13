"use strict";
var _headline = {
    elements: null,
    index: null,
    current: null,
    init: function() {
        document.querySelectorAll(".ibm_cci-headline-news") && (_headline.elements = document.querySelectorAll(".ibm_cci-animate"), _headline.index = 0, _headline.total = _headline.elements.length - 1, _headline.animate())
    },
    animate: function() {
        _headline.current = _headline.elements[_headline.index];
        var a = _headline.current.dataset.animateCss;
        _headline.current.classList.add(a, "animated"),
        _headline.current.addEventListener("animationend", _headline.complete)
    },
    complete: function() {
        _headline.index < _headline.total && (_headline.index = _headline.index + 1, _headline.animate()),
        _headline.current.style.opacity = 1,
        _headline.current.removeEventListener("animationend", _headline.complete)
    }
}; !
function(a) {
    a(document).ready(function() {
        if (a(".ibm_cci-graph").length >= 1) {
            var b = a(".ibm_cci-graph__piece");
            //b.addClass("active"),
            a("span.ibm_cci-float-counter").each(function() {
                var b = a(this);
                a({
                    someValue: .1
                }).animate({
                    someValue: b.text()
                },
                {
                    duration: 2e3,
                    easing: "swing",
                    step: function() {
                        b.text(this.someValue.toFixed(2))
                    }
                })
            })
            setTimeout(function(){
                b.addClass("active");
            }, 100); 
        }
    })
} (jQuery, IBMCore);
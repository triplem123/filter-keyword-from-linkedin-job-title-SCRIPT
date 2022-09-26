// filter out senior jobs from linkedin
javascript:
var i = 0;
var x = document.getElementsByClassName('jobs-search-results-list')[0];
var arr = [/Senior/, /Staff/, /Lead/, /Principal/];
var len = arr.length;
function filter(word) { 
    document.querySelectorAll("li").forEach(function (e) { 
        e.id && e.innerHTML.match(word) && e.remove() 
    }), setTimeout(function () { 
        x.scrollTop = 0; 
    }, 0); 
    x.scroll(0, 0); 
    e(); 
} 
function e() { 
    x.scroll(0, 100 * ++i); 
    if (i > (len * 40)) { return; } 
    i % 40 === 0 ? filter(arr.pop()) : setTimeout(e, 0) 
}; 
e();

// javascript: var i = 0; var x = document.getElementsByClassName('jobs-search-results-list')[0]; var arr = [/Intern/, /Senior/, /Staff/, /Lead/, /Principal/]; var len = arr.length; function filter(word) { document.querySelectorAll("li").forEach(function (e) { e.id && e.innerHTML.match(word) && e.remove() }), setTimeout(function () { x.scrollTop = 0; }, 0); x.scroll(0, 0); e() } function e() { x.scroll(0, 100 * ++i); if (i > (len * 40)) { return; } i % 40 === 0 ? filter(arr.pop()) : setTimeout(e, 0) }; e();

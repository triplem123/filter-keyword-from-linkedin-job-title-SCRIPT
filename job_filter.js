// filter out senior jobs from linkedin
javascript:
var i = 0;
var x = document.getElementsByClassName('jobs-search-results-list')[0];
var arr = [/Senior/, /Staff/, /Lead/, /Principal/];
function filter(word) {
    document.querySelectorAll("li").forEach(function (e) {
        e.id && e.innerHTML.match(word) && e.remove()
    }),
        setTimeout(function () {
            x.scrollTop = 0;
        }, 0)
}
!function e() {
    x.scroll(0, 100 * ++i), i > 40 ? filter(arr.pop()) : setTimeout(e, 0)
}();



// javascript:
// var i = 0; var x = document.getElementsByClassName('jobs-search-results-list')[0]; function filter() {document.querySelectorAll("li").forEach(function (e) {e.id && e.innerHTML.match(/Senior/) && e.remove()}),setTimeout(function () {x.scrollTop = 0}, 0)} !function e() {x.scroll(0, 100 * ++i), i > 40 ? filter() : setTimeout(e, 0)}();

// javascript: var i = 0; var x = document.getElementsByClassName('jobs-search-results-list')[0]; var arr = [/Senior/, /Staff/, /Lead/, /Principal/]; function filter(word) { document.querySelectorAll("li").forEach(function (e) { e.id && e.innerHTML.match(word) && e.remove() }), setTimeout(function () { x.scrollTop = 0; }, 0) } !function e() { x.scroll(0, 100 * ++i), i > 40 ? filter(arr.pop()) : setTimeout(e, 0) }();
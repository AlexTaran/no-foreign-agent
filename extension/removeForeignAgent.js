
var observer = new MutationObserver(function(mutations) {
  var elements = document.querySelectorAll("div.Banner-root#div-gpt-ad");
  if (elements.length == 1) {
    elements[0].remove();
  }
});

observer.observe(document, { childList: true, subtree: true });


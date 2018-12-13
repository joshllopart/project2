document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("btn").addEventListener("click", handler);
});

// The handler also must go in a .js file
function handler() {
  chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    var url = tabs[0].url;
    url = url.split("/")
    url = url.join("----")
   window.open("http://www.gifthelp.xyz/help/" + document.getElementById("sel1").value + "/" + url, "_blank")
})
}
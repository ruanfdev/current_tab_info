document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.getSelected(null, function(tab) {
      document.getElementById('favicon').src = tab.favIconUrl;
      document.getElementById('title').innerHTML = tab.title;
      document.getElementById('url').innerHTML = tab.url;
      document.getElementById('incognito').innerHTML = tab.incognito;
      document.getElementById('tab_num').innerHTML = (tab.index + 1);
      document.getElementById('loading').innerHTML = tab.status;
    });
}, false);

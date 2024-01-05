function openTab(tabId) {
  var tabs = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }

  var activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = "flex";
    
  }

  var tabHeaders = document.getElementsByClassName("tab");
  for (var i = 0; i < tabHeaders.length; i++) {
    tabHeaders[i].classList.remove("active");
  }

  var activeHeader = document.querySelector(
    "[onclick=\"openTab('" + tabId + "')\"]"
  );
  if (activeHeader) {
    activeHeader.classList.add("active");
  }
}

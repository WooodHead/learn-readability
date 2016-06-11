

chrome.browserAction.onClicked.addListener(function(){
  
  chrome.tabs.query({active:true, currentWindow:true},function(tabs){
    chrome.tabs.sendMessage(tabs[0].id,{msg:"123"});

    });
  chrome.runtime.sendMessage();
});
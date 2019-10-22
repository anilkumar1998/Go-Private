function openIncognito()
{
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs);
        urlValue = tabs[0].url;
        chrome.windows.create(
            {
                url: urlValue,
                incognito: true
            }
        );
    });
}

document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById("incognitoButton").addEventListener("click", getCurrentTabUrl);
});


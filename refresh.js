if (window.__twitterRefresh) {
  window.__twitterRefresh.cancel();
}

chrome.storage.sync.get(["refreshInterval"], function (result) {
  const interval = parseInt(result.refreshInterval, 10) || 60;
  window.__twitterRefresh = setInterval(() => {
    if (
      window.scrollY === 0 &&
      (window.location.href === "https://twitter.com/home" ||
        window.location.href === "https://twitter.com")
    ) {
      document.querySelector('a[data-testid="AppTabBar_Home_Link"]').click();
      console.log("[Twitter Auto Refresh] Refreshing...");
    }
  }, interval * 1000);
  console.log(
    `[Twitter Auto Refresh] Installed and refreshing every ${interval} seconds...`
  );
});

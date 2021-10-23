function save_options() {
  const refreshInterval = document.getElementById("refreshInterval").value;
  chrome.storage.sync.set(
    {
      refreshInterval: refreshInterval,
    },
    function () {
      var status = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(function () {
        status.textContent = "";
      }, 750);
    }
  );
}

function restore_options() {
  chrome.storage.sync.get(
    {
      refreshInterval: "60",
    },
    function (items) {
      document.getElementById("refreshInterval").value = items.refreshInterval;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);

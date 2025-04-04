document.addEventListener("DOMContentLoaded", function () {
  const fontInput = document.getElementById("fontInput");
  const applyButton = document.getElementById("applyFont");
  const statusElement = document.getElementById("status");

  function showStatus(message, isError = false) {
    statusElement.textContent = message;
    statusElement.style.color = isError ? "#dc3545" : "#28a745";
    setTimeout(() => {
      statusElement.textContent = "";
    }, 3000);
  }

  chrome.storage.sync.get(["savedFont"], function (result) {
    if (result.savedFont) {
      fontInput.value = result.savedFont;
    }
  });

  applyButton.addEventListener("click", function () {
    const fontName = fontInput.value.trim();

    if (fontName) {
      applyButton.disabled = true;
      applyButton.textContent = "Aplicando...";
      showStatus("Aplicando a fonte...");

      chrome.storage.sync.set({ savedFont: fontName }, function () {
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            if (tabs[0]) {
              chrome.tabs.sendMessage(
                tabs[0].id,
                { font: fontName },
                function (response) {
                  applyButton.disabled = false;
                  applyButton.textContent = "Aplicar Fonte";

                  if (chrome.runtime.lastError) {
                    showStatus("Erro ao aplicar a fonte. Tente recarregar a página.", true);
                  } else {
                    showStatus("Fonte aplicada com sucesso!");
                  }
                }
              );
            }
          }
        );
      });
    } else {
      showStatus("Por favor, insira um nome de fonte", true);
    }
  });
});

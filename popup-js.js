document.addEventListener("DOMContentLoaded", function () {
  const fontInput = document.getElementById("fontInput");
  const applyButton = document.getElementById("applyFont");

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
                    alert(
                      "Erro ao aplicar a fonte. Tente recarregar a página."
                    );
                  } else {
                    alert("Fonte aplicada com sucesso!");
                  }
                }
              );
            }
          }
        );
      });
    } else {
      alert("Por favor, insira um nome de fonte");
    }
  });
});

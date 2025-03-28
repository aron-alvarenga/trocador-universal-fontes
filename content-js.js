function applyFont(fontName) {
  const oldStyle = document.getElementById("universal-font-changer");
  if (oldStyle) {
    oldStyle.remove();
  }

  const styleElement = document.createElement("style");
  styleElement.id = "universal-font-changer";

  styleElement.textContent = `
    * {
      font-family: "${fontName}", Arial, sans-serif !important;
    }
  `;

  document.head.appendChild(styleElement);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.font) {
    applyFont(request.font);
    sendResponse({ success: true });
  }
  return true;
});

chrome.storage.sync.get(["savedFont"], function (result) {
  if (result.savedFont) {
    applyFont(result.savedFont);
  }
});

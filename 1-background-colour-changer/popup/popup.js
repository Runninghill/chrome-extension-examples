document.addEventListener("DOMContentLoaded", function () {
    const colorPicker = document.getElementById("color-picker");

    colorPicker.addEventListener("change", async function () {
        const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
        const message = { type: 'COLOR_CHANGE', color: colorPicker.value };

        console.log('Popup - Sending Message', message);
        await chrome.tabs.sendMessage(tab.id, message);
    });
});

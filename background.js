// Initialize toggle state
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ enabled: true });
});

// Create context menu with Options and About
chrome.contextMenus.create({
    id: 'scihub-linker-menu',
    title: 'Sci-Hub Linker',
    contexts: ['action']
});
chrome.contextMenus.create({
    id: 'scihub-linker-options',
    parentId: 'scihub-linker-menu',
    title: 'Options',
    contexts: ['action']
});
chrome.contextMenus.create({
    id: 'scihub-linker-about',
    parentId: 'scihub-linker-menu',
    title: 'About',
    contexts: ['action']
});

// Update icon based on state
function updateIcon(enabled) {
    chrome.action.setIcon({
        path: enabled ? {
            "48": "icons/icon48.png"
        } : {
            "48": "icons/icon48-disabled.png"
        }
    });
    chrome.action.setTitle({
        title: `Sci-Hub Linker (${enabled ? 'On' : 'Off'})`
    });
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'scihub-linker-options') {
        chrome.runtime.openOptionsPage();
    } else if (info.menuItemId === 'scihub-linker-about') {
        chrome.tabs.create({ url: chrome.runtime.getURL('about.html') });
    }
});

// Handle left-click toggle
chrome.action.onClicked.addListener(() => {
    chrome.storage.local.get({ enabled: true }, (data) => {
        const newState = !data.enabled;
        chrome.storage.local.set({ enabled: newState }, () => {
            updateIcon(newState);
            // Show notification with auto-dismiss after 5 seconds
            const notificationId = `scihub-linker-toggle-${Date.now()}`;
            chrome.notifications.create(notificationId, {
                type: 'basic',
                iconUrl: 'icons/icon48.png',
                title: 'Sci-Hub Linker',
                message: `Extension turned ${newState ? 'On' : 'Off'}. Please reload the page to apply changes.`,
                requireInteraction: false
            });
            setTimeout(() => {
                chrome.notifications.clear(notificationId);
            }, 5000);
        });
    });
});

// Initialize icon on startup
chrome.storage.local.get({ enabled: true }, (data) => {
    updateIcon(data.enabled);
});
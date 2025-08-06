document.addEventListener('DOMContentLoaded', async () => {
    const { sciHubUrl } = await chrome.storage.sync.get({ sciHubUrl: 'https://sci-hub.se' });
    document.getElementById('sciHubUrl').value = sciHubUrl;
});

document.getElementById('save').addEventListener('click', () => {
    const sciHubUrl = document.getElementById('sciHubUrl').value;
    chrome.storage.sync.set({ sciHubUrl }, () => {
        alert('Settings saved');
    });
});
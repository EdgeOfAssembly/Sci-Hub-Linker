async function main() {
    const { enabled } = await chrome.storage.local.get({ enabled: true });
    if (!enabled) return; // Skip processing if disabled

    const { sciHubUrl } = await chrome.storage.sync.get({ sciHubUrl: 'https://sci-hub.se' });
    processPage(sciHubUrl);
}

function processPage(sciHubUrl) {
    // Process existing DOI links
    function processLinks() {
        const doiRegex = /^https?:\/\/(?:doi\.org|dx\.doi\.org)\/(10\.[^\s]+)$/i;
        const links = document.querySelectorAll('a[href*="doi.org"]');
        links.forEach(link => {
            const match = link.href.match(doiRegex);
            if (match) {
                const doi = match[1];
                link.href = `${sciHubUrl}/${doi}`;
                link.target = '_blank';
            }
        });
    }

    // Process plain text DOIs
    function processTextNode(textNode) {
        const text = textNode.nodeValue;
        // Match "doi:10.xxx", "DOI 10.xxx", and "https://doi.org/10.xxx"
        const regex = /(?:doi\s*:\s*(10\.[^\s]+)|doi\s+(10\.[^\s]+)|https:\/\/doi\.org\/(10\.[^\s]+))/gi;
        const matches = [];
        let match;

        while ((match = regex.exec(text)) !== null) {
            const doi = match[1] || match[2] || match[3];
            matches.push({
                start: match.index,
                end: match.index + match[0].length,
                doi: doi
            });
        }

        if (matches.length === 0) return;

        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        matches.forEach((m) => {
            if (m.start > lastIndex) {
                fragment.appendChild(document.createTextNode(text.substring(lastIndex, m.start)));
            }

            const a = document.createElement('a');
            a.href = `${sciHubUrl}/${m.doi}`;
            a.textContent = text.substring(m.start, m.end);
            a.target = '_blank';
            fragment.appendChild(a);

            lastIndex = m.end;
        });

        if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
        }

        textNode.parentNode.replaceChild(fragment, textNode);
    }

    // Process all links first
    processLinks();

    // Process text nodes
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: function(node) {
                const parent = node.parentNode;
                if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE' || parent.tagName === 'NOSCRIPT' || parent.tagName === 'A') {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    const textNodes = [];
    let currentNode = walker.nextNode();
    while (currentNode) {
        textNodes.push(currentNode);
        currentNode = walker.nextNode();
    }

    textNodes.forEach(processTextNode);
}

main();
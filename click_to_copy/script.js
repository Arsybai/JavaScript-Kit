(function() {
    'use strict';

    // Get all elements with the "copy" class
    const copyElements = document.querySelectorAll('.copy');

    // Define dynamic CSS rules for styling
    const copiedStyles = `
        .copy.copied {
            background-color: #d1f8a7;
            transition: background-color 0.3s;
        }
    `;

    // Create a <style> element and add the CSS rules
    const styleElement = document.createElement('style');
    styleElement.innerHTML = copiedStyles;
    document.head.appendChild(styleElement);

    // Add click event listener to each copy element
    copyElements.forEach(element => {
        element.addEventListener('click', () => {
            copyTextToClipboard(element.textContent);
            element.classList.add('copied');
            setTimeout(() => {
                element.classList.remove('copied');
            }, 1000);
        });
    });

    // Copy text to clipboard using the Clipboard API
    function copyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
    }
})();

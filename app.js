import QRCode from 'qrcode'; // Import from npm-installed library

document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput'); // Select input field
    const generateButton = document.getElementById('generateButton'); // Select button
    const qrCodeDiv = document.getElementById('qrCode'); // Select the 'div' where QR will appear

    generateButton.addEventListener("click", () => { // Listen to click event
        const url = urlInput.value.trim(); // Get value from input field

        if (!url) { // Check if URL is valid
            alert("Please enter a valid URL");
            return;
        }

        qrCodeDiv.innerHTML = ""; // Clear existing QR

        // Generate QR code using canvas
        QRCode.toCanvas(document.createElement('canvas'), url, {
            width: 256,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#ffffff'
            }
        }).then(canvas => {
            qrCodeDiv.appendChild(canvas);
        }).catch(error => {
            console.error("Error generating QR Code:", error);
        });
    });
});

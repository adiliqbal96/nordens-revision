const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log("Launching browser...");
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 1080 });
        console.log("Navigating to localhost...");
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
        
        console.log("Waiting a bit for animations...");
        await new Promise(r => setTimeout(r, 2000));

        const outputPath = "C:\\Users\\adili\\.gemini\\antigravity\\brain\\aa828133-fe09-4f3e-8a42-fb5c226fa467\\localhost_preview.png";
        console.log("Capturing screenshot to", outputPath);
        await page.screenshot({ path: outputPath, fullPage: true });
        
        await browser.close();
        console.log("Screenshot successfully saved.");
    } catch (e) {
        console.error("Failed to capture screenshot:", e);
        process.exit(1);
    }
})();

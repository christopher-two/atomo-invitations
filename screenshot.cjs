const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Set mobile viewport (iPhone 12 Pro)
    await page.setViewport({
        width: 390,
        height: 844,
        isMobile: true,
        hasTouch: true
    });

    await page.goto('http://localhost:4321/scrapbook', { waitUntil: 'networkidle0' });

    await page.screenshot({ path: '/home/christopher-two/.gemini/antigravity/brain/e7ccc29a-71ab-4c8e-a522-1af7a4a907d0/mobile_preview.png' });

    await browser.close();
    console.log('Screenshot saved to mobile_preview.png');
})();

const fs = require('fs')
const { browserSync } = require('vibium')

async function main() {
    // Launch a browser (you'll see it open!)
    const vibe = await browserSync.launch()

    // Go to a website
    await vibe.go('https://tradelingtesting.com')
    console.log('Loaded https://tradelingtesting.com')

    // Take a screenshot
    const png = await vibe.screenshot()
    fs.writeFileSync('screenshot.png', png)
    console.log('Saved screenshot.png')

    // Find and click the link
    const link = await vibe.find('[data-testid="Express"]')
    console.log('Found link:', link.text())
    await link.click()
    console.log('Clicked!')

    // Close the browser
    await vibe.quit()
    console.log('Done!')
}

main()
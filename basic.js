const fs = require('fs')
const { browserSync } = require('vibium')

async function main() {
    // Launch a browser (you'll see it open!)
    const vibe = await browserSync.launch()

    // Go to a website
    await vibe.go('https://candymapper.com/')
    console.log('Loaded https://candymapper.com/')

    // Take a screenshot
    const png = await vibe.screenshot()
    fs.writeFileSync('screenshot.png', png)
    console.log('Saved screenshot.png')
    
    //close popup
    const closePopup = await vibe.find('#popup-widget183-close-icon')
    await closePopup.click()
    console.log('popup closed!')
    // Find and click the link
    const joinUsLink = await vibe.find('[href="/join-us"]')
    console.log('join us link:', joinUsLink.text())
    await joinUsLink.click()
    console.log('Clicked!')

    // Close the browser
    await vibe.quit()
    console.log('Done!')
}

main()
const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
     await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon page can be navigated from homepage', async ({ page }) => {
    await page.goto('')
    const locator = page.getByRole('link', { name: 'ivysaur'})
    await locator.click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
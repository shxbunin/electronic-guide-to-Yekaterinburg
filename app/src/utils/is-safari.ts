export function isSafariBrowser() {
  if (typeof navigator === 'undefined') return false

  const ua = navigator.userAgent
  return /Safari\//.test(ua) && !/Chrome\//.test(ua) && !/Chromium\//.test(ua) && !/Android/.test(ua)
}

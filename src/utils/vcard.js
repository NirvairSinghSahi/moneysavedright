import { CONFIG } from '../config'

export function generateVCard() {
  const vcardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${CONFIG.companyName}`,
    `TEL;TYPE=CELL:${CONFIG.phone}`,
    `NOTE:${CONFIG.brandPromise}`,
    'END:VCARD'
  ].join('\n')

  const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'MSR-Tax-Insurance.vcf'
  link.style.display = 'none'
  
  document.body.appendChild(link)
  link.click()
  
  setTimeout(() => {
    document.body.removeChild(link)
    URL.revokeObjectURL(link.href)
  }, 100)
}


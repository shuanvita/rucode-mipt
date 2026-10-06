import { describe, expect, it } from 'vitest'

import { sanitizeRichText } from './sanitizeRichText'

describe('sanitizeRichText', () => {
  it('сохраняет разрешённую разметку', () => {
    const html =
      'Текст<br>с <b>жирным</b> и <a class="x" href="/champ" target="_blank" rel="noopener">ссылкой</a>'
    expect(sanitizeRichText(html)).toBe(html)
  })

  it('вырезает скрипты вместе с содержимым', () => {
    expect(sanitizeRichText('a<script>alert(1)</script>b')).toBe('ab')
  })

  it('убирает обработчики событий и style', () => {
    expect(sanitizeRichText('<b onclick="x()" style="color:red">t</b>')).toBe('<b>t</b>')
  })

  it('отбрасывает небезопасные ссылки', () => {
    expect(sanitizeRichText('<a href="javascript:alert(1)">t</a>')).toBe('<a>t</a>')
    expect(sanitizeRichText('<a href="https://rucode.net">t</a>')).toBe(
      '<a href="https://rucode.net">t</a>',
    )
  })

  it('удаляет неизвестные теги, оставляя текст', () => {
    expect(sanitizeRichText('<img src=x onerror=alert(1)><div>t</div>')).toBe('t')
  })

  it('терпит пустые значения', () => {
    expect(sanitizeRichText(undefined)).toBe('')
    expect(sanitizeRichText('')).toBe('')
  })
})

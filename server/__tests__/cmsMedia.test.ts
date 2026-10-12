import { describe, expect, it } from 'vitest'
import { getCmsMediaKey } from '../utils/cmsMedia'

const HASH = 'a'.repeat(64)

describe('getCmsMediaKey', () => {
  it('принимает путь файла медиатеки', () => {
    expect(getCmsMediaKey(`/cms-api/media/rucode/${HASH}.png`)).toBe(`rucode/${HASH}.png`)
    expect(getCmsMediaKey(`/cms-api/media/my-site/${HASH}.webp?x=1`)).toBe(`my-site/${HASH}.webp`)
  })

  it('отклоняет всё, что не является ключом файла', () => {
    expect(getCmsMediaKey(undefined)).toBeNull()
    expect(getCmsMediaKey('/cms-api/media/')).toBeNull()
    expect(getCmsMediaKey('/cms-api/media/rucode/file.png')).toBeNull()
    expect(getCmsMediaKey(`/cms-api/media/rucode/${HASH}`)).toBeNull()
    expect(getCmsMediaKey(`/cms-api/media/${HASH}.png`)).toBeNull()
    expect(getCmsMediaKey(`/cms-api/media/Rucode/${HASH}.png`)).toBeNull()
  })

  it('не пропускает выход из пути и другие адреса API', () => {
    expect(getCmsMediaKey(`/cms-api/media/../projects/rucode/${HASH}.png`)).toBeNull()
    expect(getCmsMediaKey(`/cms-api/media/rucode/../../projects/${HASH}.png`)).toBeNull()
    expect(getCmsMediaKey(`/cms-api/media/rucode%2F..%2Fx/${HASH}.png`)).toBeNull()
    expect(getCmsMediaKey(`/cms-api/media/rucode/${HASH}.png/extra`)).toBeNull()
    expect(getCmsMediaKey(`/cms-api/projects/rucode/${HASH}.png`)).toBeNull()
    expect(getCmsMediaKey(`/api/cms/rucode/${HASH}.png`)).toBeNull()
  })
})

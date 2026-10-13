import { describe, expect, it } from 'vitest'
import { getCmsManifestProject } from '../utils/cmsManifest'

describe('getCmsManifestProject', () => {
  it('принимает путь загрузки манифеста', () => {
    expect(getCmsManifestProject('/cms-api/projects/rucode/manifest')).toBe('rucode')
    expect(getCmsManifestProject('/cms-api/projects/my-site/manifest?x=1')).toBe('my-site')
    expect(getCmsManifestProject('/cms-api/projects/rucode/manifest/')).toBe('rucode')
  })

  it('отклоняет всё, что не является загрузкой манифеста', () => {
    expect(getCmsManifestProject(undefined)).toBeNull()
    expect(getCmsManifestProject('/cms-api/projects')).toBeNull()
    expect(getCmsManifestProject('/cms-api/projects/rucode')).toBeNull()
    expect(getCmsManifestProject('/cms-api/projects/rucode/pages')).toBeNull()
    expect(getCmsManifestProject('/cms-api/projects/Rucode/manifest')).toBeNull()
    expect(getCmsManifestProject('/api/projects/rucode/manifest')).toBeNull()
  })

  it('не пропускает выход из пути', () => {
    expect(getCmsManifestProject('/cms-api/projects/../manifest')).toBeNull()
    expect(getCmsManifestProject('/cms-api/projects/rucode/../x/manifest')).toBeNull()
    expect(getCmsManifestProject('/cms-api/projects/rucode%2F..%2Fx/manifest')).toBeNull()
    expect(getCmsManifestProject('/cms-api/projects/rucode/manifest/extra')).toBeNull()
  })
})

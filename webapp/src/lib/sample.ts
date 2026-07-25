import { importProjectData } from './report'
import { saveProject, type ProjectData } from './types'

export async function loadSampleCaseStudy(): Promise<ProjectData | null> {
  const res = await fetch(`${import.meta.env.BASE_URL}sample-assessment.json`)
  const raw = await res.json()
  const imported = importProjectData(raw)
  if (!imported) return null
  saveProject(imported)
  return imported
}

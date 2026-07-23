import { useCallback, useEffect, useState } from 'react'
import { defaultProject, loadProject, saveProject, type ProjectData } from '../lib/types'

export function useProject() {
  const [project, setProject] = useState<ProjectData>(loadProject)

  useEffect(() => {
    saveProject(project)
  }, [project])

  const updateProject = useCallback((patch: Partial<ProjectData>) => {
    setProject((prev) => ({ ...prev, ...patch, updatedAt: new Date().toISOString() }))
  }, [])

  const resetProject = useCallback(() => {
    const fresh = defaultProject()
    setProject(fresh)
    saveProject(fresh)
  }, [])

  return { project, setProject, updateProject, resetProject }
}

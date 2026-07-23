import iecData from '../data/iec62443.json'

export interface CatalogEntry {
  part: string
  abbreviation: string
  standard: string
  role: string
  description: string
}

export interface Question {
  id: string
  part: string
  subcategory: string
  standard: string
  framework_category: string
  question: string
  sl1: string | null
  sl2: string | null
  sl3: string | null
  sl4: string | null
}

export interface SLMatrixEntry {
  level: number
  misuse: string
  means: string
  resources: string
  knowledge: string
  motivation: string
}

export const catalog = iecData.catalog as CatalogEntry[]
export const questions = iecData.questions as Question[]
export const slMatrix = iecData.slMatrix as SLMatrixEntry[]

export const parts = [...new Set(questions.map((q) => q.part))]

export function questionsByPart(part: string) {
  return questions.filter((q) => q.part === part)
}

export function questionsByStandard(standard: string) {
  return questions.filter((q) => q.standard === standard)
}

import { type SchemaTypeDefinition } from 'sanity'
import { heroType } from './hero'
import { projectType } from './project'
import { certificateType } from './certificate'
import { techStackType } from './techStack'
import { postType } from './postType'

export const schemaTypes: SchemaTypeDefinition[] = [
  heroType,
  projectType,
  certificateType,
  techStackType,
  postType,
]

import type { AiRegistryModel } from '../../../aiRegistryTypes'

export const anthropicModels: AiRegistryModel[] = [
  {
    slug: 'claude-3-opus-20240229' as const,
    publicName: 'Claude 3 Opus' as const,
    default: true,
    costPerMille: {
      request: 0.015,
      response: 0.075,
    },
  },
  {
    slug: 'claude-3-sonnet-20240229' as const,
    publicName: 'Claude 3 Sonnet' as const,
    default: true,
    costPerMille: {
      request: 0.003,
      response: 0.015,
    },
  },
  {
    slug: 'claude-3-haiku-20240307' as const,
    publicName: 'Claude 3 Haiku' as const,
    default: true,
    costPerMille: {
      request: 0.00025,
      response: 0.00125,
    },
  },
]

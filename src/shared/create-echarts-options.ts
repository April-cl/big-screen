import { baseEchartsOptions } from './base-echarts-options';

export const createEchartsOptions = (options: any) => {
  const result = {
    ...baseEchartsOptions,
    ...options
  }
  return result
}
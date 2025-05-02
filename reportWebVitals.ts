import type { Metric } from 'web-vitals'

export function reportWebVitals(metric: Metric) {
  console.log('[web-vitals]', metric.name, metric.value)
}
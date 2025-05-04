// reportWebVitals.ts
import { getCLS, getFID, getLCP, getFCP, getTTFB, ReportHandler } from 'web-vitals'

export function reportWebVitals(onPerfEntry?: ReportHandler) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    const wrappedHandler: ReportHandler = metric => {
      console.log('[web-vitals]', metric.name, metric.value)
      onPerfEntry(metric)
    }

    getCLS(wrappedHandler)
    getFID(wrappedHandler)
    getLCP(wrappedHandler)
    getFCP(wrappedHandler)
    getTTFB(wrappedHandler)
  }
}

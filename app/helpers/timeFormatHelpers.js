export const formatSecondsToTime = seconds => (
  new Date(seconds * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
)

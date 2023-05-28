export const formatTime = (seconds: number): string => {
  var minutes = Math.floor(seconds / 60)
  var remainingSeconds = seconds % 60

  var formattedMinutes = String(minutes).padStart(2, '0')
  var formattedSeconds = String(remainingSeconds).padStart(2, '0')

  return formattedMinutes + ':' + formattedSeconds
}

export function useCopy(val: string): void {
  const inputEl = document.createElement('input')
  const htmlOrBody = document.documentElement || document.body

  inputEl.value = val
  htmlOrBody.appendChild(inputEl)
  inputEl.select()
  document.execCommand('Copy')
  inputEl.style.display = 'none'
  htmlOrBody.removeChild(inputEl)
}

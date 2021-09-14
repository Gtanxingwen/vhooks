import type { Ref } from 'vue'

import { ref, onMounted, watch, onUnmounted } from 'vue'
import { isWindow, isObject } from '../shared/utils/is'
import { useThrottleFn } from '../fn/useThrottleFn'

type ReturnValue = {
  refX: Ref<number>
  refY: Ref<number>
  stop(): void
}

export function useScroll(
  refEl: Ref<Element | Window | null>,
  options?: {
    wait?: number
    leading?: boolean
    trailing?: boolean
  }
): ReturnValue {
  const refX = ref(0)
  const refY = ref(0)

  let handler = () => {
    if (isWindow(refEl.value)) {
      refX.value = refEl.value.scrollX
      refY.value = refEl.value.scrollY
    } else if (refEl.value) {
      refX.value = (refEl.value as Element).scrollLeft
      refY.value = (refEl.value as Element).scrollTop
    }
  }

  if (isObject(options)) {
    let wait = 0
    if (options.wait && options.wait > 0) {
      wait = options.wait
      Reflect.deleteProperty(options, 'wait')
    }

    const { run } = useThrottleFn(handler, wait)
    handler = run
  }

  let stopWatch: () => void
  onMounted(() => {
    stopWatch = watch(
      refEl,
      (el, prevEl, onCleanup) => {
        if (el) {
          el.addEventListener('scroll', handler)
        } else if (prevEl) {
          prevEl.removeEventListener('scroll', handler)
        }
        onCleanup(() => {
          refX.value = refY.value = 0
          el && el.removeEventListener('scroll', handler)
        })
      },
      { immediate: true }
    )
  })

  onUnmounted(() => {
    refEl.value && refEl.value.removeEventListener('scroll', handler)
  })

  function stop() {
    stopWatch && stopWatch()
  }

  return { refX, refY, stop }
}

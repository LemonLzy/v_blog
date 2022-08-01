import { onMounted, onUnmounted, ref } from 'vue';
import { debounce } from 'lodash-es';

const useWidth = (maxWidth: number, padding = 30) => {
  const width = ref(maxWidth);

  // debounce 防抖：触发高频率事件时n秒后只会执行一次
  const onSize = debounce(() => {
    const tmpWidth = window.innerWidth;
    if (tmpWidth > maxWidth) {
      width.value = maxWidth;
    } else {
      width.value = tmpWidth - padding;
    }
  }, 100);

  onMounted(() => {
    window.addEventListener('resize', onSize);
    onSize();
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onSize);
  });

  return {
    width,
  };
};

export default useWidth;

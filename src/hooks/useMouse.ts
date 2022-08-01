import { onMounted, onUnmounted, ref } from 'vue';
import exp from 'constants';

const useMouse = () => {
  const x = ref(0);
  const y = ref(0);

  const onMove = (e: MouseEvent) => {
    x.value = e.x;
    y.value = e.y;
  };

  onMounted(() => {
    document.addEventListener('mousemove', onMove);
  });

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMove);
  });

  return {
    x,
    y,
  };
};

export default useMouse;

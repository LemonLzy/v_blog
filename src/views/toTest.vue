<template>
  <div class="typer">
    <div class="typer-content">
      <p class="typer_static">LemonLzy</p>
      <!-- 动态变化的内容-->
      <p class="typer_dynamic">
        <span class="cut">
          <span v-for="(letter, index) in words" :key="index" class="word">{{ letter }}</span>
        </span>
        <!-- 模拟光标-->
        <span class="typer_cursor animation"></span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup="setup">
  import { onMounted, ref, watch } from 'vue';

  let str = 'Fake it until you become it.';
  let letters = ref(['']);
  let words = ref(['']);
  let order = ref(1);

  watch(order, () => {
    if (order.value % 2 == 1) {
      str = 'Fake it until you become it.';
    } else {
      str = '万事顺遂.';
    }
  });

  onMounted(() => {
    begin();
  });

  //开始输入的效果动画
  const begin = () => {
    letters.value = str.split('');
    for (let i = 0; i < letters.value.length; i++) {
      setTimeout(write(i), i * 100);
    }
  };

  //开始删除的效果动画
  const back = () => {
    let l = letters.value.length;
    for (let i = 0; i < l; i++) {
      setTimeout(wipe(), i * 50);
    }
  };

  //输入字母
  const write = (i: number) => {
    return () => {
      let l = letters.value.length;
      words.value.push(letters.value[i]);
      /*如果输入完毕，在2s后开始删除*/
      if (i == l - 1) {
        setTimeout(function() {
          back();
        }, 1500);
      }
    };
  };

  const wipe = () => {
    return () => {
      words.value.pop();
      /*如果删除完毕，在300ms后开始输入*/
      if (words.value.length == 1) {
        order.value++;
        setTimeout(function() {
          begin();
        }, 1000);
      }
    };
  };
</script>

<style scoped lang="scss">
  .typer {
    margin-top: 2%;
    box-sizing: border-box;
  }

  .typer .typer_content {
    font-weight: bold;
    font-size: 50px;
    display: flex;
    flex-direction: row;
    letter-spacing: 2px;
  }

  .typer_dynamic {
    position: relative;
  }

  .cut {
    color: #e84d49;
  }

  .typer_cursor {
    position: absolute;
    height: 100%;
    width: 3px;
    top: 0;
    right: -10px;
    background-color: #e84d49;
    animation: blink 1s infinite steps(1, start);
  }

  @keyframes blink {
    0% {
      background-color: white;
    }
    50% {
      background-color: black;
    }
    100% {
      background-color: white;
    }
  }
</style>

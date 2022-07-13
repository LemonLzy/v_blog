<template>
  <div class="container">
    <div class="loginBox">
      <div class="imgDiv">
        <el-avatar v-model:src="avatar" :size="100" shape="circle" />
      </div>
      <el-form
        ref="formEl"
        :model="loginForm"
        label-width="auto"
        :label-position="labelPosition"
        :size="size"
        class="loginForm"
        :rules="rules"
        @submit="handlerLogin"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model:model-value="loginForm.username" placeholder="Please input username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model:model-value="loginForm.password"
            type="password"
            placeholder="Please input password"
            show-password
          />
        </el-form-item>
        <el-form-item class="loginButton">
          <el-button type="primary" native-type="submit">登录</el-button>
          <el-button>I'm a visitor</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { FormRules } from 'element-plus/es';
  import { ElMessage } from 'element-plus';
  import avatarURL from '@/assets/vb.gif';
  import { reactive, ref } from 'vue';
  import { reqUserSignIn } from '@/api/userApi';
  import { Code_Success } from '@/app/codes';
  import { useRouter } from 'vue-router';
  import useUserStore from '@/store/module/useUserStore';

  const loginForm = reactive({
    username: '',
    password: '',
  });

  const avatar = avatarURL;
  const size = ref('default');
  const labelPosition = ref('right');
  const rules = reactive<FormRules>({
    username: [
      {
        required: true,
        message: 'Please input username',
        trigger: 'blur',
      },
    ],
    password: [
      {
        required: true,
        message: 'Please input password',
        trigger: 'blur',
      },
      {
        min: 0,
        max: 16,
        message: 'Length should be 6 to 16',
        trigger: 'blur',
      },
    ],
  });
  const formEl = ref<HTMLFormElement | null>(null);
  const router = useRouter();
  const userStore = useUserStore();

  const handlerLogin = (e: Event) => {
    e.preventDefault();
    formEl.value!.validate().then(async (ok: boolean) => {
      if (!ok) return;
      try {
        let { code, data, msg } = await reqUserSignIn(loginForm);
        if (code === Code_Success) {
          ElMessage.success(msg);
          userStore.sign_in(data);
          await router.push({ name: 'Dashboard' });
          return;
        }
      } catch (e: any) {
        ElMessage.error(e.message);
      }
    });
  };
</script>

<style scoped>
  .container {
    background-color: #282c34;
    @apply w-full;
    @apply h-full;
    @apply bg-gray-700;
    max-width: 100vh;
  }

  .loginBox {
    width: 350px;
    height: 250px;
    background-color: aliceblue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 9px;
  }

  .loginForm {
    width: 100%;
    position: absolute;
    bottom: 15%;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .imgDiv {
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    position: absolute;
  }

  .titleLab {
    text-align: center;
    line-height: 100%;
  }

  .el-form-item {
    margin-top: 10px;
  }
</style>

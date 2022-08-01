<template>
  <el-button size="small" type="primary" @click="visible = true">
    <el-icon>
      <Plus />
    </el-icon>
    添加
  </el-button>
  <el-dialog v-model:model-value="visible" :width="`${width}px`" title="新建文章">
    <el-form
      ref="formEl"
      size="small"
      :model="formData"
      :rules="rules"
      @submit.prevent="handlerSubmit"
    >
      <el-form-item prop="username">
        <el-input v-model:model-value="formData.username" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model:model-value="formData.password" type="password" placeholder="密码" />
      </el-form-item>
      <el-form-item prop="re_password">
        <el-input
          v-model:model-value="formData.re_password"
          type="password"
          placeholder="二次密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w-full" native-type="submit">create</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { Plus } from '@element-plus/icons';
  import { reactive, ref } from 'vue';
  import useUser from '@/hooks/api/useUser';
  import { ElMessage } from 'element-plus';
  import { Code_Success } from '@/app/codes';
  import useWidth from '@/hooks/useWidth';

  const emits = defineEmits(['refresh']);
  const visible = ref(false);
  const formData = reactive({
    username: '',
    password: '',
    re_password: '',
  });
  const rules = {
    username: [{ required: true, message: '必填' }],
    password: [
      { required: true, message: '必填' },
      {
        min: 0,
        max: 16,
        message: 'Length should be 6 to 16',
        trigger: 'blur',
      },
    ],
    re_password: [
      { required: true, message: '必填' },
      {
        min: 0,
        max: 16,
        message: 'Length should be 6 to 16',
        trigger: 'blur',
      },
    ],
  };

  const formEl = ref<HTMLFormElement | null>(null);
  const { userAdd } = useUser();
  const handlerSubmit = () => {
    formEl.value!.validate().then(async (ok: boolean) => {
      if (!ok) return;

      userAdd(formData).then((res) => {
        if (res.code === Code_Success) {
          ElMessage.success(res.msg);
          emits('refresh');
          visible.value = false;
          return;
        }
        ElMessage.error(res.msg);
      });
    });
  };

  const { width } = useWidth(400);
</script>

<style scoped></style>

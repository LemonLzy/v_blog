<template>
  <el-row>
    <el-col :span="16">
      <TEditor ref="editor" v-model="ruleForm.desc"></TEditor>
    </el-col>
    <el-col :span="8">
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="Activity zone" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Activity zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Instant delivery" prop="delivery">
          <el-switch v-model="ruleForm.delivery" />
        </el-form-item>
        <el-form-item label="Activity type" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Upload Cover" prop="upload">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <el-icon class="el-icon--upload">
              <upload-filled />
            </el-icon>
            <div class="el-upload__text">
              Drop file here or
              <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import type { FormInstance, FormRules } from 'element-plus';
  import { UploadFilled } from '@element-plus/icons-vue';
  import TEditor from '@/components/common/TinyMce.vue';

  const formSize = ref('default');
  const ruleFormRef = ref<FormInstance>();
  const ruleForm = reactive({
    name: 'Hello',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
  });

  const rules = reactive<FormRules>({
    name: [
      {
        required: true,
        message: 'Please input Activity name',
        trigger: 'blur',
      },
      {
        min: 3,
        max: 5,
        message: 'Length should be 3 to 5',
        trigger: 'blur',
      },
    ],
    region: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change',
      },
    ],
    count: [
      {
        required: false,
        message: 'Please select Activity count',
        trigger: 'change',
      },
    ],
    date1: [
      {
        type: 'date',
        required: true,
        message: 'Please pick a date',
        trigger: 'change',
      },
    ],
    date2: [
      {
        type: 'date',
        required: true,
        message: 'Please pick a time',
        trigger: 'change',
      },
    ],
    type: [
      {
        type: 'array',
        required: true,
        message: 'Please select at least one activity type',
        trigger: 'change',
      },
    ],
    resource: [
      {
        required: true,
        message: 'Please select activity resource',
        trigger: 'change',
      },
    ],
    desc: [
      {
        required: true,
        message: 'Please input activity form',
        trigger: 'blur',
      },
    ],
    upload: [
      {
        required: true,
        message: 'Please upload Article Cover Img',
        trigger: 'change',
      },
    ],
  });

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log('submit!');
      } else {
        console.log('error submit!', fields);
      }
    });
  };

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };
  Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }));
</script>

<style scoped>
  .el-form {
    height: 100vh;
    margin: 20px;
  }
</style>

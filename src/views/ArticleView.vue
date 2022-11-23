<template>
  <el-row>
    <el-col :span="16">
      <!--      <TEditor ref="editor" v-model="ArticleForm.content"></TEditor>-->
      <EditorMarkdown v-model="ArticleForm.rich_text" height="80" content=""></EditorMarkdown>
    </el-col>
    <el-col :span="8">
      <el-form
        ref="ruleFormRef"
        :model="ArticleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="Title" prop="title">
          <el-input v-model="ArticleForm.title" />
        </el-form-item>
        <el-form-item label="Status" prop="status">
          <el-select v-model="ArticleForm.status" placeholder="Please select status of blog.">
            <el-option
              v-for="item in statusList"
              :key="item.key"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Instant delivery" prop="delivery">
          <el-switch v-model="ArticleForm.status" />
        </el-form-item>
        <el-form-item label="Instant delivery" prop="delivery">
          <el-select v-model="ArticleForm.tag_id" placeholder="Please select status of blog.">
            <el-option
              v-for="item in statusList"
              :key="item.key"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Upload Cover" prop="upload">
          <el-upload
            class="upload-demo"
            drag
            :action="uploadURL"
            multiple
            limit="1"
            list-type="picture"
          >
            <el-icon class="el-icon--upload">
              <upload-filled />
            </el-icon>
            <div class="el-upload__text">
              Drop file here or
              <em>click to upload</em>
            </div>
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
  import { reqArticleCreate } from '@/api/articleApi';
  import { Code_Success } from '@/app/codes';
  import { ElMessage } from 'element-plus/es';
  import { useCookies } from 'vue3-cookies';
  import EditorMarkdown from '@/components/common/EditorMarkdown.vue';

  const uploadURL = import.meta.env.VITE_API_URL + '/api/upload_image';
  const formSize = ref('default');
  const ruleFormRef = ref<FormInstance>();

  const rules = reactive<FormRules>({
    title: [
      {
        required: true,
        message: 'Please input Activity name',
        trigger: 'blur',
      },
      {
        min: 1,
        max: 50,
        message: 'Length should be 1 to 50',
        trigger: 'blur',
      },
    ],
    status: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'blur',
      },
    ],
    count: [
      {
        required: false,
        message: 'Please select Activity count',
        trigger: 'change',
      },
    ],
    tag: [
      {
        required: true,
        message: 'Please select at least one tag',
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
    // upload: [
    //   {
    //     required: true,
    //     message: 'Please upload Article Cover Img',
    //     trigger: 'change',
    //   },
    // ],
  });
  const { cookies } = useCookies();

  const ArticleForm = reactive({
    tag_id: ref(),
    status: ref(),
    user_id: Number(cookies.get('user_id')),
    title: ref(''),
    content: '',
    rich_text: '',
    cover: '',
  });

  const statusList = [
    {
      key: '0',
      value: 0,
      label: '草稿',
    },
    {
      key: '1',
      value: 1,
      label: '直接发布',
    },
  ];

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
      console.log(ArticleForm);
      if (valid) {
        try {
          let { code, msg } = await reqArticleCreate(ArticleForm);
          if (code === Code_Success) {
            ElMessage.success('新建文章' + msg);
            resetForm(formEl);
            return;
          }
        } catch (e: any) {
          ElMessage.error(e.message);
        }
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

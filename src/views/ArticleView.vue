<template>
  <el-scrollbar class="main-scroll">
    <el-row>
      <el-col :span="18">
        <EditorMarkdown
          v-model="ArticleForm.rich_text"
        ></EditorMarkdown>
      </el-col>
      <el-col :span="6">
        <el-form
          ref="ruleFormRef"
          :model="ArticleForm"
          :rules="rules"
          label-width="70px"
          class="ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="Title" prop="title">
            <el-input v-model="ArticleForm.title" clearable />
          </el-form-item>
          <el-form-item label="Status" prop="status">
            <el-select
              v-model="ArticleForm.status"
              placeholder="Please select status of blog."
              clearable
            >
              <el-option
                v-for="item in statusList"
                :key="item.key"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <!--          <el-form-item label="Instant delivery" prop="delivery">-->
          <!--            <el-switch v-model="ArticleForm.status" />-->
          <!--          </el-form-item>-->
          <!--          <el-form-item label="Tag" prop="tag">-->
          <!--            <el-select-v2-->
          <!--              v-model="ArticleForm.tag"-->
          <!--              placeholder="tag"-->
          <!--              :options="options"-->
          <!--            />-->
          <!--          </el-form-item>-->
          <el-form-item label="Tag" prop="tag">
            <el-select v-model="ArticleForm.tag" placeholder="Please select tag of blog." clearable>
              <el-option
                v-for="item in tagList"
                :key="item.key"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="Cover" prop="cover">
            <el-upload
              class="avatar-uploader"
              :action="uploadURL"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img
                v-if="ArticleForm.cover"
                :src="ArticleForm.cover"
                class="avatar"
                alt="show me the code."
              />
              <el-icon v-else class="avatar-uploader-icon">
                <Plus />
              </el-icon>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">Create</el-button>
            <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import VMdEditor, { xss } from '@kangc/v-md-editor';
  import type { FormInstance, FormRules, UploadProps } from 'element-plus';
  import { Plus } from '@element-plus/icons-vue';
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
    tag: [
      {
        required: true,
        message: 'Please select at least one tag',
        trigger: 'blur',
      },
    ],
    cover: [
      {
        required: true,
        message: 'Please upload Article Cover Img',
        trigger: 'change',
      },
    ],
  });
  const { cookies } = useCookies();

  const ArticleForm = reactive({
    tag: ref(),
    status: ref(),
    user_id: Number(cookies.get('user_id')),
    title: ref(''),
    rich_text: '',
    content: '',
    cover: '',
    count: '',
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
  const tagList = [
    {
      key: '0',
      value: 0,
      label: 'tag1',
    },
    {
      key: '1',
      value: 1,
      label: 'tag2',
    },
  ];

  const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
    ArticleForm.cover = response['data']['location'];
  };

  const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
      ElMessage.error('Avatar picture must be JPG format!');
      return false;
    } else if (rawFile.size / 1024 / 1024 > 2) {
      ElMessage.error('Avatar picture size can not exceed 2MB!');
      return false;
    }
    return true;
  };

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
      console.log(ArticleForm);
      if (valid) {
        try {
          ArticleForm.content = xss.process(
            VMdEditor.vMdParser.themeConfig.markdownParser.render(ArticleForm.rich_text),
          );
          console.log('content', ArticleForm.content);
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
    ArticleForm.rich_text = '';
    ArticleForm.cover = '';
  };
</script>

<style scoped>
  .ruleForm {
    height: 100vh;
    margin-left: 50px;
    margin-top: 20px;
  }

  .ruleForm .el-form-item .el-input {
    width: 178px;
  }

  .ruleForm .el-form-item .el-select {
    width: 178px;
  }

  .avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
  }

  .avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
  }

  .el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
  }

  .main-scroll {
    height: calc(100vh - 60px); /* 必须给外层设高度 滚动条才会显示 */
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
</style>

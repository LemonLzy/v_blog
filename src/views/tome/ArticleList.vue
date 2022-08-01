<template>
  <div class="h-full w-full">
    <admin-card-box>
      <template #header>
        <div class="flex justify-between">
          <h4 class="font-bold text-xl">文章列表</h4>
          <div>
            <add-button @refresh="refresh" />
          </div>
        </div>
      </template>
      <template #default>
        <el-table v-loading="loading" :data="list">
          <el-table-column
            v-for="(item, i) in columns"
            :key="i"
            :label="item.label"
            :prop="item.prop"
          ></el-table-column>
          <el-table-column label="CreateTime" prop="created_at">
            <template #default="{ row }">
              <span>{{ formDate(row.created_at) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Operation">
            <template #default="{ row }">
              <el-popconfirm title="Are you sure to delete this?" @confirm="handleDel(row.id)">
                <template #reference>
                  <el-button type="danger" size="small" round>
                    <el-icon>
                      <delete />
                    </el-icon>
                  </el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <div class="w-full my-2">
          <el-pagination
            :total="total"
            background
            :page-size="formParam.size"
            :current-page="formParam.page"
            small
            @current-change="handlePageChange"
          />
        </div>
      </template>
    </admin-card-box>
  </div>
</template>

<script lang="ts" setup="setup">
  import AdminCardBox from '@/components/common/AdminCardBox.vue';
  import { reactive, toRef } from 'vue';
  import useArticle from '@/hooks/api/useArticle';
  import AddButton from '@/views/tome/ListButton/AddButton.vue';
  import { formDate } from '@/app/utils';
  import { Delete } from '@element-plus/icons';
  import useUser from '@/hooks/api/useUser';
  import { Code_Success } from '@/app/codes';
  import { ElMessage } from 'element-plus/es';

  const columns = [
    {
      label: 'ID',
      prop: 'article_id',
    },
    {
      label: 'Title',
      prop: 'title',
    },
    {
      label: 'Status',
      prop: 'status',
    },
    {
      label: 'UpdatedAt',
      prop: 'updated_at',
    },
  ];

  const formParam = reactive({ page: 1, size: 10 });

  const { articleList } = useArticle();
  const { userDel } = useUser();
  const { refresh, loading, list, total } = articleList(
    toRef(formParam, 'page'),
    toRef(formParam, 'size'),
    true,
  );

  const handlePageChange = (p: number) => {
    formParam.page = p;
  };

  const delParam = reactive({
    user_id: 0,
  });
  const handleDel = (id: number) => {
    delParam.user_id = id;
    userDel(delParam).then(({ code, msg }) => {
      if (code === Code_Success) {
        ElMessage.success(msg);
        list.value = list.value.filter((item) => item.article_id != id);
        return;
      }
      ElMessage.error(msg);
    });
  };
</script>

<style scoped></style>

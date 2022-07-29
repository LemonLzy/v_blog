<template>
  <div class="h-full w-full">
    <admin-card-box>
      <template #header>
        <h4 class="font-bold text-xl">文章列表</h4>
      </template>
      <template #default>
        <el-table :data="list">
          <el-table-column
            v-for="(item, i) in columns"
            :key="i"
            :label="item.label"
            :prop="item.prop"
          ></el-table-column>
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
      label: 'CreatedAt',
      prop: 'created_at',
    },
    {
      label: 'UpdatedAt',
      prop: 'updated_at',
    },
  ];

  const formParam = reactive({ page: 1, size: 10 });

  const { articleList } = useArticle();
  const { list, total } = articleList(toRef(formParam, 'page'), toRef(formParam, 'size'), true);

  const handlePageChange = (p: number) => {
    formParam.page = p;
  };
</script>

<style scoped></style>

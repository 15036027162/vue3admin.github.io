<template>
  <div class="tag-content">
    <a-tabs type="card-gutter" :editable="true" @tab-click="handleAdd" @delete="handleDelete" auto-switch :active-key="routeActive">
      <a-tab-pane v-for="(item, index) of appStore.tagList" :key="item.path" :title="item.name" :closable="index!==0">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';
import { useMenuStore } from '@/store';
const router = useRouter();
const appStore = useMenuStore();

const routeActive = ref('/home')

onBeforeRouteUpdate(to => {
  routeActive.value = to.fullPath;
});

// 点击Tag
const handleAdd = (val: string) => {
  router.push({ path: val })
}

// 移除Tag
const handleDelete = (val: any) => {
  appStore.removeTagItem(val)
}
</script>

<style lang="scss" scoped>
.tag-content {
  height: 38px;
  background: var(--color-bg-4);
  display: flex;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  position: relative;
  z-index: 20;
  box-shadow: 10px 5px 10px #0000001a;
}

// vue3最新样式穿透
:deep(.arco-tabs-content){
  display: none !important;
}
</style>

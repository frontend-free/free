# @fe-free/core

基于 React + Antd + @ant-design/pro-components 的业务核心组件与工具库，提供 CRUD、表单、布局、路由、上传、树等能力。

## 安装与依赖

```bash
pnpm add @fe-free/core
```

**样式**：库内已引入 `style.scss`。`tailwind.css`（core 组件依赖的 Tailwind 样式）需在**项目入口**单独引入一次，否则相关组件样式可能不生效。例如在应用根入口（如 `main.tsx` 或 `App.tsx`）中：

```ts
import '@fe-free/core/src/tailwind.css';
```

（若使用构建产物路径不同，请按实际路径调整。）

## 技术栈与约定

- **技术栈**：React、TypeScript、Antd、@ant-design/pro-components、Tailwindcss、react-router-dom
- **目录命名**：小写 + 下划线连接（如 `page_layout`、`use_global_request`）
- **导出方式**：使用具名导出 `export { X }` / `export type { X }`，不使用 `export default`

## 模块概览

### 应用壳与路由

| 导出        | 说明                                                                                                                               |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `CoreApp`   | 应用根组件：ConfigProvider + ProConfigProvider + Router + i18n + 可选更新检测，需传入 `basename`、`children`                       |
| `routeTool` | 路由工具：`setNavigate`/`setBaseName`（由 CoreApp 内部设置）、`navigateTo`、`setSearchParams`、`changeSearchParams`、`generateUrl` |

**使用示例**：入口用 `<CoreApp basename="/app">{children}</CoreApp>` 包裹；非 React 上下文中可用 `routeTool.getNavigate()`、`routeTool.setSearchParams({ tab: '1' })` 等。

### CRUD 与表格

| 导出                          | 说明                                                                                                                                                           |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CRUD`                        | 增删改查容器：`actions`（create/read/read_detail/update/delete/batch_delete）、`tableProps`（ProTable 配置，需含 `rowKey`）、详情/新建/编辑弹窗、删除/批量删除 |
| `OperateDelete` / `useDelete` | 删除操作按钮与逻辑                                                                                                                                             |
| `CRUDOfList` / `CRUDOfPure`   | 列表型/纯表单型 CRUD 变体                                                                                                                                      |

表格通过 `tableProps` 传入，类型兼容 ProTable（`columns`、`request` 等），默认 `search: false`，需搜索时在列上设置 `search: true`。

### 布局与 Tab

| 导出             | 说明                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `PageLayout`     | 三区布局：`start` / `children` / `end`，`direction` 为 horizontal（默认）或 vertical             |
| `PageLayoutTabs` | 上 Tab + 下内容区，Tab 与 URL searchParams 同步（`tabsProps.items`：`key`、`label`、`children`） |
| `Tabs`           | 对 antd Tabs 的封装，可选 `withSearchParams` 与 `tabKey` 同步到 URL                              |

### ProForm / ProTable 扩展

| 导出                                                                              | 说明                                            |
| --------------------------------------------------------------------------------- | ----------------------------------------------- |
| `ProFormJSON` / `ProFormJavascript` / `ProFormEditor`                             | JSON/JS/富文本编辑                              |
| `ProFormRecord` / `ProFormRecordArray`                                            | 键值对/键值对数组                               |
| `ProFormSwitchNumber` / `ProFormSwitchOptions` / `SwitchNumber` / `SwitchOptions` | 开关数值/选项                                   |
| `ProFormListBoolean` / `ProFormListNumber` / `ProFormListText` 等                 | 列表型表单项                                    |
| `ProFormListHelper` / `ProFormListModalHelper`                                    | 列表辅助                                        |
| `ProFormImageUpload` / `ProFormUpload` / `ProFormUploadDragger` 等                | 上传表单项                                      |
| `proFormSelectSearchProps`                                                        | 下拉搜索 + 拼音过滤的 `fieldProps`              |
| `customValueTypeMap` / `CustomValueTypeEnum`                                      | Pro 表格/表单自定义 valueType（CoreApp 已集成） |

### 树与文件树

| 导出             | 说明                     |
| ---------------- | ------------------------ |
| `Tree`           | 树组件（见 `TreeProps`） |
| `FileTree`       | 文件树展示               |
| `flatToTreeData` | 扁平数据转树结构         |

### 列表与滚动

| 导出                                                   | 说明                                                                                                                 |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `InfiniteList`                                         | 无限滚动列表：`request`（分页接口）、`renderItem`、`pageSize`、`gridClassName`（内部使用 `useGlobalInfiniteScroll`） |
| `ScrollFixed` / `useScrollFixed` / `getScrollbarWidth` | 滚动固定与滚动条宽度                                                                                                 |

### ahooks / Hooks

| 导出                      | 说明                                                    |
| ------------------------- | ------------------------------------------------------- |
| `useGlobalInfiniteScroll` | 全局无限滚动 hook，供 InfiniteList 或自定义无限列表使用 |
| `useGlobalRequest`        | 全局请求 hook                                           |
| `useLocalforageState`     | 基于 localforage 的本地持久化 state                     |

### 上传与文件

| 导出                                                       | 说明          |
| ---------------------------------------------------------- | ------------- |
| `Upload` / `UploadDragger`                                 | 上传组件      |
| `ImageUpload` / `ImageUploadDragger` / `AvatarImageUpload` | 图片/头像上传 |
| `FileCard`                                                 | 文件卡片展示  |

### 编辑器与展示

| 导出                                          | 说明                 |
| --------------------------------------------- | -------------------- |
| `Editor`                                      | 代码编辑器           |
| `EditorJSON` / `EditorLogs` / `EditorMention` | JSON/日志/提及编辑器 |
| `DataViewer`                                  | 数据查看             |
| `Markdown` / `CustomMarkdown`                 | Markdown 渲染        |

### 其它

| 导出                                | 说明                   |
| ----------------------------------- | ---------------------- |
| `LoadingButton`                     | 带 loading 的按钮      |
| `Copy`                              | 复制到剪贴板           |
| `Record` / `RecordArray`            | 键值对/键值对数组展示  |
| `NumberSlider` / `PercentageSlider` | 数字/百分比滑块        |
| `RequestError` / `initErrorHandle`  | 请求错误与全局错误处理 |
| `downloadInterceptor`               | 下载拦截               |

### 主题

### Tailwind Token 参考（tailwind.css）

`tailwind.css` 通过 `@theme` 定义了以下 CSS 变量，引入后可在项目中使用对应 Tailwind 类名（如 `text-primary`、`bg-theme03`、`text-text-color-03` 等）。完整定义见 `packages/core/src/tailwind.css`。

| 类别          | 变量名                  | 说明/用途 |
| ------------- | ----------------------- | --------- |
| **主色**      | `--color-primary`       | 主色      |
|               | `--color-theme09`       | 主色深    |
|               | `--color-theme08`       | 主色      |
|               | `--color-theme05`       | 主色中    |
|               | `--color-theme03`       | 主色浅    |
|               | `--color-theme02`       | 主色最浅  |
| **语义色·红** | `--color-red09`         | 红深      |
|               | `--color-red08`         | 红        |
|               | `--color-red05`         | 红中      |
|               | `--color-red03`         | 红浅      |
| **语义色·绿** | `--color-green09`       | 绿深      |
|               | `--color-green08`       | 绿        |
|               | `--color-green05`       | 绿中      |
|               | `--color-green03`       | 绿浅      |
| **语义色·黄** | `--color-yellow09`      | 黄深      |
|               | `--color-yellow08`      | 黄        |
|               | `--color-yellow05`      | 黄中      |
|               | `--color-yellow03`      | 黄浅      |
| **文字**      | `--text-color-01`       | 文字最深  |
|               | `--text-color-02`       | 文字      |
|               | `--text-color-03`       | 文字次要  |
|               | `--text-color-04`       | 文字最浅  |
| **边框**      | `--border-color-01`     | 边框浅    |
|               | `--border-color-02`     | 边框中    |
|               | `--border-color-03`     | 边框深    |
| **背景**      | `--background-color-01` | 背景最浅  |
|               | `--background-color-02` | 背景浅    |
|               | `--background-color-03` | 背景中    |
|               | `--background-color-04` | 背景深    |

使用示例：`className="text-primary"`、`className="bg-theme03"`、`className="text-text-color-03"`。

当你在本仓库或引用 `@fe-free/core` 的项目中编写代码时，可参考以下约定：

1. **应用入口**：使用 `<CoreApp basename="...">` 包裹路由，以保证路由、i18n、Pro 组件 valueType 等生效。
2. **CRUD 页**：优先使用 `CRUD` + `tableProps`（含 `rowKey`、`columns`、`request`），通过 `actions`、`detailForm`、`requestCreateByValues`、`requestUpdateByValues`、`requestDeleteByRecord` 等接业务接口。
3. **带 Tab 的页面**：用 `PageLayoutTabs` 或 `Tabs` + `withSearchParams`，Tab 与 URL 同步，便于分享与刷新保持状态。
4. **表单**：在 ProForm 中需要 JSON/键值对/列表/上传时，使用本库的 `ProForm*` 组件；下拉搜索用 `proFormSelectSearchProps`。
5. **路由跳转/参数**：使用 `routeTool.navigateTo`、`routeTool.setSearchParams`、`routeTool.changeSearchParams`，不要直接操作 `window.location`（除非确需整页跳转）。
6. **命名与导出**：新模块目录用小写+下划线；对外一律具名导出 `export { X }` / `export type { X }`。
7. **样式**：库内已引入 `style.scss`；**`tailwind.css` 需在项目入口单独 `import '@fe-free/core/src/tailwind.css'`**，否则 core 组件所需的 Tailwind 类可能不生效。组件类名多带 `fec-` 前缀，避免与业务样式冲突。

更多细节以 `src/index.ts` 的导出和各自模块的 TypeScript 类型为准。

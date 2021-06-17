## 简介
为传入的`function`添加`debounce`处理，并提供`run`函数和`cancel`函数

## 代码演示
#### 基本使用

<use-debounce-fn />

#### 代码  

<<< ./src/components/useDebounceFn.vue

## API
```ts
const { run, cancel } = useDebounceFn(func, wait);
```

#### Retrun
| 参数 | 说明 | 类型 |
| --- | --- | --- |
| `run` | 代理原函数的新`debounce`函数 | `function` |
| `cancel` | 在`wait`时间到达之前，提供一个取消当前`run`的方法 | `function` |

#### Params
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `func` | 传入的函数 | `function` | - |
| `wait` | 防抖的时间间隔 | `number` | 500ms |
| `immediate` | 是否立即执行 | `boolean` | false |


# 安装

``` 
 yarn install
```

# 运行

``` shell

 npm run dev

```


# 说明
使用 typescript 开发 vue 的一个简单示例
相对于 js 开发，需增加以下内容:

## 安装依赖

``` shell
yarn add typescript -dev
yarn add ts-loader
```
## webpack 需添加 ts-loader
在 module.rules 中添加
``` js
{
    test: /\.ts$/,
    exclude: /node_modules|vue\/src/,
    loader: 'ts-loader',
    options: {
        appendTsSuffixTo: [/\.vue$/]
    }
},
```
## 添加 tsconfig.json

1. `allowSyntheticDefaultImports` 需设置为 true。
2. `allowSyntheticDefaultImports`设置为`node` 。
3. 当使用装饰器时,也需设置`allowSyntheticDefaultImports`。
4. 需在`include`中将所有`ts`文件都包含进去。
更多设置请参照[vue 官网](https://cn.vuejs.org/v2/guide/typescript.html)

## 添加 vue-stub 声明文件
``` js
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
```
## 使用 typescript 类声明 vue 组件
这里使用 class 方式创建组件。
1. `components`,`props`,`store` 等需在装饰器中设置。
2. 声明类的形式为:
``` typescript
export default class App extends Vue {

}
```
3. vue组件所有的`data`,`filter`,`computed`,`methods` 方法，需直接在类中定义。

js 形式:
```
export default  {
    computed:{
        computed1(){

        }
    },
    methods:{
        methods1(){}
    }

}
```
ts 形式

@Component({

})
export default class App extends Vue {
    computed1(){

    }
    method1(){
        
    }
}



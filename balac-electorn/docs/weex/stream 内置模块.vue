<!--
    内置模块：stream - 用于实现网络请求。

-->
<template>
    <div style="justify-content: center">
        <text class="label">Vue.js Star Count</text>
        <text class="count">{{count}}</text>
    </div>
</template>

<script>
    const stream = weex.requireModule('stream');
    import querystring from 'querystring';

    export default {
        data () {
            return {
                count: 'fetching...'
            };
        },
        created () {
            this.get();
            this.post();

        },
        methods: {
            get () {
                stream.fetch({
                    method: 'GET',
                    type: 'json',
                    url: 'https://api.github.com/repos/vuejs/vue'
                }, res => {
                    this.count = res.ok ? res.data.stargazers_count : '- unknown -';
                });
            },
            post () {
                var param = {
                    password: "123456",
                    rememberMe: "true",
                    userName: "yantianping"
                };
                
                stream.fetch({
                    method: 'POST',
                    type: 'json',
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    body: querystring.stringify(param),
                    url: 'http://erdpsit.e-lead.cn/passport/v1/login'
                }, res => {
                    //
                });
            }
        }
    };
</script>

<style scoped>
    .label {
        color: #666;
        text-align: center;
        font-size: 60px;
    }
    .count {
        color: #41B883;
        text-align: center;
        font-size: 100px;
        margin-top: 80px;
        margin-bottom: 100px;
    }
</style>
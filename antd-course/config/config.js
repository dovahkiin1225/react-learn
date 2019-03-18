export default {
    // singular: true,
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            // {
            //     path: '/',
            //     component: 'Helloworld',
            // },
            { path: 'puzzlecards', component: './puzzlecards' },
            {
                path: 'helloworld',
                component: './HelloWorld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            }
        ]
    }],
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            antd: true,
            dva: true
        }],
    ],
    // 把 ajax 请求发送到你的本地开发服务器，然后本地开发服务器再把 ajax 请求转发到远端去，
    // 从网络拓扑上看本地开发服务器起着「反向代理」的作用。
    // 本地服务器和远端服务器是「服务器和服务器间的通信」，就不存在跨域问题了
    proxy: {
        '/dev': {
            target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true,
        },
    },
};
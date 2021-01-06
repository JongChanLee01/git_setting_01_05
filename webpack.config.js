// webpack을 불러옴
var webpack = require('webpack');

// export는 이 객체를 모듈로 내보내겠다는 뜻
module.exports = {
    // entry를 시작으로 필요한 모듈들을 불러옴
    entry: './src/index.js',

    // 최종적으로 합쳐진(빌드된) 파일의 target 경로와 파일명
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    // 개발서버의 설정
    devServer: {
        // 파일이 수정될때마다 리워딩 여부
        hot: true,

        // 리워딩때마다 빌드된 bundle.js에 넣어주는것
        inline: true,

        // 개발서버의 host
        host: '0.0.0.0',

        // 개발서버의 포트
        port: 4000,

        // index파일의 경로
        contentBase: __dirname + '/public/',
    },

    module: {
        // ES6나 react(JSX형식) 형식을 일반 JS형식으로 변환해줌
        loaders: [
            {
                test: /.js$/,
                loaders: ['react-hot','babel?' + JSON.stringify(
                    {
                        cacheDirectory: true,
                        //es6코드로 변환 하고 react코드도 변환
                        presets: ['es2015', 'react']
                    })],
                exclude: /node_modules/
            }
        ]
    },

    // hot모듈을 플러그인으로 추가함, 이 밖에 다양한 플러그인 또한 추가가능
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
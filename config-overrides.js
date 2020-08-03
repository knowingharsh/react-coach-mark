const { fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = (config, env) => {
    config = {
        ...config,
        ...fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        })(config),
        ...addLessLoader({
            javascriptEnabled: true
        })(config)
    }

    return config;
}
const { addLessLoader } = require('customize-cra');

module.exports = (config, env) => {
    config = {
        ...config,
        ...addLessLoader({
            javascriptEnabled: true
        })(config)
    }

    return config;
}
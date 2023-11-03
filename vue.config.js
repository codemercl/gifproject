module.exports = {
    pwa: {
      name: 'vueApp',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'default',
      manifestOptions: {
        start_url: '.',
        display: 'standalone',
      },
      workboxPluginMode: 'GenerateSW',
      workboxOptions: {
        exclude: [/\.map$/, /_redirects/],
      },
    },
  };
  
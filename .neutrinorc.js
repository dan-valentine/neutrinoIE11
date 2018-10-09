module.exports = {
  use: [
    "@neutrinojs/standardjs",
    [
      "@neutrinojs/react",
      {
        devServer: {
          port: 4000,
          proxy: "https://swapi.co/"
        },

        html: {
          title: "testneutrino"
        },
        targets: {
          browsers: [
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Edge versions",
            "last 2 Opera versions",
            "last 2 Safari versions",
            "last 2 iOS versions",
            "ie 11"
          ]
        }
      }
    ]
  ]
};

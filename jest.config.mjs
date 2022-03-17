const defaulConfig = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: [
    "text",
    "lcov",
  ],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  maxWorkers: "50%",
  watchPathIgnorePatterns: [
    "node_modules"
  ],
  transformIgnorePatterns: [
    "node_modules"
  ]
}

export default {
  projects: [
    {
      ...defaulConfig,
      testEnvironment: "node",
      displayName: "backend",
      collectCoverageFrom: [
        "server/",
        "!server/index.js"
      ],
      transformIgnorePatterns: [
        ...defaulConfig.transformIgnorePatterns,
        "public"
      ],
      testMatch: [
        "**/tests/**/server/**/*.test.js"
      ]
    },
    {
      ...defaulConfig,
      testEnvironment: "jsdom",
      displayName: "frontend",
      collectCoverageFrom: [
        "public/",
      ],
      transformIgnorePatterns: [
        ...defaulConfig.transformIgnorePatterns,
        "server"
      ],
      testMatch: [
        "**/tests/**/public/**/*.test.js"
      ]
    }
  ]
}
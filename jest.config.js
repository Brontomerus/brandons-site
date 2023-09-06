const config = {
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.md$': 'markdown-to-jsx',
    '^.+\\.md$': 'react-markdown',
    '^.+\\.md$': 'remark-gfm',
  },
};

module.exports = config;

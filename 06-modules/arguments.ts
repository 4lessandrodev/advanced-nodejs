/** @ts-ignore */
console.log(arguments);

/**
$ node ./arguments.js
[Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: '/home/user/Workspace/advanced-nodejs/06-modules',
      exports: {},
      filename: '/home/user/Workspace/advanced-nodejs/06-modules/arguments.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      '/home/user/Workspace/advanced-nodejs/06-modules/arguments.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: '/home/user/Workspace/advanced-nodejs/06-modules',
    exports: {},
    filename: '/home/user/Workspace/advanced-nodejs/06-modules/arguments.js',
    loaded: false,
    children: [],
    paths: [
      '/home/user/Workspace/advanced-nodejs/06-modules/node_modules',
      '/home/user/Workspace/advanced-nodejs/node_modules',
      '/home/user/Workspace/node_modules',
      '/home/user/node_modules',
      '/home/node_modules',
      '/node_modules'
    ]
  },
  '3': '/home/user/Workspace/advanced-nodejs/06-modules/arguments.js',
  '4': '/home/user/Workspace/advanced-nodejs/06-modules'
}
 */
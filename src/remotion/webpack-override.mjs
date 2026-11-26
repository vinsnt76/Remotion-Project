export const webpackOverride = (config) => {
  return {
    ...config,
    module: {
      ...config.module,
      parser: {
        ...config.module?.parser,
        javascript: {
          ...config.module?.parser?.javascript,
          exportsPresence: "warn",
        },
      },
    },
  };
};

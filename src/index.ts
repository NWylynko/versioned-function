export const versioned = <Functions extends { [key: string]: Function }>(functions: Functions) => {
  const versions = new Set<keyof Functions>();

  for (const version in functions) {
    versions.add(version);
  }

  const matcher = <Version extends keyof Functions>(version: Version) => {
    if (!versions.has(version)) {
      throw new Error(`The requested version does not exist`);
    }

    return functions[version];
  };

  return { matcher };
};

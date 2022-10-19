import semverValid from "semver/functions/valid";

export const versioned = <Functions extends { [key: string]: Function }>(functions: Functions) => {
  const versions = new Set<keyof Functions>();

  for (const version in functions) {

    const validVersion = semverValid(version)

    if (validVersion === null) {
      throw new Error(`Version ${version} is not a valid semver`)
    }

    versions.add(version);
  }

  const matcher = <Version extends keyof Functions>(version: Version): Functions[Version] => {
    if (!versions.has(version)) {
      throw new Error(`The requested version does not exist`);
    }

    return functions[version];
  };

  return { matcher };
};

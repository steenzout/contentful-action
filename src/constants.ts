import path from "path";

export const {
  GITHUB_WORKSPACE,
  LOG_LEVEL,
  INPUT_SPACE_ID: SPACE_ID,
  INPUT_MANAGEMENT_API_KEY: MANAGEMENT_API_KEY,
  INPUT_MIGRATIONS_DIR,
  INPUT_DELETE_FEATURE,
  INPUT_SET_ALIAS,
  INPUT_FEATURE_PATTERN,
  INPUT_MASTER_PATTERN,
  INPUT_VERSION_CONTENT_TYPE,
  INPUT_VERSION_FIELD,
  INPUT_CONTENTFUL_ALIAS,
} = process.env;

const booleanOr = (str: string, fallback: boolean): boolean => {
  switch (str) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return fallback;
  }
};

export const DEFAULT_MIGRATIONS_DIR = "migrations";
export const DEFAULT_MASTER_PATTERN = "master-[YYYY]-[MM]-[DD]-[mm][ss]";
export const DEFAULT_FEATURE_PATTERN = "GH-[branch]";
export const DEFAULT_VERSION_CONTENT_TYPE = "versionTracking";
export const DEFAULT_VERSION_FIELD = "version";
export const DEFAULT_DELETE_FEATURE = false;
export const DEFAULT_SET_ALIAS = false;
export const DEFAULT_CONTENTFUL_ALIAS = "master";

export const VERSION_CONTENT_TYPE =
  INPUT_VERSION_CONTENT_TYPE || DEFAULT_VERSION_CONTENT_TYPE;
export const FEATURE_PATTERN = INPUT_FEATURE_PATTERN || DEFAULT_FEATURE_PATTERN;
export const MASTER_PATTERN = INPUT_MASTER_PATTERN || DEFAULT_MASTER_PATTERN;
export const VERSION_FIELD = INPUT_VERSION_FIELD || DEFAULT_VERSION_FIELD;
export const DELETE_FEATURE = booleanOr(
  INPUT_DELETE_FEATURE,
  DEFAULT_DELETE_FEATURE
);
export const SET_ALIAS = booleanOr(INPUT_SET_ALIAS, DEFAULT_SET_ALIAS);
export const MIGRATIONS_DIR = path.join(
  GITHUB_WORKSPACE,
  INPUT_MIGRATIONS_DIR || DEFAULT_MIGRATIONS_DIR
);

export const CONTENTFUL_ALIAS = INPUT_CONTENTFUL_ALIAS || DEFAULT_CONTENTFUL_ALIAS;
export const DELAY = 3000;
export const MAX_NUMBER_OF_TRIES = 10;

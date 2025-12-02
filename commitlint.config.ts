import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Commit must start with a valid type
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "config",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],

    // Type must be lowercase
    "type-case": [2, "always", "lower-case"],

    // Description (subject) must not be empty
    "subject-empty": [2, "never"],

    // Block generic messages
    "subject-min-length": [2, "always", 3],
  },
};

export default config;

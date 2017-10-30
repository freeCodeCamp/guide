Replace this sentence with a brief description of the awesome changes your PR has. 😊

---

<!-- Thank you for contributing to the `guides` repo, it is much appreciated! 😊 -->

<!-- Before creating a PR, please make sure to verify the following. -->

<!-- If none of the checkboxes are marked, it is less likely that your PR will be successfully merged. -->

## ✅️ By submitting this PR, I have verified the following

### Guidelines

- [] Added descriptive name to PR
  - Your PR should NOT be called `Update index.md` since it does not help the maintainer understand what has been changed.
  - For example, if you create a **Variables** article inside the **Python** directory, the pull request title should be **Python: add Variables article**.
  - Other examples are **Git: edit Git Commit article** or **PHP: create PHP section and add Data Structures article**
- [] Added a description to PR
- [] Avoided creating a duplicate or repetitive PR
  - Searched through the open pull requests to check that there is not a PR already open that writes the same article or makes similar changes.
- [] Reviewed necessary guidelines in [`CONTRIBUTING.md`](https://github.com/freeCodeCamp/guides/.github/CONTRIBUTING.md).
- [] Followed the **Formatting** guidelines below which will allow the [Travis CI build](https://travis-ci.org/freeCodeCamp/guide) to pass.

#### Content

> If adding new advice or content,

- [] Looked over **Article Style Guide** section in [`CONTRIBUTING.md`](https://github.com/freeCodeCamp/guides/.github/CONTRIBUTING.md)
- [] Looked over **Technical Writing** section [`CONTRIBUTING.md`](https://github.com/freeCodeCamp/guides/.github/CONTRIBUTING.md)
- [] No spelling or grammar errors.
- [] No plagiarized content or content that has been directly copied from another source.

> If editing a stub article,

- [] Changes are substantial enough to justify removing the stub text `"This article is a stub..."`.
  - We can't accept PRs that only add links to the **More Information** or **More Resources** section - a repository script will automatically delete any changes and revert it to the stub template if the stub language is still in that file.

#### Resources

> If adding a new resource,

- [] There is a useful title for the resource.
- [] There is a link to the resource.

### Formatting

- [] Any new folder/article created in `src/pages` has an `index.md` file with appropriate title syntax.
  - All articles must have the following as the first three lines in the file or else the Travis CI build will fail.
    ```markdown
    ---
    title: Insert article title here
    ---
    ```
- [] No whitespace.
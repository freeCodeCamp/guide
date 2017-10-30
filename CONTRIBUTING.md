# Contributor's Guide

## How to contribute
You can create a PR (Pull Request) with your draft article (or edits on an existing article) in two ways:

1) The easiest method is to use the GitHub interface. Watch the video demonstration or follow the steps below it:

![Gif showing the GitHub interface steps](https://i.imgur.com/0cmxJwN.gif)

- Go into the "pages" folder (located in `guides/src`) and find the article stub you'd like to write or edit. All stubs will be in an index.md file
- Click the "Edit this file" pencil icon and make your changes to the file in GitHub-flavored Markdown
- Scroll to the bottom of the screen and add a commit message explaining your changes. Then select the radio button option for "Create a new branch for this commit and start a pull request" and click "Propose file changes"
- On the next screen, you can add any other details about your PR, then click "Create pull request"


2) If you prefer to write locally before submitting a PR, then follow these steps:
- Fork this repository
- Copy it to your local machine by running the command `git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git`
- Add a remote upstream so git knows where the official freeCodeCamp guides repository is located by running the command `git remote add upstream https://github.com/freeCodeCamp/guides.git`
- Create a new branch for your work with the command `git checkout -b NEW-BRANCH-NAME`. Try to name your branch in a way that describes your article topic, like `fix/ArticleHTMLElements`
- Write your article, commit your changes locally with the command `git commit -m "SHORT MESSAGE"`, and push your new branch to GitHub with the command `git push origin NEW-BRANCH-NAME`
- Go to your repository on GitHub and open a PR

Make sure to maintain your local fork going forward so it stays up-to-date with the freeCodeCamp guides repository. The next time you want to contribute, checkout your local `master` branch and run the command `git pull --rebase upstream master` before creating a new branch. This will grab all the changes on the official `master` branch without making an additional commit in your local repository.

## Running the Guide locally on your own computer

Finally, if you want to run a version of the guides repository locally, follow these steps:

1. Ensure you have the `yarn` package manager installed `npm install -g yarn`
2. Fork this repository
3. :point_down:
```sh
git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git
cd guides
yarn install
yarn run dev
```

In this project, we are using `yarn` because `netlify` builds our site with `yarn`.

## How we review pull requests

### General guidelines
- we check that a pull request respects the [Article style guide](./README.md/#article-style-guide)
- we follow general QA tips found in [Moderator guidelines](https://forum.freecodecamp.org/t/freecodecamp-moderator-guidelines/18295)
- as long as a pull request improves or expands the guide, we accept it even if it contains imperfect English or partial content

### PR Review Ordering
Older pull requests are reviewed first.  
You can use this filter to list relevant pull requests: [is:pr is:open sort:updated-asc -label:platform -label:enhancement -label:invalid -label:"changes requested"](https://github.com/freeCodeCamp/guides/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20-label%3Aplatform%20-label%3Aenhancement%20-label%3Ainvalid%20-label%3A%22changes%20requested%22)

### Accepting a PR

#### Squash commits
We use the __Squash and Merge__ option when merging the PR.
This will keep the commit history clean.

![GIF showing Squash functionality](https://files.gitter.im/FreeCodeCamp/Contributors/56MQ/9cb8db153d7bb1b3576cd1ffc207e39d.gif)

#### Title of a PR
The title of your pull request should clearly indicate the topic and the changes you are making.

- use meaningful titles
- avoid `Updating index.md`

For example, if you create a _Variables_ article inside the _Python_ directory,  
the pull request title should be `Python: add Variables article`.

**Format**: `{Parent category}: add {Article's title} article`

### Closing a PR
We close a pull request:

- if an older PR for the same article is merged, and your PR doesn't add new content
- if there is zero/little effort in it (e.g: copy pasting from another source like Wikipedia)
- if there is copied text from a copyrighted source (see also https://github.com/freeCodeCamp/guides/issues/2503)
- if it does not respect the [Article style guide](https://github.com/freeCodeCamp/guides#article-style-guide)
- if it does not respect the [Academic Honesty policy](https://www.freecodecamp.org/academic-honesty)
- if it is stale (if a change is requested and there is no activity for about 2 weeks)

Also, if you're working off a "stub" article, your changes must be substantial enough to replace the stub text. We won't accept a PR that only adds links to the "More Information:" section. The repository has a `Normalise.js` script that adds attributes to links, but also checks for "This is a stub..." text via a RegEx. If found, it will revert the article text back to the generic stub text (and erase your changes). This is intended behavior, since it allows us to update all stubs if the template stub changed for any reason.

#### Template text for closing PR
With the exception of the first bullet point above, if the reviewer closes your PR, they will leave the following generic text:

> Thank you for your pull request. Please read this style guide: https://github.com/freeCodeCamp/guides#article-style-guide
I am closing this pull request for now. Please let me know if you have any questions.

### Conflicting and duplicate PRs
A PR is considered a "duplicate" if it makes changes to the same article as another PR. In general, a reviewer will: 

1. Sort PR from the oldest
2. Search for PRs with similar content
3. Merge from the oldest to the newest

It is very likely there will be merge conflicts with duplicate PRs. Reviewers will make every effort to resolve these conflicts and merge duplicate PRs. However, if the newer PR doesn't add to or improve upon the article, the reviewer will close it with this template text:

#### Template text for closing a duplicate PR
> We apologize for the inconvenience, however, while your PR was in the review queue someone else proposed changes to the same file and we merged their contribution. As a result, there were substantial merge conflicts that we were unable to resolve. We will be closing this PR for now, but you are welcome to try to resolve the conflicts yourself and reopen the PR. If you're unsure about this process, feel free to reach out in the [Contributor Gitter channel](https://gitter.im/FreeCodeCamp/Contributors) or comment below. If you decide to resolve conflicts, we recommend you review the existing file to figure out how you could incorporate your own ideas while maintaining the other contributor's work. Thank you for contributing and keep up the awesome work!

### What PR labels mean
- **content** is for pull requests that modify the content of articles on the guide (they add a new article or update an existing article)
- **duplicate** is for pull requests that have the same content as another open PR
- **changes requested** is for pull requests that need a change before getting merged
- **stale**: is for pull requests with _"changes requested"_ label that doesn't get activity after about 2 weeks.  A _stale_ pull request should be closed (example: https://github.com/freeCodeCamp/guides/pull/235)

### Requesting changes
If a pull request is not perfect, the reviewer may:
- request changes to the contributor and add the *changes requested* label
- fix minor issues and make a commit on top of the PR

### A PR breaks the Travis CI build
All PRs must pass the Travis CI checks before we can merge it. If a PR breaks the build (a Travis CI check fails and shows a red "X") there are two likely sources. You will need to fix the issue before we can merge your PR:

1. Your PR creates a new article and it's missing an `index.md` file somewhere. Every folder in `src/pages` needs an `index.md` file in it (and the name has to be `index.md`). Two likely scenarios are 1) you named the new article file something other than `index.md`, or 2) you created both a new folder, then a sub-folder, you wrote the new article in the sub-folder but forget to put a stub `index.md` file in the new folder
2. The article doesn't have a `title` field at the top - every article needs this as the first 3 lines of the `index.md` file (the site uses this field to create the menu):

```
---
title: Title of the article that shows up in the site's menu
---
```
yo yo

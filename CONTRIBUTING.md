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
- we check that a pull request respects the [Article style guide](#article-style-guide)
- we follow general QA tips found in [Moderator guidelines](https://forum.freecodecamp.org/t/freecodecamp-moderator-guidelines/18295)
- as long as a pull request improves or expands the guide, we accept it even
if it contains imperfect English or partial content


### PR Review Ordering
Older pull requests are reviewed first.  
You can use this filter to list relevant pull requests: [is:pr is:open sort:updated-asc -label:platform -label:enhancement -label:invalid -label:"changes requested"](https://github.com/freeCodeCamp/guides/pulls?utf8=%E2%9C%93&q=is%3Apr%20is%3Aopen%20sort%3Aupdated-asc%20-label%3Aplatform%20-label%3Aenhancement%20-label%3Ainvalid%20-label%3A%22changes%20requested%22)

### Accepting a PR

#### Squash commits
We use the __Squash and Merge__ option when merging the PR.
This will keep the commit history clean.

![GIF showing Squash functionality](https://files.gitter.im/FreeCodeCamp/Contributors/56MQ/9cb8db153d7bb1b3576cd1ffc207e39d.gif)

#### PR title
Currently under discussion, see [here](https://github.com/freeCodeCamp/guides/issues/1853).

- use meaningful titles
- avoid `Updating index.md`

In example: if you create a _Variables_ article inside the _Python_ directory,  
the pull request title should be `Python: added "Variables" article`.  

**Format**: `{Parent category}: add "{Article's title}" article`


### Closing a PR

We close a pull request:
- if there is zero/little effort in it (e.g: copy pasting from another source like Wikipedia)
- if there is copied text from a copyrighted source (see also https://github.com/freeCodeCamp/guides/issues/2503)
- if it does not respect the [Article style guide](https://github.com/freeCodeCamp/guides#article-style-guide)
- if it does not respect the [Academic Honesty policy](https://www.freecodecamp.org/academic-honesty)
- if it is stale (if a change is requested and there wasn't any activity for about 2 weeks)

#### Template text for closing PR
> Thank you for your pull request. Please read this style guide: https://github.com/freeCodeCamp/guides#article-style-guide
I am closing this pull request for now. Please let me know if you have any questions.


### Conflicting and duplicate PRs
To find duplicates PRs: 

1. Sort PR from the oldest
1. Search for PRs with similar content
1. Merge from the oldest to the newest

There will probably be merge conflicts; if it is the case, notify the contributor with this template text:
  
#### Template text
> We apologize for the inconvenience; however, while your PR was in the review queue someone else proposed the same file and their contribution was merged. As a result we need to resolve merge conflicts in order to merge your changes. If you're unsure about this process feel free to reach out in the [Contributor Gitter channel](https://gitter.im/FreeCodeCamp/Contributors) or comment below. We recommend you review the existing file and propose how you could incorporate your own ideas while maintaining the other contributor's work. We will be closing this PR for now, but if you still want to see your changes added let us know and we can open it for additional commits.
Thank you for contributing! Keep up the awesome work 

### Requesting changes

If a pull request is not perfect we can:
- request changes to the contributor and add the *changes requested* label (see below)
- fix minor issues by ourselves

#### Adding Labels
- **content** is for pull requests that modify the content of articles on the guide (e.g.: new articles or updating articles)
- **duplicate** is for pull requests that have the same content as another open PR
- **changes requested** is for pull requests that need a change before getting merged.
- **stale**: is for pull requests with _"change requested"_ label that doesn't get activity after about 2 weeks.  A _stale_ pull request should be closed (example: https://github.com/freeCodeCamp/guides/pull/235)



---
title: "Transferring a Heroku project between nonprofit project owners"
parent: "to-be-sorted"
---

## Heroku:

Once the person who will receive the Heroku app has created a Heroku account, follow the steps located here to transfer it to them: [https://devcenter.heroku.com/articles/transferring-apps](https://devcenter.heroku.com/articles/transferring-apps)

## MLAB:

Create an MLAB "user" account for the person whom you want to transfer your MLAB database: [http://docs.mlab.com/accounts/#account-users](http://docs.mlab.com/accounts/#account-users)

Then they would need to reassign your admin privileges to the account you've just created: [http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only](http://docs.mlab.com/accounts/#re-assign-admin-privileges-admin-only)

## GitHub or BitBucket

The new project owners can either fork your existing repo or you can transfer ownership of it to them in GitHub: [https://help.github.com/articles/about-repository-transfers/](https://help.github.com/articles/about-repository-transfers/)

To transfer it in BitBucket: [https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html](https://confluence.atlassian.com/bitbucket/change-or-transfer-repository-ownership-289964397.html)

## Ensure no keys remain in your Git history

If your project will be open source, be careful to remove any keys (they should never have been committed in the first place, but it's better late than never to remove them). Here's how to search through your code history for them:

If you find a key somewhere in your repository, or discover that a sensitive file such as your .env was somehow committed at one point, you can purge it from your git history with BFG: [https://help.github.com/articles/remove-sensitive-data/](https://help.github.com/articles/remove-sensitive-data/)


# Preface

* I'm working on a windows machine where I installed [perl](http://strawberryperl.com/) in order to be able to run [myrepos](https://myrepos.branchable.com/).
* I'm running myrepo from within the `git bash` shell that came together with git.

# To prepare a release branch for the coming release

In this example, it's the release

```bash
#create the release branch
RELEASE_BRANCH="release-2017-06"
mr run git checkout -b $RELEASE_BRANCH
mr run git push --set-upstream origin $RELEASE_BRANCH
```

```bash
#to delete an old release branch which we don't need anymore
VERY_OLD_RELEASE_BRANCH="release-2017-01"
perl f:/myrepos/mr run git push origin --delete $VERY_OLD_RELEASE_BRANCH
```

# To tag an actual release and update the release-latest branch

```bash
mr run git pull

#do the tagging; one might have to tag individual changesets that are not the latest of each branch, that's why I don't use myrepos here
#git tag -a v4.54.53 -m "Release v4.54.53 (2017-05)" -m "Release notes can be found at https://github.com/metasfresh/metasfresh/blob/master/ReleaseNotes.md#metasfresh-45453-2017-05" <changeset-if-not-latest-of-branch>

mr run git checkout release-latest
mr run git merge v4.54.53
mr run git push --tags
```

# To update the `release-latest` branch

```bash
mr run git checkout release-latest
mr run git merge v4.54.53 # ..or whatever version just tagged in the previour step
```

Also remember to update the [mvn-release-latest](https://repo.metasfresh.com/content/groups/mvn-release-latest/) artifact repository on [repo.metasfresh.com](https://repo.metasfresh.com).

# (Appendix: how I actually created that "release-latest" branch)
```bash
perl f:/myrepos/mr run git checkout v4.52.51
perl f:/myrepos/mr run git checkout -b release-latest
perl f:/myrepos/mr run git push --set-upstream origin release-latest
```

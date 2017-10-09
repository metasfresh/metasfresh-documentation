
# Preface

* I'm working on a windows machine where I installed [perl](http://strawberryperl.com/) in order to be able to run [myrepos](https://myrepos.branchable.com/).
* I'm running myrepo from within the `git bash` shell that came together with git.


```bash
#to delete an old release branch which we don't need anymore
VERY_OLD_RELEASE_BRANCH="release-2017-04"
mr run git push origin --delete $VERY_OLD_RELEASE_BRANCH
```

# To tag an actual release and update the release-latest branch

```bash
mr run git checkout release
mr run git pull


#do the tagging; one might have to tag individual changesets that are not the latest of each branch, that's why I don't use myrepos here
#git tag v5.0 -m "Release v5.0 (2017-10)" -m "Release notes can be found at https://github.com/metasfresh/metasfresh/blob/master/ReleaseNotes.md#metasfresh-50-2017-10"
mr run git push --tags
mr run git checkout release-latest
mr run git merge v5.0
mr run git push
```


# (Appendix: how I actually created that "release-latest" branch)
```bash
perl f:/myrepos/mr run git checkout v4.52.51
perl f:/myrepos/mr run git checkout -b release-latest
perl f:/myrepos/mr run git push --set-upstream origin release-latest
```

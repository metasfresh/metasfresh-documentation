
# Preface

* I'm working on a windows machine where I installed [perl](http://strawberryperl.com/) in order to be able to run [myrepos](https://myrepos.branchable.com/).
* I'm running myrepo from within the `git bash` shell that came together with git.
  * i have individual `.mrconfig` files and was (on my windows system) unable to register them as trusted. Hence the `-t`


# To tag an actual release and update the release-latest branch

```bash
mr -t run git checkout release
mr -t run git pull


#do the tagging; one might have to tag individual changesets that are not the latest of each branch, that's why I don't use myrepos here
#git tag 5.0 -m "Release 5.0 (2017-10)" -m "Release notes can be found at https://github.com/metasfresh/metasfresh/blob/master/ReleaseNotes.md#metasfresh-50-2017-10"
mr -t run git push --tags
```

## @hyrious/rvdata2-textconv

> A simple textconv script to print Scripts.rvdata2 (RPG Maker VA) in git diff.

## Install

```
npm i -g @hyrious/rvdata2-textconv
```

## Usage

Print contents of Scripts.rvdata2:

```
rvdata2-textconv Scripts.rvdata2
```

### Git

Add this to your global `.gitconfig` or `.git/config` per repo:

```gitconfig
[diff "rvdata2"]
	textconv = rvdata2-textconv
```

Add this to your `.gitattributes` per repo (create one if not exist):

```gitattributes
*.rvdata2   diff=rvdata2
```

## Todo

Currently I'm not in a hurry to implement features below, if you find this
tool helpful and want something new, feel free to raise an issue or make
a pull request!

- Add a smarter printer to handle other `.rvdata2` files, for example:
	- if the file starts with `Scripts`, print it in $RGSS_SCRIPTS format
	- if the file contains an array of objects, and the first one is `nil`, print it in database format (one item per line)
	- otherwise, print it in yaml or json format
- When the "smart" one not work, add flags to manually select one format:
	- e.g. run with `--format=db`

## License

MIT @ [hyrious](https://github.com/hyrious)

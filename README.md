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

Add this to your global .gitconfig or .git/config per repo:

```gitconfig
[diff "rvdata2"]
    textconv = rvdata2-textconv
```

Add this to your `.gitattributes` per repo:

```gitattributes
*.rvdata2   diff=rvdata2
```

## License

MIT @ [hyrious](https://github.com/hyrious)

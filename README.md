![img](/assets/img/leveldb.png)

# SYNOPSIS
A LevelDB GUI based on [`electron`][1]. See also the [`command line version`][0].

# SCREENSHOT

## QUERY
![img](/docs/screenshot1.png)

## CONNECT
![img](/docs/screenshot2.png)

## INSERT
![img](/docs/screenshot3.png)

# STATUS
Work in progress. Contributions welcome.

# DEVELOPMENT
You need to rebuild leveldown so that it uses the correct C++ headers for electron.

```bash
$ npm install
$ node_modules/.bin/electron-rebuild
```

Then go ahead and start the program.
```bash
$ npm start
```

[0]:https://github.com/hij1nx/lev
[1]:https://github.com/atom/atom-shell

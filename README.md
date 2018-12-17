A simple note app lesson learned from Udemy course.

## Dependency
Notes are recorded in `notes-data.json`
```
npm install yargs --save
``` 
or 
```
yarn add yargs
```


## Commands
### Help Command
* List all commands `node app.js --help`
* Add/Read/Remove help command `node app.js [add/read/remove] --help`
### Note Manipulation Command
* To list all notes: 
```
node app.js list
```

* To add a note: 
```
node app.js add --title=ti1 --body=body1
```

* To read a note: 
```
node app.js read --title=ti1
```

* To remove a note: 
```
node app.js remove --title=ti1
```
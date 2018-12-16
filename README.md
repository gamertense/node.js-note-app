A simple note app lesson learned from Udemy course.

## Dependency
```
npm install yargs --save
``` 
or 
```
yarn add yargs
```


## Commands
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
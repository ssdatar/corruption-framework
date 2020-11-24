const gulp = require('gulp')
const fs = require('fs')
const shell = require('shelljs')
const argv = require('yargs').argv
const configPath = `${process.cwd()}/data/config.json`
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
const base = '/web/bgapps/html/'
const host = 'shell.boston.com'

gulp.task('ssh-prod', (cb) => {
  // shell.exec('gh-pages -d build');
  cb();
})

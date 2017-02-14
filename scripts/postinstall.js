var spawn = require('child_process').spawn
var fs = require('fs')
if (fs.existsSync('site')) {
  spawn('npm', ['install'], {cwd: 'site', stdio: 'inherit'})
} else {
  console.log('postinstall not required - /site not available')
}

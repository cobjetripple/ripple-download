var config = require('./config.js')();
  
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-replace');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /\s\d{1,2}\.\d{1,2}\.\d{1,2}/g,
              replacement: ' ' + config.version
            }
          ],
          prefix: ''
        },
        files: [
          {expand: true, flatten: true, src: ['downloads.html'], dest: './'}
        ]
      }
    }
  });

  grunt.registerTask('default', 'replace');
}; 
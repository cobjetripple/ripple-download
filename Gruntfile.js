var path = require('path'),
    fs = require('fs');

var pkgFilename = 'package.json',
    pkgFilePath = './ripple-client/';

var pkgFile = path.join('pkgFilename', 'pkgFilePath');

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-replace');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'version',
              replacement: 'v'
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['downloads.html'], dest: './'}
        ]
      }
    }
  });
  
  grunt.registerTask('default', 'replace');
};
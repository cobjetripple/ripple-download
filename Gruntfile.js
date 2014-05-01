module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-aws');

  var aws = grunt.file.readJSON('config.json');

  grunt.initConfig({
    aws: {
      accessKeyId: aws.key,
      secretAccessKey: aws.secret
    },
    s3: {
      options: {
        accessKeyId: aws.key,
        secretAccessKey: aws.secret,
        bucket: aws.bucket,
        enableWeb: true
      },
      build: {
        cwd: 'build/',
        src: '**'
      }
    }
  });

  grunt.registerTask('default', ['s3']);
}; 
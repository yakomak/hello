module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    less: {
      development: {
        options: {
          paths: ['styles', 'bower_components/uikit/less']
        },
        files: {
          'static/css/app.css': 'styles/app.less'
        }
      }
    },



    copy: {
      main: {
        files: [
          {
            expand: true, 
            cwd: "bower_components/uikit/fonts",
            src: '**',
            dest: 'static/fonts/'
          }
        ],
      },
    },


  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');



  // Default task(s).
  grunt.registerTask('default', ['less:development', 'copy']);

};
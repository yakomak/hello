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

    concat: {
      core: {
        src: [
          "bower_components/jquery/dist/jquery.js",
          "bower_components/lodash/dist/lodash.js",
          "bower_components/moment/min/moment-with-locales.js",
          "bower_components/uikit/js/uikit.js",
          "bower_components/uikit/js/components/tooltip.js"],
        dest: "static/js/core.js",
      },
      app: {
        src: ["scripts/app.js"],
        dest: "static/js/app.js",
      },
    },

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['less:development', 'copy', 'concat']);

};
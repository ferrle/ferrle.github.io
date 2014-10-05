'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      options: {
        port: 1337,
        hostname: 'localhost',
        directory: './'
      },
      dev: {

      }
    },

    watch: {
      options: {
        livereload: true
      },
      // js: {
      //   files: ['assets/js/**/*'],
      //   tasks: ['jshint:dev']
      // },
      less: {
        files: ['assets/styles/**/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['assets/styles/main.css'],
        tasks: ['concat']
      }
    },

    jshint: {
      dev: ['assets/js/**/*.js']
    },

    concat: {
      css: {
        src: [
          'node_modules/bootstrap/dist/css/bootstrap.min.css',
          'assets/styles/main.css'
        ],
        dest: 'assets/styles/main.min.css'
      }
    },

    less: {
      dev: {
        files: [{
          expand: true,
          cwd: 'assets/styles/less',
          src: ['main.less'],
          dest: 'assets/styles/',
          ext: '.css'
        }],
        options: {
          cleancss: true
        }
      }
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
};
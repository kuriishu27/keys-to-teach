module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
          js: {
            src: ['./public/js/jquery.min.js', './public/js/bootstrap.min.js'],
            dest: 'public/dist/js/scripts.js',
          },
          css: {
            src: ['./public/stylesheets/bootstrap/css/main.min.css', './public/stylesheets/bootstrap/font-awesome/css/font-awesome.min.css'],
            dest: 'public/dist/css/styles.css',
          }
        },
        watch: {
          js: {
            files: ['./public/js/**/*.js'],
            tasks: ['concat:js', 'uglify']
          },
          css: {
            files: ['./public/css/**/*.css'],
            tasks: ['concat:css', 'cssmin']
          }
        },
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'public/dist/css/main.min.css': ['public/dist/css/styles.css']
            }
          }
        },
        uglify: {
          my_target: {
            files: {
              'public/dist/js/scripts.min.js': ['public/dist/js/scripts.js']
            }
          }
        }
      });

    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
}
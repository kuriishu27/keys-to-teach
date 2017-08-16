module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
          js: {
            src: ['./public/js/agency.min.js', './public/js/bootstrap.min.js', './public/js/jquery.min.js'],
            dest: 'dist/js/scripts.js',
          },
          css: {
            src: ['./public/stylesheets/bootstrap/css/main.min.css', './public/stylesheets/bootstrap/css/bootstrap.min.css', './public/stylesheets/bootstrap/font-awesome/css/font-awesome.min.css'],
            dest: 'dist/css/styles.css',
          }
        },
        watch: {
          js: {
            files: ['./public/js/**/*.js'],
            tasks: ['concat:js', 'uglify']
          }
        },
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'dist/css/main.min.css': ['dist/css/styles.css']
            }
          }
        },
        uglify: {
          my_target: {
            files: {
              'dist/output.min.js': ['dist/js/scripts.js']
            }
          }
        }
      });

    grunt.loadNpmTasks('grunt-contrib-concat'); 
    grunt.loadNpmTasks('grunt-contrib-watch'); 
    grunt.loadNpmTasks('grunt-contrib-cssmin');    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
}
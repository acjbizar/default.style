const sass = require('sass')

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            src: {
                options: {
                    implementation: sass,
                    noCache: true,
                    sourceMap: false,
                    outputStyle: 'compressed'
                },
                files: [
                    {
                        'www/css/main.min.css': 'src/sass/index.scss'
                    },
                    {
                        'www/css/meta.min.css': 'src/sass/meta.scss'
                    }
                ]
            }
        },
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['www/css/intro.css', 'www/css/main.min.css'],
                dest: 'www/index.css'
            }
        },
        watch: {
            css: {
                files: ['src/sass/**/*.scss'],
                tasks: ["sass", "concat"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['sass', 'concat']);
    grunt.registerTask('default', ['sass']);
};

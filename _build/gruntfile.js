module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            src: {
                options: {
                    noCache: true,
                    sourceMap: false,
                    outputStyle: 'compressed'
                },
                files: {
                    '../css/main.min.css': '../sass/index.scss'
                }
            }
        },
        concat: {
            options: {
                separator: ''
            },
            dist: {
                src: ['../css/intro.css', '../css/main.min.css'],
                dest: '../index.css'
            }
        },
        watch: {
            css: {
                files: ['../sass/**/*.scss'],
                tasks: ["sass"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['sass']);
};

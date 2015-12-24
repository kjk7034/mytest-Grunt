module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify 설정
        uglify: {
            build: {
                src: 'build/src/js/result.js', //uglify할 대상 설정
                dest: 'build/src/js/result.min.js' //uglify 결과 파일 설정
            }
        },
        //concat 설정
        concat:{
            basic: {
                src: ['public/src/js/lib/*.js', 'public/src/js/*.js'], //concat 타겟 설정(앞에서부터 순서대로 합쳐진다.)
                dest: 'build/src/js/result.js' //concat 결과 파일
             }
         },
        jshint:{
            all: ['public/src/js/*.js'],
            options:{
                reporter: require('jshint-stylish')
            }
        },
        cssmin:{
            minify:{
                expand: true,
                cwd: 'public/src/css/',
                src: ['*.css'],
                dest: 'build/src/css',
                ext: '.min.css'
            },
            options:{
                keepSpecialComments: 0
            }
        },
        sass: {                              // Task
            dist: {
                files: {'public/src/css/ab.css': 'public/src/css/ab.scss'}
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'public/src/',
                src: 'index.html',
                dest: 'build/src/',
                flatten: true,
                filter: 'isFile',
            }
        },
        clean: {
            build: {
                src: ["build/src"]
            }
        }
     });

     // Load the plugin that provides the "uglify", "concat" tasks.
     grunt.loadNpmTasks('grunt-contrib-uglify');
     grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-jshint');
     grunt.loadNpmTasks('grunt-contrib-cssmin');
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-copy');
     grunt.loadNpmTasks('grunt-contrib-clean');

     // Default task(s).
     grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify', 'sass', 'cssmin', 'copy']); //grunt 명령어로 실행할 작업

 };
 
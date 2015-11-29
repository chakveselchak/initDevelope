module.exports = function(grunt) {
    grunt.initConfig({
        autoprefixer: {
            options: {
               browsers: ['last 5 versions', 'ie 7', 'ie 8', 'ie 9', '> 0% in RU']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: '../project/css/*.css',
                dest: '../project/css/'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["./less"],
                    yuicompress: true
                },
                files: {
                    "../project/css/style.css": "../project/less/style.less"
                }
            }
        },
        watch: {
            files: "../project/less/*",
            tasks: ["less","autoprefixer"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['less','watch','autoprefixer']);
};
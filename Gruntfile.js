// module.exports = function(grunt){
// 	grunt.initConfig({
// 	    concat: {
//             options: {
//                 separator: ';',
//             },
//             framework: {
//                 src: [
//                     'vendor/seen/seen.min.js',
//                     'vendor/textillate-master/jquery.textillate.js'
//                 ],
//                 dest: 'dist/js/framework.js'
//             }
//   	});
// 	grunt.loadNpmTasks('grunt-contrib-concat');
//     grunt.loadNpmTasks('grunt-contrib-uglify');
//     grunt.loadNpmTasks('grunt-text-replace');
//     grunt.loadNpmTasks('grunt-contrib-watch');
//     grunt.loadNpmTasks('grunt-contrib-copy');

//     //grunt.registerTask('watch', ['watch']);
//     grunt.registerTask('default', ['concat', 'replace']);
// }


module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
            },
            framework: {
                src: [
                    'vendor/seen/seen.min.js',
                    'vendor/textillate-master/jquery.textillate.js'
                ],
                dest: 'dist/js/framework.js'
            },
            app: {
                src: [
                    'src/js/main.js',
                ],
                dest: 'dist/js/main.js'
            }
        },
        uglify: {
            options: {
                mangle: false,
                stripBanners: true
            },
            js: {
                files: {
                    'dist/js/framework.js': ['dist/js/framework.js'],
                    'dist/js/main.js': ['dist/js/main.js']
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //grunt.registerTask('watch', ['watch']);
    grunt.registerTask('default', ['concat']);
}
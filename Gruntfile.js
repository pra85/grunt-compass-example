module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-compass');

    var taskConfig = {
        compass: { // Task
            dist: { // Target
                options: { // Target options
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'production'
                }
            }
        }
    };
    grunt.initConfig(grunt.util._.extend(taskConfig));
};

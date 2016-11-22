// npm (Node Package Manager) will come bundled with Node, and can be used via the terminal.
// Open your terminal and execute npm init in the project directory. Then follow the instructions to create package.json.
//
// To install Grunt, enter npm install --save-dev grunt
// Install the Grunt CLI (command-line interface) npm install -g grunt-cli to execute tasks straight from the command line.
// To install the Grunt plugin for Jade tasks, type npm install --save-dev grunt-contrib-jade
// To install Jade, type npm install --save-dev jade

// npm install --save-dev grunt-contrib-watch


module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: [{
           expand: true,
           cwd: 'dev/',
           ext: ".html",
           src: ['**/*.jade'],
           dest: 'build/'
        }]
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      jade: {
        files: ['**/*.jade'],
        tasks: ['jade']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task.
  grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade']);

  grunt.registerTask('default','Convert Jade templates into html templates', ['jade','watch']);


};

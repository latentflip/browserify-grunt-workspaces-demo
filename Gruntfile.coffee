module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'

  grunt.initConfig
    browserify:
      frontend:
        dest: 'dist/bundle.js'
        src: 'app/app.coffee'
        options:
          transform: ['coffeeify']
          debug: true
          sourceMapRoot: 'app'

      karma:
        dest: 'dist/specs-bundle.js'
        src: 'spec/**/*.coffee'
        options:
          transform: ['coffeeify']
          debug: false
          multifile: true

    karma:
      unit:
        configFile: 'karma.conf.js'
        background: true

    watch:
      browserify:
        files: ['app/**/*.*', 'specs/**/*.*']
        options:
          livereload: true

      karma:
        files: ['dist/specs-bundle.js', 'karma.conf.js']
        tasks: ['karma:unit:run']

    connect:
      server:
        port: 8000

  grunt.registerTask('default', ['browserify', 'connect', 'karma', 'watch'])
  grunt.registerTask('test', ['browserify', 'karma', 'watch'])
  grunt.registerTask('dev', ['browserify', 'watch:browserify'])

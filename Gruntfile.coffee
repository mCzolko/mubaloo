module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    less:
      development:
        files:
          'www/css/style.css': 'www/css/main.less'

      production:
        options:
          cleancss: true
        files:
          'www/css/style.css': 'www/css/main.less'

    phonegap:
      config:
        plugins: []
        platforms: ['ios']
        config:
          template: '_config.xml'
          data:
            id: 'com.myapp'
            version: '<%= pkg.version %>'
            name: '<%= pkg.name %>'
            description: '<%= pkg.description %>'
            author:
              email: 'michael@czolko.cz'
              href: ''
              text: 'Michael Czolko'

        versionCode: 1
        permissions: []

    connect:
      options:
        hostname: 'localhost'
        livereload: 35729
        port: 3000
      server:
        options:
          base: 'www'
          open: true

    watch:
      options:
        livereload: '<%= connect.options.livereload %>'
      all:
        files: 'www/{,*/}*.{html,js,css,png}'
      less:
        files: 'www/css/**/*.less'
        tasks: ['less:development']

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-phonegap'
  grunt.loadNpmTasks 'grunt-contrib-less'

  grunt.registerTask 'ios', ->
    grunt.task.run 'less:production'
    grunt.task.run 'phonegap:build:ios'
    grunt.task.run 'phonegap:run:ios'

  grunt.registerTask 'server', ->
    grunt.task.run 'connect:server'
    grunt.task.run 'watch'

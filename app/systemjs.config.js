(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        './', // 'dist',
    'rxjs':                       '../node_modules/rxjs',
    'angular2-in-memory-web-api': '../node_modules/angular2-in-memory-web-api',
    '@angular':                   '../node_modules/@angular'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { 
      main: 'main.web.js',  
      defaultExtension: 'js',
      map: {
        './util/url': './util/url.web.js',
        './util/route': './util/route.web.js',
        './util/camera': './util/camera.web.js',
        './app.metadata': './app.metadata.web.js',
        './pages/login/login.metadata': './pages/login/login.metadata.web',
        './pages/start/start.metadata': './pages/start/start.metadata.web'
      } 
    },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
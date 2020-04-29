import * as gulp from 'gulp';
import * as project from '../aurelia.json';

export function pluginCSS(dest) {
  return function processPluginCSS() {
    return gulp.src(project.plugin.source.css)
      .pipe(gulp.dest(dest));
  };
}

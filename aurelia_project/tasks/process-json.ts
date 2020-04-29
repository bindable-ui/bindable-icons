import * as gulp from 'gulp';
import * as project from '../aurelia.json';

export function pluginJson(dest) {
  return function processPluginJson() {
    return gulp.src(project.plugin.source.json)
      .pipe(gulp.dest(dest));
  };
}

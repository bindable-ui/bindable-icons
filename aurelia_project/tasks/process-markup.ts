import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import * as htmlmin from 'gulp-htmlmin';
import * as svgstore from 'gulp-svgstore';
import * as inject from 'gulp-inject';

const fileContents = (_filePath, file) => {
  return file.contents.toString().replace(/\<svg /g, '<svg display="none" ');
};

export function pluginMarkup(dest) {
  return function processPluginMarkup() {
    const svgs = gulp
      .src('src/svgs/**/*.svg')
      .pipe(svgstore({ inlineSvg: true }));

    return gulp.src(project.plugin.source.html)
      .pipe(inject(svgs, { transform: fileContents }))
      .pipe(htmlmin({
          removeComments: true,
          collapseWhitespace: true,
          minifyCSS: true,
          minifyJS: true,
          ignoreCustomFragments: [/\${.*?}/g] // ignore interpolation expressions
      }))
      .pipe(gulp.dest(dest));
  };
}

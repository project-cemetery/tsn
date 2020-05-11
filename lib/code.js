const { dest } = require('gulp');
const { createProject } = require('gulp-typescript');

const { tsAbsoluteImports } = require('./utils/tsAbsoluteImports');

const code = (tsConfigPath) => {
  const tsProject = createProject(tsConfigPath);

  const { outDir } = tsProject.config.compilerOptions;

  const compileCode = () =>
    tsProject
      .src()
      .pipe(tsProject())
      .pipe(tsAbsoluteImports(outDir, tsProject.config.compilerOptions))
      .pipe(dest(outDir));

  return compileCode;
};

module.exports = {
  code,
};

var split = require('split');
    process.stdin
            .pipe(split())
          .pipe(through2(function (line, _, next) {
                        console.dir(line.toString());
                                    next();
                                            }))
    ;

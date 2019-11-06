import {
    apply,
    branchAndMerge,
    // chain,
    mergeWith,
    // move,
    Rule, SchematicContext, SchematicsException,
    // SchematicContext,
    template, Tree,
    // Tree,
    url
} from '@angular-devkit/schematics';
// import {buildDefaultPath, getProject} from '@schematics/angular/utility/project';
// import {parseName} from '@schematics/angular/utility/parse-name';
import {strings} from '@angular-devkit/core';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function testone(options: any): Rule {
    return (tree: Tree, context: SchematicContext) => {
        if (!options.name) {
            throw new SchematicsException('Option (name) is required.');
        }
        const templateSource = apply(url('./files'), [
            template({
                ...strings,
                ...options
            }),
        ]);
        return branchAndMerge(mergeWith(templateSource));
    };
}

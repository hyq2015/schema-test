import {
    apply,
    branchAndMerge,
    mergeWith,
    move,
    Rule,
    SchematicContext,
    SchematicsException,
    template,
    Tree,
    url
} from '@angular-devkit/schematics';
import {strings} from '@angular-devkit/core';
import {buildDefaultPath, getProject} from "@schematics/angular/utility/project";
import {parseName} from "@schematics/angular/utility/parse-name";


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function main(options: any): Rule {
    return (tree: Tree, context: SchematicContext) => {
        if (!options.name) {
            throw new SchematicsException('Option (name) is required.');
        }
        const project = getProject(tree, options.project);
        if (options.path === undefined) {
            options.path = buildDefaultPath(project);
        }
        const parsedPath = parseName(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        const templateSource = apply(url('./files'), [
            template({
                ...strings,
                ...options
            }),
            move(parsedPath.path)
        ]);
        return branchAndMerge(mergeWith(templateSource));
    };
}

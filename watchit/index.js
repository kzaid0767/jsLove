#!/usr/bin/env node
/* chokidar a packaget to detect file changes */
/* Caporal a package that generates help/usage instructions */
/* lodash.debounce */

import debounce from 'lodash.debounce'
import chokidar from 'chokidar'
import program from 'caporal'
import fs from 'node:fs/promises'

program
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action(async ({ filename }) => {
        const name = filename || 'index.js'

        try {
            await fs.promises.access(name)
        } catch (error) {
            throw new Error(`Could not find the file ${name}`)
        }

        const start = debounce(() => {
            console.log('user program started')
        }, 100)

        chokidar
            .watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start)
    })

program.parse(process.argv)


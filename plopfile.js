const { readdirSync } = require('fs')

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => {
      return { name: dirent.name, value: dirent.name }
    })

module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?'
      },
      {
        // Raw text input
        type: 'list',
        // Variable name for this input
        name: 'container',
        // Prompt to display on command line
        message: 'Choose container?',
        choices: ['basics', 'components', 'containers', 'features', 'layouts', 'templates', 'guide']
      }
    ],
    actions: (data) => {
      const path = 'src/' + data.container + '/'

      let actions = [
        {
          // Add a new file
          type: 'add',
          // Path for the new file
          path: path + '{{pascalCase name}}/{{pascalCase name}}.js',
          // Handlebars template used to generate content of new file
          templateFile: 'plop-templates/Component/Component.js.hbs'
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/index.js',
          templateFile: 'plop-templates/Component/index.js.hbs'
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.scss',
          templateFile: 'plop-templates/Component/Component.scss.hbs'
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.stories.mdx',
          templateFile: 'plop-templates/Component/stories.mdx.hbs'
        },
        {
          type: 'add',
          path: path + '{{pascalCase name}}/{{pascalCase name}}.test.js',
          templateFile: 'plop-templates/Component/test.js.hbs'
        }
      ]

      return actions
    }
  })
}

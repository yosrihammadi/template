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
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'components/{{pascalCase name}}.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Component.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'styles/Components/{{pascalCase name}}.css',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Empty.js.hbs'
      },
      {
        type: 'modify',
        path: 'styles/global.css',
        pattern: /\/\* COMPONENTS IMPORTS \*\//g,
        template:
          "/* COMPONENTS IMPORTS */\n@import './Components/{{ name }}.css';"
      }
    ]
  });
  plop.setGenerator('common', {
    description: 'Create a common component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your common component name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'components/common/{{pascalCase name}}.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Common.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'styles/Components/Common/{{pascalCase name}}.css',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Empty.js.hbs'
      },
      {
        type: 'modify',
        path: 'styles/global.css',
        pattern: /\/\* COMMON IMPORTS \*\//g,
        template:
          "/* COMMON IMPORTS */\n@import './Components/common/{{ name }}.css';"
      }
    ]
  });
  plop.setGenerator('page', {
    description: 'Create a page',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your page name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'pages/{{pascalCase name}}.jsx',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Page.js.hbs'
      }
    ]
  });
  plop.setGenerator('graphql module', {
    description: 'Create a graphql module',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your module name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'graphql/queries/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Queries.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'graphql/mutations/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Mutations.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'graphql/attributes/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Attributes.js.hbs'
      }
    ]
  });
  plop.setGenerator('redux reducer', {
    description: 'Create a redux reducer',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your reducer name?'
      }
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'redux/actions/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Action.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'redux/actionTypes/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/ActionType.js.hbs'
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'redux/reducer/{{pascalCase name}}.js',
        // Handlebars template used to generate content of new file
        templateFile: 'plop-templates/Reducer.js.hbs'
      }
    ]
  });
};

export const svModel = {
  state: {
    surveyJSON: {
      title: '开发工程师调研问卷.',
      pages: [
        {
          title: '请问您使用什么操作系统?',
          questions: [
            {
              type: 'checkbox',
              name: 'opSystem',
              title: '操作系统',
              hasOther: true,
              isRequired: true,
              choices: ['Windows', 'Linux', 'Macintosh OSX']
            }
          ]
        },
        {
          title: '您目前使用的开发语言是什么？?',
          questions: [
            {
              type: 'checkbox',
              name: 'langs',
              title: '请从下边的列表中选择',
              colCount: 4,
              isRequired: true,
              choices: [
                'Javascript',
                'Java',
                'Python',
                'CSS',
                'PHP',
                'Ruby',
                'C++',
                'C',
                'Shell',
                'C#',
                'Objective-C',
                'R',
                'VimL',
                'Go',
                'Perl',
                'CoffeeScript',
                'TeX',
                'Swift',
                'Scala',
                'Emacs List',
                'Haskell',
                'Lua',
                'Clojure',
                'Matlab',
                'Arduino',
                'Makefile',
                'Groovy',
                'Puppet',
                'Rust',
                'PowerShell'
              ]
            }
          ]
        },
        {
          title: '请输入您的姓名和电子邮件',
          questions: [
            {
              type: 'text',
              name: 'name',
              title: '姓名:'
            },
            {
              type: 'text',
              name: 'email',
              title: '邮件'
            }
          ]
        }
      ]
    }
  },
  reducers: {},
  effects: (dispatch) => ({
    async getSurveyJSONAsync(payload, state) {
      console.log('TODO get json');
    },
    async sendSurveyJSONAsync(payload, state) {
      console.log(payload.data);
    }
  })
};

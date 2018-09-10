export const svModel = {
  state: {
    surveyJSON: {
      title: '中国移动客户俱乐部满意度调研问卷',
      pages: [
        {
          name: 'page1',
          elements: [
            {
              type: 'radiogroup',
              name: 'question2',
              title: '您通过哪个渠道了解中国移动俱乐部？',
              isRequired: true,
              hasOther: true,
              choices: [
                {
                  value: 'item1',
                  text: '微信'
                },
                {
                  value: 'item2',
                  text: '微博'
                },
                {
                  value: 'item3',
                  text: 'APP'
                },
                {
                  value: 'item4',
                  text: '网站'
                },
                {
                  value: 'item5',
                  text: '触屏'
                }
              ]
            },
            {
              type: 'checkbox',
              name: 'question1',
              title: '您通常使用哪个渠道登录中国移动俱乐部？',
              choices: [
                {
                  value: 'item1',
                  text: '微信公众号'
                },
                {
                  value: 'item2',
                  text: '中国移动App'
                },
                {
                  value: 'item3',
                  text: 'WEB电脑'
                },
                {
                  value: 'item4',
                  text: '触屏'
                }
              ]
            },
            {
              type: 'radiogroup',
              name: 'question4',
              title: '您是否已成为中国移动俱乐部会员？',
              choices: [
                {
                  value: 'item1',
                  text: '是'
                },
                {
                  value: 'item2',
                  text: '否'
                }
              ]
            },
            {
              type: 'checkbox',
              name: 'question5',
              title: '您最想参与俱乐部推出的哪类会员活动？',
              hasOther: true,
              choices: [
                {
                  value: 'item1',
                  text: '话费、流量、抽奖送礼类'
                },
                {
                  value: 'item2',
                  text: '线下活动（大讲堂、KOL牛人招募）'
                },
                {
                  value: 'item3',
                  text: '社群活动（“悦读”活动、年味评选）'
                }
              ]
            },
            {
              type: 'text',
              name: 'question3',
              title: '您认为中国移动俱乐部在哪些方面需要提升？'
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

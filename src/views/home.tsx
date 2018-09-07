import * as React from 'react';
import * as Survey from 'survey-react';
import ClubAuth from '../components/club-auth';
import QPaper from '../components/q-paper';

export interface HomeProps {
  surveyJSON;
  getSurveyJSON;
  sendSurveyJSON;
}

export default class Home extends React.Component<HomeProps, any> {
  componentWillMount() {
    this.props.getSurveyJSON();
  }
  public render() {
    let { surveyJSON, sendSurveyJSON } = this.props;
    return (
      <ClubAuth>
        <QPaper>
          <Survey.Survey locale="zh-cn" json={surveyJSON} onComplete={sendSurveyJSON} />
        </QPaper>
      </ClubAuth>
    );
  }
}

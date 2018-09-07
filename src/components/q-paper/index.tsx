import * as React from 'react';
import './style';

export interface QPaperProps {}

export default class QPaper extends React.Component<QPaperProps, any> {
  public render() {
    let { children } = this.props;
    return (
      <div className="QPaper">
        <div className="QPaper_content">{children}</div>
      </div>
    );
  }
}

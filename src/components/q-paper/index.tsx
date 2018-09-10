import * as React from 'react';
import * as classNames from 'classnames';
import { isMobile } from '../../common/help';
import './style';

export interface QPaperProps {}

export default class QPaper extends React.Component<QPaperProps, any> {
  public render() {
    let { children } = this.props;
    let classes = {
      QPaper: true,
      App__pcWrap: !isMobile(),
      'App__mobile-wrap': isMobile()
    };
    return (
      <div className={classNames(classes)}>
        <div className="QPaper_content">{children}</div>
      </div>
    );
  }
}

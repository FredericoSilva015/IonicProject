import React from 'react';
import { IonContent } from 'reactionic';

var Fred = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <h1>Fred page</h1>
        <p>testing react</p>
      </IonContent>
    );
  }
});

export default Fred;

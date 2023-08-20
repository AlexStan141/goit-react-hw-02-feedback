import React from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    var report = this.state.good / this.countTotalFeedback();
    var percentageWithDecimals = report * 100;
    var percentageWithoutDecimals = percentageWithDecimals.toFixed(0);
    return percentageWithoutDecimals;
  }

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={evt => {
            this.setState(prevState => {
              var newState = prevState;
              newState[evt.target.innerText.toLowerCase()] += 1;
              return newState;
            });
          }}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </Section>
    );
  }
}

export default App;

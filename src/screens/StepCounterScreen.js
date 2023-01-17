import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Pedometer } from "expo-sensors";
import AppScreen from "../components/AppScreen";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { Badge, LinearProgress, Chip, Header } from "react-native-elements";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import HeaderLeftComponent from "../components/HeaderLeftComponent";
import HeaderRightComponent from "../components/HeaderRightComponent";

import colors from "../utils/colors";

import { connect } from "react-redux";
import { date } from "yup/lib/locale";

class StepCounter extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: [0],
    data: [0],
    labels: [],
    minutes: [],
  };

  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = new Date().getDate();
  hour = new Date().getHours();
  minute = new Date().getMinutes();

  componentDidMount() {
    this._subscribe();
    this.state.labels.push(this.minute);
    this.state.minutes.push(this.minute);
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount((result) => {
      this.currentMinute = new Date().getMinutes();
      if (
        this.state.labels[this.state.labels.length - 1] < this.currentMinute
      ) {
        this.state.labels.push(this.currentMinute);
        this.state.minutes.push(this.currentMinute);
      }

      if (this.state.labels.length > 10) {
        this.state.labels = this.state.labels.shift();
      }
      this.setState({
        currentStepCount: [...this.state.currentStepCount, result.steps],
      });
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      (error) => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      (result) => {
        this.setState({ pastStepCount: result.steps });
      },
      (error) => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={[styles.container, {}]}>
        <Header
          backgroundColor={colors.primary}
          leftComponent={<HeaderLeftComponent />}
          centerComponent={{
            text: "StepCounter",
            style: {
              color: colors.light,
              fontWeight: "bold",
              fontSize: hp(2.8),
            },
          }}
          rightComponent={<HeaderRightComponent />}
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <LineChart
            data={{
              labels: this.state.labels,
              datasets: [
                {
                  data: this.state.currentStepCount,
                },
              ],
            }}
            width={wp(98)} // from react-native
            height={220}
            yAxisLabel="St"
            yAxisInterval={10} // optional, defaults to 1
            chartConfig={{
              backgroundColor: colors.primary,
              backgroundGradientFrom: colors.primary,
              backgroundGradientTo: colors.secondary,
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "1",
                strokeWidth: "1",
                stroke: colors.light,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <Chip
            containerStyle={{
              width: wp(98),
              marginTop: hp(2),
              backgroundColor: colors.primary,
            }}
            buttonStyle={{ backgroundColor: colors.primary }}
            style={{ backgroundColor: colors.primary }}
            title={`Start time:  ${this.hour}:${this.minute} `}
          />
          <Chip
            containerStyle={{
              width: wp(98),
              marginTop: hp(2),
              backgroundColor: colors.primary,
            }}
            buttonStyle={{ backgroundColor: colors.primary }}
            style={{}}
            title={`Speed:  ${Math.round(
              this.state.currentStepCount[
                this.state.currentStepCount.length - 1
              ] / this.state.minutes.length
            )} step per minute `}
          />
        </View>
      </View>
    );
  }
}

const mapStateTopProps = ({ language, themeDark }) => {
  return { language, themeDark };
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default StepCounter;

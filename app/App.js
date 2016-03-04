import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/lib/paper';
import Snackbar from 'material-ui/lib/snackbar';
import RaisedButton from 'material-ui/lib/raised-button';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import Slider from 'material-ui/lib/slider';
import CircularProgress from 'material-ui/lib/circular-progress';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';

const style = {
  paper: {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: 'steelblue',
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

export default class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleTouchTap () {
    this.setState({
      open: true,
    });
  };

  handleRequestClose () {
    this.setState({
      open: false,
    });
  };

render() {
    return (
      <div>
        <div>
          <Tabs>
            <Tab label="Item One" >
              <div>
                  <div>
                    <CircularProgress />
                    <CircularProgress size={1.5} />
                    <CircularProgress size={2} />
                  </div>
                  <div style={style.container}>
                    <RefreshIndicator
                      size={40}
                      left={10}
                      top={0}
                      status="loading"
                      style={style.refresh}
                    />
                    <RefreshIndicator
                      size={50}
                      left={70}
                      top={0}
                      loadingColor={"#FF9800"}
                      status="loading"
                      style={style.refresh}
                    />
                  </div>
                <Slider name="slider0" defaultValue={0.5} />
              </div>
            </Tab>
            <Tab label="Item Two" >
              <div>
                <h2 style={style.headline}>Tab Two</h2>
                <p>
                  This is another example tab.
                </p>
              </div>
            </Tab>
            <Tab
              label="onActive"
              route="/home"
              onActive={handleActive}
            >
              <div>
                <h2 style={style.headline}>Tab Three</h2>
                <p>
                  This is a third example tab.
                </p>
              </div>
            </Tab>
          </Tabs>
        </div>
        <div>
          <Paper style={style.paper} zDepth={1}/>
          <Paper style={style.paper} zDepth={2}/>
          <Paper style={style.paper} zDepth={3}/>
          <Paper style={style.paper} zDepth={4}/>
          <Paper style={style.paper} zDepth={5}/>
        </div>
        <div>
          <RaisedButton
            onClick={this.handleTouchTap.bind(this)}
            label="Add to my calendar"
          />
          <Snackbar
            open={this.state.open}
            message="Event added to your calendar"
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose.bind(this)}
          />
        </div>
    </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('app'));

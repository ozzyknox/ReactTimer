var React = require('react');

var Controls = React.createClass({
    propTypes: {
        clockStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        var {clockStatus} = this.props;
        var renderStartStopButton = () => {
            if (clockStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (clockStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = Controls;
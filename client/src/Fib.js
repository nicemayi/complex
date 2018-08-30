import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndicies: [],
        values: {},
        index: '',
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndicies();
    }

    fetchValues = async () => {
        const values = await axios.get('/api/values/current');
        this.setState({
            values: values.data,
        });
    };

    fetchIndicies = async () => {
        const seenIndicies = await axios.get('/api/values/all');
        this.setState({
            seenIndicies: seenIndicies.data,
        });
    };

    renderseenIndicies = () => {
        return this.state.seenIndicies.map(({ number }) => number).join(', ');
    };

    renderValues = () => {
        const entries = [];
        for (let key in this.state.values) {
            entries.push(
                <div key={key}>
                    For index {key} I calculated {this.state.values[key]}
                </div>
            );
        }
        return entries;
    };

    handleSubmit = async event => {
        event.preventDefault();
        await axios.post('/api/values', {
            index: this.state.index
        });
        this.setState({ index: '' });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your index:</label>
                    <input
                        values={this.state.index}
                        onChange={event => this.setState({ index: event.target.value })}
                    />
                    <button>Submit</button>
                </form>
                <h3>Indexes I have seen:</h3>
                {this.renderseenIndicies()}
                <h3>Calculated Values:</h3>
                {this.renderValues()}
            </div>
        );
    }
}

export default Fib;
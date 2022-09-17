import React, { Component } from 'react';
class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    // console.log(this.props)
    return (
      <div>
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <button onClick={this.increment} className="btn btn-success btn-sm"> */}
        {/* <button onClick={()=>this.increment(1)} className="btn btn-success btn-sm"> */}
        {/* <button onClick={this.handleIncrement} className="btn btn-success btn-sm">
          Increment
        </button> */}
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-success btn-sm">
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  //   renderTags() {
  //     if (this.state.tags.length === 0)
  //     return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>tag</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }

  styles = {
    fontSize: 30,
    fontWeight: 'bold',
  };
}

export default Counter;

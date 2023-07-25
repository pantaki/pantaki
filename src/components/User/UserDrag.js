import React from "react";
import Draggable from "react-draggable";
import AnimateHeight from "react-animate-height";

class App extends React.Component {
  state = {
    disabled: false,
    height: 0,
  };

  toggleDraggable = () =>
    this.setState((prevState) => ({ disabled: !prevState.disabled }));

  render() {
    return(
    <div>
      <Draggable disabled={this.state.disabled} bounds="parent">
        <div className={!this.state.disabled ? "draggable" : null}>
          <div className="user-toggle">
            <div className="user-toggle-content">
              <AnimateHeight
                id="example-panel"
                duration={500}
                height={this.state.height} // see props documentation below
              >
                <div className="user-toggle-main">
                  <div className="user-list-add">
                    {this.props.user_item.map((user_value, i) => {
                      return (
                        <div className="user-list-card">
                          <div className="user-type">
                            <span>
                              {user_value.type}: {user_value.name}
                            </span>
                          </div>
                          <div className="user-email">
                            <span>{user_value.email}</span>
                          </div>
                          <div className="user-phone">
                            <span>{user_value.phone}</span>
                          </div>
                          <div className="user-role">
                            <span>Role </span>
                            <select disabled>
                              <option value={user_value.role_key}>
                                {user_value.role}
                              </option>
                            </select>
                          </div>
                        </div>
                      );
                    })}

                    <div className="user-list-card-new">
                      <span className="user-list-new">+ Person</span>
                    </div>
                  </div>
                </div>
              </AnimateHeight>
              <div className="user-toggle-button">
                <button
                  className="btn btn-primary mb-5"
                  onClick={this.toggleDraggable}
                >
                  {this.state.disabled ? "Enable" : "Disable"} Drag
                </button>
                <button
                  className="btn btn-primary mb-5"
                  aria-expanded={this.state.height !== 0}
                  aria-controls="example-panel"
                  onClick={() =>
                    this.setState({
                      height: this.state.height === 0 ? "auto" : 0,
                    })
                  }
                >
                  {this.state.height === 0 ? "Open" : "Close"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>)
  }
}

export default App;

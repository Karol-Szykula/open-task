import React, { Component } from 'react'

class FetchUsers extends Component {
    state = {
        data: null
    }

    componentDidMount() {
        fetch("https://randomuser.me/api?results=5")
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div>
                {this.state.data && this.state.data.results.map
                    ? this.state.data.results.map(user => (
                        <div
                            key={user.email}
                        >
                            <div>
                                <img src={user.picture.thumbnail} alt="user" />
                            </div>
                            <div>
                                {user.name.first} {user.name.last}
                            </div>
                            <div>
                                <a href="mailto:{user.email}">{user.email}</a>
                            </div>
                            <hr />
                        </div>
                    ))
                    : "ladowanie"}
            </div>
        )
    }
}

export default FetchUsers

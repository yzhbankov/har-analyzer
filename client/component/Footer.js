import React, {Component} from 'react'

export default class Footer extends Component {
    render() {
        const bottomStyle = {
            position: 'absolute',
            right: 0,
            bottom: 0,
            left: 0
        };
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            <strong>HARVIE</strong> by <a href="https://www.zorko.io">Zorko comp.</a> The source code is
                            licensed
                            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. <strong>HARVIE</strong> is a har file
                            analyser for a web development.
                        </p>

                        <p>
                            <a className="icon" href="https://github.com/yzhbankov/har-analyzer">
                                <i className="fa fa-github"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}
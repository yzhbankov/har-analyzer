import React, {Component} from 'react'

export default class Title extends Component {
    readFile(event) {
        this.props.getHarContent(event)
    }

    render() {
        return (<div>
                <div>Title</div>
                <input type="file" onChange={this.readFile.bind(this)}/>
            </div>
        )
    }
}
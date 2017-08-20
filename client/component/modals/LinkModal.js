/**
 * Created by Iaroslav Zhbankov on 19.08.2017.
 */
import React, {Component} from 'react'

export default class LinkModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: "modal"
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.generatedLink) {
            this.setState({
                modal: "modal is-active"
            })
        }
    }

    closeModal = (e) => {
        this.setState({
            modal: "modal"
        })
    }

    render() {
        return (
            <div className={this.state.modal}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Generated link</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        http://localhost:8080/hars/{this.props.generatedLink}
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Copy link</button>
                        <button onClick={this.closeModal} className="button">Close</button>
                    </footer>
                </div>
            </div>
        )
    }
}
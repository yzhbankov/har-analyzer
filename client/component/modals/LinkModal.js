/**
 * Created by Iaroslav Zhbankov on 19.08.2017.
 */
import React, {Component} from 'react'

export default class LinkModal extends Component {
    constructor(props) {
        super();
        this.sate = {
            modal: "modal"
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if (nextProps.generatedLink){
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
            <div className={this.sate.modal}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modal title</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        http://localhost:8080/hars/{this.props.generatedLink}
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button onClick={this.closeModal} className="button">Close</button>
                    </footer>
                </div>
            </div>
        )
    }
}
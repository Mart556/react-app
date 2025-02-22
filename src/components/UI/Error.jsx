import Card from "./Card"
import Button from "./Button"

import './Error.css'

const BackDrop = () => {
    return (
        <div className="backdrop" />
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

import ReactDOM from 'react-dom'
import { Fragment } from "react"

const Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default Error
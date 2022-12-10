import { Component } from "react";
import {ModalContent,ModalBackdrop} from './Modal.styled'
import { createPortal } from "react-dom";


  const addModal = document.querySelector("#modal-root");
export default class Modal extends Component{
    componentDidMount() {
        console.log(" Modal componentDidMount");
        window.addEventListener('keydown',this.handleKeyDown)
    }
    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown',this.handleKeyDown)
    }

   handleKeyDown =  e => {
            if (e.code === "Escape") {
      
                console.log('Click esc need close modal');
                this.props.onClose();
            }
        }
    handleBackdropClick = e => {
        console.log('Кликнули в бекдроп')
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
   }
    
    
    render() {
        return createPortal( <ModalBackdrop onClick={this.handleBackdropClick}>
            <ModalContent src={this.props.large } alt={this.props.alt} width="600"  /> 
         </ModalBackdrop>,addModal)
    }

}

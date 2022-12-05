import { createPortal } from "react-dom";
import { Component } from "react";
import {ModalBackdrop,ModalContent} from './Modal.styled'


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
    
    
    render()
    {
          const {largeImageURL,tags} = this.props
        return createPortal( <ModalBackdrop onClick={this.handleBackdropClick}>
              <img src={largeImageURL} alt={tags} width="300" />
                  <ModalContent> MODAL</ModalContent>
         </ModalBackdrop>,addModal)
    }

}


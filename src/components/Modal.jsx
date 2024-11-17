import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import { Log } from "../utils/Log";

const Modal = forwardRef(function ({ children, targetID, ...props }, ref) {

    targetID = targetID || 'modal'
    const modalRef = useRef(null)

    useEffect(() => {
        modalRef.current.addEventListener('keydown', (e) => {
            if (e.keyCode === 27) {
                e.preventDefault()

                modalRef.current.classList.remove("show")
                setTimeout(() => {
                    modalRef.current.close()
                }, 350)
            }
        })

        return () => modalRef.current.removeEventListener('keydown', () => { })
    }, [modalRef])

    useImperativeHandle(ref, () => ({
        open() {
            modalRef.current.showModal()
            setTimeout(() => {
                modalRef.current.classList.add('show')
            }, 0)
        },
        close(callbackFunction) {
            modalRef.current.classList.remove("show")
            setTimeout(() => {

                modalRef.current.close()
                callbackFunction()
            }, 350)
        }
    }), [])

    return createPortal(<dialog ref={modalRef}  {...props} className="cart-modal">
        {children}
    </dialog>, document.getElementById(targetID))
})

export default Modal
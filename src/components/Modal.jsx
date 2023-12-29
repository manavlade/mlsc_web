import { useEffect } from "react";
import PropTypes from 'prop-types';

const Modal = ({ event, onRequestClose }) => {
    useEffect(() => {
        function onKeyDown(event) {
            if (event.keyCode === 27) {
                onRequestClose();
            }
        }

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [onRequestClose]);

    return (
        <div className="modal_backdrop">
            <div className="modal_container">
                <h3 className="modal_title">{event.title}</h3>
                <img className="modal_img" src={event.imgSrc} alt={event.title} />
                <div className="modal_info-container">
                    {event.info.map((info, index) => (
                        <>
                            <div className="event_info" key={index}>
                                <span>
                                    <p>{info.label}</p>
                                    <p>{info.value}</p>
                                </span>
                            </div>
                        </>
                    ))}
                </div>
                <p className="modal_content">{event.description}</p>
                <button type="button" onClick={onRequestClose} className="modal_btn">
                    Close
                </button>
            </div>
        </div>
    );
};

Modal.propTypes = {
    event: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

export default Modal;

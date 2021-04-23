import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { postPhoto } from '../../store/photos';
// import LoginForm from './LoginForm';

////////NEEDS TO BE RENAMED. IT CURRENTLY IS USED FOR HANDLING IMAGE UPLOADS
function LoginFormModal({ itemId }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      image,
      itemId
    }
    dispatch(postPhoto(data))
    setShowModal(false)
  }


  return (
    <>
      <a className="image__container-buttons" onClick={() => setShowModal(true)}>+</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="flex-modal-container">
            <form className="modal-label-container">
              <h2>Upload Images</h2>
              <input
                className="form__text--input"
                type="file"
                onChange={e => setImage(e.target.files[0])} />
              <button className="form-btn" onClick={onSubmit}>Upload Image</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../../context/Modal';
import { postPhoto } from '../../store/photos';
import LoginForm from './LoginForm';

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
  }


  return (
    <>
      <a className="image__container-buttons" onClick={() => setShowModal(true)}>+</a>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <form className="input-label-container">
            <label>Upload Images</label>
            <input
              type="file"
              onChange={e => setImage(e.target.files[0])} />
            <button className="form-btn" onClick={onSubmit}>Upload Image</button>
          </form>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
import {similarNewMiniatures} from './generate-miniatures.js';
import {rollBody} from './open-big-picture.js';
import {isEscapeKey} from './functions.js';

const downloadPicture = similarNewMiniatures.querySelector('#upload-file');
const openModal = similarNewMiniatures.querySelector('.img-upload__overlay');
const closeModal = similarNewMiniatures.querySelector('.img-upload__cancel');
const userModalHashtags = openModal.querySelector('.text__hashtags');

const onModalKeydown = (event) => {
  if (isEscapeKey(event)) {
    event.preventDefault();
    downloadPicture.value = '';
    openModal.classList.add('hidden');
    rollBody.classList.remove('modal-open');
  }
};

const openUserModal = () => {
  openModal.classList.remove('hidden');
  rollBody.classList.add('modal-open');

  openModal.addEventListener ('focusin', () => document.removeEventListener('keydown', onModalKeydown));
  openModal.addEventListener ('focusout', () => document.addEventListener('keydown', onModalKeydown));

  document.addEventListener('keydown', onModalKeydown);
};

const closeUserModal = () => {
  openModal.classList.add('hidden');
  rollBody.classList.remove('modal-open');
  downloadPicture.value = '';

  document.removeEventListener('keydown', onModalKeydown);
};

downloadPicture.addEventListener('input', () => {
  openUserModal();
});

closeModal.addEventListener('click', () => {
  closeUserModal();
});

export {userModalHashtags};

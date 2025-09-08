const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");

const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const editProfileNameEl = document.querySelector(".profile__title");
const editProfileDescriptionEl = document.querySelector(
  ".profile__description"
);

const newPostModal = document.querySelector("#new-post-modal");
const newPostBtn = document.querySelector(".profile__new-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

const newPostForm = newPostModal.querySelector(".modal__form");

const newPostLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = editProfileNameEl.textContent;
  editProfileDescriptionInput.value = editProfileDescriptionEl.textContent;

  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  editProfileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileNameEl.textContent = editProfileNameInput.value;

  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();

  console.log(newPostLinkInput.value + " Link");
  console.log(newPostCaptionInput.value + " Caption");

  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleNewPostSubmit);

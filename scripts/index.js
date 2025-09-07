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

const newPostModal = document.querySelector("#new-post-modal");
const newPostBtn = document.querySelector(".profile__new-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-button");

const newPostForm = newPostModal.querySelector(".modal__form");

const newPostLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

const editProfileNameEl = document.querySelector(".profile__title");
const editProfileDescriptionEl = document.querySelector(
  ".profile__description"
);

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = editProfileNameEl.textContent;
  editProfileDescriptionInput.value = editProfileDescriptionEl.textContent;

  editProfileModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  editProfileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileNameEl.textContent = editProfileNameInput.value;

  editProfileModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handeNewPostSubmit(evt) {
  evt.preventDefault();

  console.log(newPostLinkInput.value + " Link");
  console.log(newPostCaptionInput.value + " Caption");

  newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handeNewPostSubmit);
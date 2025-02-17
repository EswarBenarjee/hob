import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const [username, setUsername] = useState("");
  const [hobbiesText, setHobbiesText] = useState("");
  const [collectionsText, setCollectionsText] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    hobbies: "",
  });

  const hobbiesOptions = [
    "Reading",
    "Cooking",
    "Traveling",
    "Gaming",
    "Sports",
    "Music",
    "Photography",
    "Art",
    "Writing",
    "Dancing",
  ];
  const collectionsOptions = [
    "Books",
    "Movies",
    "Music Albums",
    "Games",
    "Apps",
    "Photography",
    "Artwork",
    "Clothes",
    "Shoes",
    "Accessories",
  ];

  const navigate = useNavigate();

  const handleHobbyClick = (hobby) => {
    if (!hobbiesText.includes(hobby)) {
      setHobbiesText((prev) => (prev ? `${prev}, ${hobby}` : hobby));
    }
  };

  const handleCollectionClick = (collection) => {
    if (!collectionsText.includes(collection)) {
      setCollectionsText((prev) =>
        prev ? `${prev}, ${collection}` : collection
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;
    let validationErrors = {
      username: "",
      hobbies: "",
    };

    // Validate username
    if (!username.trim()) {
      validationErrors.username = "Username is required.";
      isValid = false;
    }

    // Validate hobbies (at least 3 hobbies must be selected)
    const hobbiesArray = hobbiesText.split(",").map((hobby) => hobby.trim());
    if (hobbiesArray.length < 3) {
      validationErrors.hobbies = "Please select at least 3 hobbies.";
      isValid = false;
    }

    // If validation fails, set the error state and prevent submission
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    // Clear errors if form is valid
    setErrors({ username: "", hobbies: "" });

    navigate("/"); // Use navigate to redirect
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg z-1">
        <h2 className="text-2xl text-primary font-semibold text-center mb-6">
          UNVEILING YOUR INTERESTS
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="text-sm text-red-600 mt-1">
                <i class="fa-solid fa-triangle-exclamation me-1"></i>
                {errors.username}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Hobbies
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={hobbiesText}
              readOnly
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {hobbiesOptions.map((hobby) => (
                <button
                  key={hobby}
                  type="button"
                  onClick={() => handleHobbyClick(hobby)}
                  className="px-4 py-2 bg-secondary text-xs rounded-md focus:outline-none"
                >
                  {hobby}
                </button>
              ))}
            </div>
            {errors.hobbies && (
              <div className="text-sm text-red-600 mt-1">
                <i class="fa-solid fa-triangle-exclamation me-1"></i>
                {errors.hobbies}
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Collections
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={collectionsText}
              readOnly
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {collectionsOptions.map((collection) => (
                <button
                  key={collection}
                  type="button"
                  onClick={() => handleCollectionClick(collection)}
                  className="px-4 py-2 bg-secondary text-xs rounded-md focus:outline-none"
                >
                  {collection}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-primary text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;

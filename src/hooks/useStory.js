import { useState } from "react";

// TODO: Document types of story: first, middle, last

const useStory = () => {
  // TODO: Question: could this be an object?
  const [story, setStory] = useState([]);

  const updateSection = (textValue, sectionId) => {
    const value = textValue.toString().replace(/[\n\r]/gm, "");
    const section = story[sectionId - 1];
    let newStory = {};
    if (Object.prototype.hasOwnProperty.call(section, "title")) {
      newStory = {
        id: section.id,
        title: value,
      };
    } else if (Object.prototype.hasOwnProperty.call(section, "text")) {
      newStory = {
        id: section.id,
        img: section.img,
        text: value,
      };
    } else if (Object.prototype.hasOwnProperty.call(section, "end")) {
      newStory = {
        id: section.id,
        end: value,
      };
    }

    const newStories = story.map(story =>
      story.id !== newStory.id ? story : newStory
    );
    let newData = { ...story };
    newData = newStories;
    setStory(newData);
  };

  return {
    state: {
      story,
    },
    actions: {
      setStory,
      updateSection,
    },
  };
};

export default useStory;

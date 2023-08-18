import React from "react";
import PropTypes from "prop-types";

/* 
    Refining OBS Component:
    - Each hasOwnProperty called can have its own function 
      to improve readability
    - 
*/

const EditorPanel = ({
  obsStory,
  updateSection,
  setSelectedStory = () => null,
  selectedFont = "monospace",
  fontSize = "1",
}) => {
  // TODO: selectedFont, fontSize as props??
  // TODO: setSelectedStory, storyUpdate should be props. We can create a custom hook to generate these

  // TODO: Extract this out into our custom hook
  // const handleChange = e => {
  //   const index = e.target.getAttribute("data-id");
  //   const value = e.target.value.toString().replace(/[\n\r]/gm, "");
  //   const story = obsStory[index - 1];
  //   let newStory = {};
  //   if (Object.prototype.hasOwnProperty.call(story, "title")) {
  //     newStory = {
  //       id: story.id,
  //       title: value,
  //     };
  //   } else if (Object.prototype.hasOwnProperty.call(story, "text")) {
  //     newStory = {
  //       id: story.id,
  //       img: story.img,
  //       text: value,
  //     };
  //   } else if (Object.prototype.hasOwnProperty.call(story, "end")) {
  //     newStory = {
  //       id: story.id,
  //       end: value,
  //     };
  //   }

  //   const newStories = obsStory.map(story =>
  //     story.id !== newStory.id ? story : newStory
  //   );
  //   let newData = { ...obsStory };
  //   newData = newStories;
  //   // TODO: Call storyUpdate from custom hook
  //   storyUpdate(newData);
  // };

  // This can stay in here since it's basic UI handling and not messing with state
  const avoidEnter = e => {
    // avoiding enter key for the Header
    if (e.key === "Enter" || e.keyCode === 13) {
      e.preventDefault();
      return false;
    }
  };

  return (
    <>
      {obsStory.map((story, index) => (
        <div id={`panel-text${index}`} key={story.id}>
          {Object.prototype.hasOwnProperty.call(story, "title") && (
            <div className="flex m-4 p-1 rounded-md min-h-0" key={story.id}>
              <textarea
                name={story.title}
                onChange={e => updateSection(e.target.value, story.id)}
                onKeyDown={avoidEnter}
                // onClick={() =>
                //   // TODO: take this from a custom hook
                //   setSelectedStory(scrollLock === true ? 0 : story.id)
                // }
                value={story.title}
                data-id={story.id}
                className="flex-grow text-justify ml-2 p-2 text-xl"
                style={{
                  // TODO: both of these should probably be entered as props
                  fontFamily: selectedFont || "sans-serif",
                  fontSize: `${fontSize}rem`,
                }}
              />
            </div>
          )}
          {Object.prototype.hasOwnProperty.call(story, "text") && (
            <div className="flex m-4 p-1 rounded-md" key={story.id}>
              <span className="w-5 h-5 bg-gray-800 rounded-full flex justify-center text-sm text-white items-center p-3 ">
                {/* {index} */}
                {index
                  .toString()
                  .split("")
                  // TODO: What do we do with this?
                  .map(num => `${num}`)}
              </span>
              <textarea
                name={story.text}
                onChange={e => updateSection(e.target.value, story.id)}
                onKeyDown={avoidEnter}
                // onClick={() =>
                //   // TODO: change this to come from custom hook
                //   setSelectedStory(scrollLock === true ? 0 : story.id)
                // }
                value={story.text}
                data-id={story.id}
                className="flex-grow text-justify ml-2 p-2 text-sm"
                style={{
                  // TODO: Change these to come from props
                  fontFamily: selectedFont || "sans-serif",
                  fontSize: `${fontSize}rem`,
                  lineHeight: fontSize > 1.3 ? 1.5 : "",
                }}
              />
            </div>
          )}
          {Object.prototype.hasOwnProperty.call(story, "end") && (
            <div className="flex m-4 p-1 rounded-md min-h-0" key={story.id}>
              <textarea
                name={story.end}
                onChange={e => updateSection(e.target.value, story.id)}
                onKeyDown={avoidEnter}
                // onClick={() =>
                //   // TODO: change this to come from custom hook
                //   setSelectedStory(scrollLock === true ? 0 : story.id)
                // }
                value={story.end}
                data-id={story.id}
                className="flex-grow text-justify ml-2 p-2 text-sm"
                style={{
                  // TODO: Change these to come from props
                  fontFamily: selectedFont || "sans-serif",
                  fontSize: `${fontSize}rem`,
                  lineHeight: fontSize > 1.3 ? 1.5 : "",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

/* OLD SCRIBE CODE

const {
    state: { selectedFont, fontSize },
    actions: { setSelectedStory },
} = useContext(ReferenceContext);

const {
    states: { scrollLock },
} = useContext(ProjectContext);

*/

export default EditorPanel;
EditorPanel.propTypes = {
  /** OBS Story object like {whatever} */
  obsStory: PropTypes.array,
  updateSection: PropTypes.func,
};

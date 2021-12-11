import { useRef } from 'react';

const Start = ({ setUsername }) => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef?.current?.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        type="text"
        placeholder="Masukkan namamu"
        className="startInput"
        autoFocus
        ref={inputRef}
      />
      <button className="startButton" onClick={handleClick}>
        Mulai Kuis
      </button>
    </div>
  );
};

export default Start;

export default Interests = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((interest) => interest !== e.target.name),
    }));
  };

  console.log(interests);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleChange}
          />
          Music
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={interests.includes("javascript")}
            onChange={handleChange}
          />
          Javascript
        </label>
      </div>
      {errors.interests && <span className="errors">{errors.interests}</span>}
    </div>
  );
};

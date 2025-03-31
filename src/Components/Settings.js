export default Settings = ({ data, setData }) => {
  const { theme } = data;
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={(e) =>
              setData((prev) => ({ ...prev, theme: e.target.name }))
            }
          />
          Dark
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="Light"
            checked={theme === "Light"}
            onChange={(e) =>
              setData((prev) => ({ ...prev, theme: e.target.name }))
            }
          />
          Light
        </label>
      </div>
    </div>
  );
};

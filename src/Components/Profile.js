export default Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;

  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {errors.name && <span className="errors">{errors.name}</span>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="text"
          value={age}
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
        />
        {errors.age && <span className="errors">{errors.age}</span>}
      </div>
      <div>
        <label>Email : </label>
        <input
          type="email"
          value={email}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {errors.email && <span className="errors">{errors.email}</span>}
      </div>
    </div>
  );
};

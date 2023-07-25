const CustomInput = (props) => {
  const { labeltext, type } = props;
  return (
    <div>
      <label htmlFor="">{labeltext}</label>
      <input {...props} min={"0"} />
    </div>
  );
};

export default CustomInput;

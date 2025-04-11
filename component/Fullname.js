const Fullname = ({ firstName, lastName }) => {
    const fullName = `${firstName} ${lastName}`;
  
    return (
      <div>
        <h1>{fullName}</h1>
      </div>
    );
  };
  
  export default Fullname;

import React from 'react';

function Header({ name, title, email, web, mobile }) {
  return (
    <div className="header">
      <div className="header-left">
        <h1>{name}</h1>
        <h3>{title}</h3>
      </div>
      <div className="header-right">
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong>Web:</strong> <a href={`https://${web}`}>{web}</a></p>
        <p><strong>Mobile:</strong> {mobile}</p>
      </div>
    </div>
  );
}

export default Header;

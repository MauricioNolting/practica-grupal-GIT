import React from 'react';

const PersonalCard = () => {
  const firstName = 'Jonatan Alexander';
  const lastName = 'Cruz Diaz';

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4">
      <header>
        <img className="w-48 rounded-full mx-auto" src="/jonatan-image.png" alt="" />
      </header>
      <h2 className="text-2xl font-semibold">
        {firstName} {lastName}
      </h2>
      <p className="text-gray-600 mt-2">
        Desarrollador FullStack con 1 año de experiencia con Nest.js,
        JavaScript, React.js bajo Node.js. En el área de Nest.js he trabajado con REST APIS, TypeScript, Mongoose,
        Authentication, Authorization, Docker, MongoDB, Postgres, TypeOrm, Git, GitHub, GitLab. En el área de React.js he trabajado con
        Vite, React Router, React Hooks, entre otras cosas.
      </p>
    </div>
  );
};

export default PersonalCard;

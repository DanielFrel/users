import React from 'react';

export const Success = ({ count }) => {
  return (
    <div class="success-block">
      <h1>🥳</h1>
      {/* <img src="/assets/success.svg" alt="Success" /> */}
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button onClick={() => window.location.reload()} className="send-invite-btn">Назад</button>
    </div>
  );
};

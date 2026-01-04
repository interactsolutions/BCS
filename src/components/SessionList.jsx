import React from 'react';
import { useTranslation } from 'react-i18next';

const SessionList = ({ filters }) => {
  const { t } = useTranslation();
  const allSessions = [
    { id: 1, title: "Opening Session", date: "2025-03-01", speaker: "Dr. Smith" },
    { id: 2, title: "Soil Health Workshop", date: "2025-03-02", speaker: "Prof. Lee" },
    // ... more sessions
  ];
  const sessions = allSessions.filter(s => {
    // example: if filter by year, include those sessions in that year
    if(filters.year && !s.date.startsWith(filters.year)) return false;
    return true;
  });
  return (
    <section className="session-list">
      <h3>{t('session.title')}</h3>
      {sessions.length === 0 ? (
        <p>{t('session.noData')}</p>
      ) : (
        <ul>
          {sessions.map(sess => (
            <li key={sess.id} className="session-item">
              <h4>{sess.title}</h4>
              <p><strong>{sess.date}</strong> – {sess.speaker}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default SessionList;

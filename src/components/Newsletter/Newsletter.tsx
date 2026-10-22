import React, { useState } from 'react';
import './Newsletter.scss';

const Newsletter: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [accepted, setAccepted] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && accepted) {
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setEmail('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="newsletter" aria-label="Inscrição na Newsletter">
      <div className="container newsletter__container">
        <div className="newsletter__info">
          <h2 className="newsletter__title">Inscreva-se na nossa newsletter</h2>
          <p className="newsletter__subtitle">
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <div className="newsletter__form-wrapper">
          {submitted ? (
            <div className="newsletter__success" role="status">
              ✓ Obrigado por se cadastrar na nossa newsletter!
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <div className="newsletter__inputs-row">
                <label htmlFor="newsletter-name" className="sr-only">
                  Digite seu nome
                </label>
                <input
                  id="newsletter-name"
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="newsletter__input"
                />

                <label htmlFor="newsletter-email" className="sr-only">
                  Digite seu e-mail
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter__input"
                />

                <button type="submit" className="newsletter__btn">
                  INSCREVER
                </button>
              </div>

              <label className="newsletter__terms">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  required
                />
                <span>Aceito os termos e condições</span>
              </label>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

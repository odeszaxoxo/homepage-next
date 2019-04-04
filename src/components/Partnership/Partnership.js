import React from 'react';

import { Section } from '../Section/Section';
import { Heading } from '../Heading/Heading';

import './Partnership.css';

export function Partnership() {
  return (
    <Section className="partnership">
      <Heading level="2">Технологическое партнерство с российским ПО</Heading>

      <div className="column column--info">
        <div className="subtitle">
          dialog сотрудничает с вендорами для обеспечения инфраструктуры
          требованиям российского законодательства
        </div>
        <div className="link-box">
          <a className="link--arrow" href="/licenses">
            <span className="link--arrow__text">Подробнее о партнерах</span>
            <img
              src="/images/svg-icons/arrow-link.svg"
              alt=""
              className="link--arrow__icon"
            />
          </a>
        </div>
      </div>
      <div className="column column--partners">
        <div className="partners">
          <a
            className="partner"
            href="https://www.basealt.ru/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="partner__icon"
              src="/images/partner-basealt.png"
              alt="Базальт"
            />
            <div className="partner__name">Базальт</div>
          </a>
          <a
            className="partner"
            href="https://myoffice.ru/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="partner__icon"
              src="/images/partner-moiofis.png"
              alt="МойОфис"
            />
            <div className="partner__name">МойОфис</div>
          </a>
          <a
            className="partner"
            href="https://sailfishos.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              className="partner__icon"
              src="/images/partner-avrora-orig.png"
              alt="Аврора"
            />
            <div className="partner__name">Аврора</div>
          </a>
        </div>
      </div>
    </Section>
  );
}

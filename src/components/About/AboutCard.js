import React from "react";
import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  const { t } = useTranslation(); // Utiliza 't' para la traducción

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('aboutCard.hi_everyone')} <span className="purple">Isaac Romero </span>
            {t('aboutCard.from')} <span className="purple"> Ibarra, Ecuador.</span>
            <br />
            {t('aboutCard.work')}
            <br />
            {t('aboutCard.graduated')}
            <br />
            <br />
            {t('aboutCard.apart_from_coding')}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.reading_psychology')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.reading_poetry')}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t('aboutCard.artificial_intelligence')}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "{t('aboutCard.quote')}"{" "}
          </p>
          <footer className="blockquote-footer">{t('aboutCard.quote_author')}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;


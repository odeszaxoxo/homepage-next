import React from 'react';
import { FormattedMessage } from 'react-intl';

import appLinks from '../../constants/links';

export function DownloadWeb({ isEnterprise }) {
  function handleDownloadAnalytics(event, param) {
    if (typeof window !== 'undefined') {
      window.ga('dlg.send', 'event', 'button', 'download', `${param}`);
      window.yaCounter.reachGoal(`download_${param}`);
    }
  }

  const links = isEnterprise ? appLinks.enterprise : appLinks.cloud;

  return (
    <section className="download__section download__item download__web">
      <h2 className="download__item-title download__web-title">
        <FormattedMessage id="download_web_title" />
      </h2>
      <div className="download__web-pictute">
        <img
          className="download__web-img"
          src={
            isEnterprise
              ? '/images/download/enterprise-web.png'
              : '/images/download/cloud-web.png'
          }
          srcSet={
            isEnterprise ? '/images/download/enterprise-web@2x.png 2x' : ''
          }
          alt={
            isEnterprise
              ? 'Web версия dialog enterprise'
              : 'Web версия облачного приложения платформы dialog'
          }
        />
      </div>
      <div className="download__web-button-box">
        <a
          className="button button--default"
          href={links.web}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => handleDownloadAnalytics(event, 'dialog_web')}
        >
          <FormattedMessage id="start" />
        </a>
      </div>
    </section>
  );
}

DownloadWeb.defaultProps = {
  isEnterprise: false,
};
